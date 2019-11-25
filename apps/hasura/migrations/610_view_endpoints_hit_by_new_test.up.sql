-- 610: Endpoints Hit by New Test
--    :PROPERTIES:
--    :header-args:sql-mode+: :tangle ../apps/hasura/migrations/610_view_endpoints_hit_by_new_test.up.sql
--    :END:
--   #+NAME: endpoints hit by new test

CREATE VIEW "public"."endpoints_hit_by_new_test" AS
  WITH live_testing_endpoints AS (
    SELECT DISTINCT
      operation_id,
      count(1) as hits
      FROM
          audit_event
     WHERE useragent = 'live-test-writing'
     GROUP BY operation_id
  ), baseline AS  (
    SELECT DISTINCT
      operation_id,
      tested,
      conformance_tested
      FROM endpoint_coverage
     WHERE bucket != 'apisnoop'
  )
  SELECT DISTINCT
    lte.operation_id,
    b.tested as hit_by_ete,
    lte.hits as hit_by_new_test
    FROM live_testing_endpoints lte
           JOIN baseline b ON (b.operation_id = lte.operation_id);
