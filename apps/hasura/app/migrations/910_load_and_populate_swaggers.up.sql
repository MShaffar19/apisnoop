-- 910: Populate Swaggers Up
--     :PROPERTIES:
--     :header-args:sql-mode+: :tangle ./app/migrations/910_load_and_populate_swaggers.up.sql
--     :header-args:sql-mode+: :results silent
--     :END:

-- [[file:~/apisnoop/apps/hasura/index.org::*910:%20Populate%20Swaggers%20Up][910: Populate Swaggers Up:1]]
select * from load_swagger();
--populate the apisnoop/live bucket/job to help when writing test functions
select * from load_swagger(null, null, true);
-- 910: Populate Swaggers Up:1 ends here
