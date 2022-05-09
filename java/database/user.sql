-- ********************************************************************************
-- This script creates the database users and grants them the necessary permissions
-- ********************************************************************************

CREATE USER jit
WITH PASSWORD '103195';

GRANT ALL
ON ALL TABLES IN SCHEMA public
TO jit;

GRANT ALL
ON ALL SEQUENCES IN SCHEMA public
TO jit;
