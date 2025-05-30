const { Client } = require('pg');
require('dotenv').config();

// Disable SSL certificate verification for Supabase
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function testConnection() {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false,
            checkServerIdentity: () => undefined
        }
    });

    try {
        console.log('Attempting to connect to database...');
        console.log('Connection string:', process.env.DATABASE_URL?.replace(/:[^:@]+@/, ':****@'));
        
        await client.connect();
        console.log('✅ Database connection successful!');
        
        const result = await client.query('SELECT version()');
        console.log('PostgreSQL version:', result.rows[0].version);
        
    } catch (error) {
        console.error('❌ Database connection failed:', error.message);
        console.error('Error details:', error);
    } finally {
        await client.end();
    }
}

testConnection();
