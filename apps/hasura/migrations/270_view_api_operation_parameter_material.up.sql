-- Create
-- Using our api_operation_material view, look into the parameters field in each one.     
-- #+NAME: api_operation_parameter_material view

CREATE MATERIALIZED VIEW "public"."api_operation_parameter_material" AS 
  SELECT (param.entry ->> 'name'::text) AS name,
         (param.entry ->> 'in'::text) AS "in",
         -- for resource:
         -- if param is body in body, take its $ref from its schema
         -- otherwise, take its type
         replace(
           CASE
           WHEN ((param.entry ->> 'in'::text) = 'body'::text) 
            AND ((param.entry -> 'schema'::text) is not null)
             THEN ((param.entry -> 'schema'::text) ->> '$ref'::text)
           ELSE (param.entry ->> 'type'::text)
           END, '#/definitions/','') AS resource,
         (param.entry ->> 'description'::text) AS description,
         CASE
         WHEN ((param.entry ->> 'required'::text) = 'true') THEN true
         ELSE false
          END AS required,
         CASE
         WHEN ((param.entry ->> 'uniqueItems'::text) = 'true') THEN true
         ELSE false
         END AS unique_items,
         api_operation_material.raw_swagger_id,
         param.entry as entry,
         api_operation_material.operation_id
    FROM api_operation_material
         , jsonb_array_elements(api_operation_material.parameters) WITH ORDINALITY param(entry, index)
          WHERE api_operation_material.parameters IS NOT NULL;

-- Index
-- #+NAME: index the api_operation_material

CREATE UNIQUE INDEX                                  ON api_operation_parameter_material(raw_swagger_id, operation_id, name);
CREATE INDEX api_parameters_materialized_resource    ON api_operation_parameter_material            (resource);
CREATE INDEX api_parameters_materialized_entry       ON api_operation_parameter_material            (entry);
