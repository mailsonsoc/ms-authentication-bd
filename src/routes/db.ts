import { Pool } from 'pg';

const connectionString = '<link de seu bd>';

const db = new Pool({connectionString});

export default db;