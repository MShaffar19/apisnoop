- [Background](#sec-1)
- [Checking our work in apisnoop](#sec-2)
  - [Does this test exist in our database?](#sec-2-1)
  - [What endpoints does this test hit?](#sec-2-2)
- [Checking our work using jq](#sec-3)
- [Closing Thoughts and Next Steps](#sec-4)


# Background<a id="sec-1"></a>

There is a e2e conformance test to test whether an event can be created, read, patched, and deleted(<https://github.com/kubernetes/kubernetes/blob/master/test/e2e/apimachinery/events.go>) In this test, it seems as if it should hit namespaced events(<https://github.com/kubernetes/kubernetes/blob/master/test/e2e/apimachinery/events.go#L101>), for example the endpoint `readCoreV1NamespacedEvent`.

However, according to apisnoop, this endpoint is not hit by any test. When we look through the raw logs apisnoop consumes, it also appears that this endpoint is not hit. We are uncertain why this test is not hitting an endpoint it seems to clearly be written to it.

# Checking our work in apisnoop<a id="sec-2"></a>

## Does this test exist in our database?<a id="sec-2-1"></a>

The description of the test in question is "should ensure that an event can be fetched, patched, deleted, and listed" this string ends up in the useragent that hits the cluster during the test run. We parse these useragents to grab the test. We will look specifically at events from this test run: <https://prow.k8s.io/view/gcs/kubernetes-jenkins/logs/ci-kubernetes-e2e-gci-gce/1313553049469325312>

```sql-mode
select distinct test
  from audit_event
 where useragent like '%[sig-api-machinery]%should ensure that an event can be fetched, patched, deleted, and listed%'
  and source = 'https://prow.k8s.io/view/gcs/kubernetes-jenkins/logs/ci-kubernetes-e2e-gci-gce/1313553049469325312' ;
```

```example
                                                       test
-------------------------------------------------------------------------------------------------------------------
 [sig-api-machinery] Events should ensure that an event can be fetched, patched, deleted, and listed [Conformance]
(1 row)

```

The test is in the audit events from that test run, and in our snoop database.

## What endpoints does this test hit?<a id="sec-2-2"></a>

We can look at the endpoints and the exact request uri being hit by this test. Our endpoint in question does not appear in the db.

```sql-mode
select distinct endpoint, (data->>'requestURI') as request
  from audit_event
 where useragent like '%[sig-api-machinery]%should ensure that an event can be fetched, patched, deleted, and listed%'
   and source = 'https://prow.k8s.io/view/gcs/kubernetes-jenkins/logs/ci-kubernetes-e2e-gci-gce/1313553049469325312' ;
```

```example
                    endpoint                    |                                                                                     request
------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 createAuthorizationV1SubjectAccessReview       | /apis/authorization.k8s.io/v1/subjectaccessreviews
 createCoreV1Namespace                          | /api/v1/namespaces
 createRbacAuthorizationV1NamespacedRoleBinding | /apis/rbac.authorization.k8s.io/v1/namespaces/events-3086/rolebindings
 deleteCoreV1Namespace                          | /api/v1/namespaces/events-3086
 listCoreV1NamespacedServiceAccount             | /api/v1/namespaces/events-3086/serviceaccounts?allowWatchBookmarks=true&fieldSelector=metadata.name%3Ddefault&resourceVersion=23730&timeout=6m34s&timeoutSeconds=394&watch=true
 listCoreV1NamespacedServiceAccount             | /api/v1/namespaces/events-3086/serviceaccounts?allowWatchBookmarks=true&fieldSelector=metadata.name%3Ddefault&resourceVersion=23752&timeout=8m12s&timeoutSeconds=492&watch=true
 listCoreV1NamespacedServiceAccount             | /api/v1/namespaces/events-3086/serviceaccounts?fieldSelector=metadata.name%3Ddefault&limit=500&resourceVersion=0
 listCoreV1Node                                 | /api/v1/nodes
(8 rows)

```

# Checking our work using jq<a id="sec-3"></a>

As a sanity check, we parsed the raw logs using jq to see if there were any uri's this test was hitting that weren't showing in our db.

If we look at the build log for the logs, the test seems to go through all its steps succesffully:

```shell
curl -L https://storage.googleapis.com/kubernetes-jenkins/logs/ci-kubernetes-e2e-gci-gce/1313553049469325312/build-log.txt \
| grep -A32 19:06:01.175
```

    I1006 19:06:01.175] [36mS[0m
    I1006 19:06:01.176] [90m------------------------------[0m
    I1006 19:06:01.176] [BeforeEach] [sig-instrumentation] Events API
    I1006 19:06:01.176]   /go/src/k8s.io/kubernetes/_output/dockerized/go/src/k8s.io/kubernetes/test/e2e/framework/framework.go:174
    I1006 19:06:01.176] [1mSTEP[0m: Creating a kubernetes client
    I1006 19:06:01.177] Oct  6 19:06:00.017: INFO: >>> kubeConfig: /workspace/.kube/config
    I1006 19:06:01.177] [1mSTEP[0m: Building a namespace api object, basename events
    I1006 19:06:01.177] [1mSTEP[0m: Binding the e2e-test-privileged-psp PodSecurityPolicy to the default service account in events-5348
    I1006 19:06:01.177] [1mSTEP[0m: Waiting for a default service account to be provisioned in namespace
    I1006 19:06:01.177] [BeforeEach] [sig-instrumentation] Events API
    I1006 19:06:01.177]   /go/src/k8s.io/kubernetes/_output/dockerized/go/src/k8s.io/kubernetes/test/e2e/instrumentation/events.go:81
    I1006 19:06:01.178] [It] should ensure that an event can be fetched, patched, deleted, and listed [Conformance]
    I1006 19:06:01.178]   /go/src/k8s.io/kubernetes/_output/dockerized/go/src/k8s.io/kubernetes/test/e2e/framework/framework.go:629
    I1006 19:06:01.178] [1mSTEP[0m: creating a test event
    I1006 19:06:01.178] [1mSTEP[0m: listing events in all namespaces
    I1006 19:06:01.178] [1mSTEP[0m: listing events in test namespace
    I1006 19:06:01.178] [1mSTEP[0m: listing events with field selection filtering on source
    I1006 19:06:01.179] [1mSTEP[0m: listing events with field selection filtering on reportingController
    I1006 19:06:01.179] [1mSTEP[0m: getting the test event
    I1006 19:06:01.179] [1mSTEP[0m: patching the test event
    I1006 19:06:01.179] [1mSTEP[0m: getting the test event
    I1006 19:06:01.179] [1mSTEP[0m: updating the test event
    I1006 19:06:01.179] [1mSTEP[0m: getting the test event
    I1006 19:06:01.179] [1mSTEP[0m: deleting the test event
    I1006 19:06:01.180] [1mSTEP[0m: listing events in all namespaces
    I1006 19:06:01.180] [1mSTEP[0m: listing events in test namespace
    I1006 19:06:01.180] [AfterEach] [sig-instrumentation] Events API
    I1006 19:06:01.180]   /go/src/k8s.io/kubernetes/_output/dockerized/go/src/k8s.io/kubernetes/test/e2e/framework/framework.go:175
    I1006 19:06:01.180] Oct  6 19:06:01.086: INFO: Waiting up to 3m0s for all (but 0) nodes to be ready
    I1006 19:06:01.180] [1mSTEP[0m: Destroying namespace "events-5348" for this suite.
    I1006 19:06:01.180]
    I1006 19:06:01.679] [32m•[0m
    I1006 19:06:01.679] [90m------------------------------[0m

So downloaded the raw log

```shell
curl -L https://storage.googleapis.com/kubernetes-jenkins/logs/ci-kubernetes-e2e-gci-gce/1313553049469325312/artifacts/bootstrap-e2e-master/kube-apiserver-audit.log -o audit.log
```

filtered its events to those related to our test.

```shell
cat audit.log \
  | jq -c '. | select( .userAgent == "e2e.test/v1.20.0 (linux/amd64) kubernetes/f30d6a4 -- [sig-api-machinery] Events should ensure that an event can be fetched, patched, deleted, and listed [Conformance]" )' \
  > ourtest.json
```

then filtered this list to just show the requestURI.

```shell
cat ourtest.json | jq .requestURI | sort | uniq
```

    "/apis/authorization.k8s.io/v1/subjectaccessreviews"
    "/apis/rbac.authorization.k8s.io/v1/namespaces/events-3086/rolebindings"
    "/api/v1/namespaces"
    "/api/v1/namespaces/events-3086"
    "/api/v1/namespaces/events-3086/serviceaccounts?allowWatchBookmarks=true&fieldSelector=metadata.name%3Ddefault&resourceVersion=23730&timeout=6m34s&timeoutSeconds=394&watch=true"
    "/api/v1/namespaces/events-3086/serviceaccounts?allowWatchBookmarks=true&fieldSelector=metadata.name%3Ddefault&resourceVersion=23752&timeout=8m12s&timeoutSeconds=492&watch=true"
    "/api/v1/namespaces/events-3086/serviceaccounts?fieldSelector=metadata.name%3Ddefault&limit=500&resourceVersion=0"
    "/api/v1/nodes"

While the operation<sub>id</sub>'s (what we call the endpoint in apisnoop) is not included in the raw log, we can compare these uri's to those in the database, to see if there's any missing.

```sql-mode
select distinct (data->>'requestURI') as requestURI
  from audit_event
 where useragent like '%[sig-api-machinery]%should ensure that an event can be fetched, patched, deleted, and listed%'
   and source = 'https://prow.k8s.io/view/gcs/kubernetes-jenkins/logs/ci-kubernetes-e2e-gci-gce/1313553049469325312'
 order by requestURI;
```

```example
                                                                                   requesturi
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 /apis/authorization.k8s.io/v1/subjectaccessreviews
 /apis/rbac.authorization.k8s.io/v1/namespaces/events-3086/rolebindings
 /api/v1/namespaces
 /api/v1/namespaces/events-3086
 /api/v1/namespaces/events-3086/serviceaccounts?allowWatchBookmarks=true&fieldSelector=metadata.name%3Ddefault&resourceVersion=23730&timeout=6m34s&timeoutSeconds=394&watch=true
 /api/v1/namespaces/events-3086/serviceaccounts?allowWatchBookmarks=true&fieldSelector=metadata.name%3Ddefault&resourceVersion=23752&timeout=8m12s&timeoutSeconds=492&watch=true
 /api/v1/namespaces/events-3086/serviceaccounts?fieldSelector=metadata.name%3Ddefault&limit=500&resourceVersion=0
 /api/v1/nodes
(8 rows)
```

The same uri's are being hit in the raw logs as in the database, which we'd expect.

If we take a look at the endpoints that are hit.

```sql-mode
select distinct endpoint
  from audit_event
 where useragent like '%[sig-api-machinery]%should ensure that an event can be fetched, patched, deleted, and listed%'
   and source = 'https://prow.k8s.io/view/gcs/kubernetes-jenkins/logs/ci-kubernetes-e2e-gci-gce/1313553049469325312';
```

```example
                    endpoint
------------------------------------------------
 createAuthorizationV1SubjectAccessReview
 createCoreV1Namespace
 createRbacAuthorizationV1NamespacedRoleBinding
 deleteCoreV1Namespace
 listCoreV1NamespacedServiceAccount
 listCoreV1Node
(6 rows)

```

there are none related to reading or patching, and our endpoint in question does not appear.

# Closing Thoughts and Next Steps<a id="sec-4"></a>

We are fairly certain that this test, as it appears in the apiserver raw logs used by apisnoop, does not hit all the endpoints one would expect it to hit.

It's unclear why this would be, or if there are different logs that should be used. Could we be reading the test function incorrectly, or is it possible not all endpoint hits are being picked up for the audit events?