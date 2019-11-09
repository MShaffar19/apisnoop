-- 920: Populate Audits Up
--   :PROPERTIES:
--   :header-args:sql-mode+: :tangle ../apps/hasura/migrations/920_populate_audit_events.up.sql
--   :END:

select * from load_audit_events('ci-kubernetes-e2e-gci-gce', '1188637253832806405');
REFRESH MATERIALIZED VIEW api_operation_material;
REFRESH MATERIALIZED VIEW api_operation_parameter_material;
