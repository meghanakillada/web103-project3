import { pool } from './database.js';

const createTables = async () => {
    try {
        const createLocationsTable = `
            CREATE TABLE IF NOT EXISTS locations (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                address VARCHAR(255)
            );
        `;

        const createEventsTable = `
            CREATE TABLE IF NOT EXISTS events (
                id SERIAL PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                description TEXT,
                date TIMESTAMP NOT NULL,
                location_id INT REFERENCES locations(id) ON DELETE SET NULL
            );
        `;

        await pool.query(createLocationsTable);
        await pool.query(createEventsTable);
        
        console.log('Tables created successfully');

    } catch (error) {
        console.error('Error creating tables', error);
    }
};

const insertSampleData = async () => {
    try {
        // Sample data for locations
        const locations = [
            {
                name: 'Community Hall',
                address: '123 Main St'
            },
            {
                name: 'Library',
                address: '456 Oak St'
            },
            {
                name: 'City Park',
                address: '789 Pine St'
            }
        ];

        // Insert locations
        for (const location of locations) {
            await pool.query(
                'INSERT INTO locations (name, address) VALUES ($1, $2)',
                [location.name, location.address]
            );
        }
        console.log('Sample locations inserted successfully');

        // Sample data for events
        const events = [
            {
                title: 'Music Concert',
                description: 'An evening of classical music',
                date: '2024-10-15 19:00',
                location_id: 1 // Reference to the first location
            },
            {
                title: 'Book Reading',
                description: 'Join us for an evening of literature',
                date: '2024-10-20 18:00',
                location_id: 2 // Reference to the second location
            },
            {
                title: 'Yoga in the Park',
                description: 'Outdoor yoga session for all levels',
                date: '2024-10-25 07:00',
                location_id: 3 // Reference to the third location
            }
        ];

        // Insert events
        for (const event of events) {
            await pool.query(
                'INSERT INTO events (title, description, date, location_id) VALUES ($1, $2, $3, $4)',
                [event.title, event.description, event.date, event.location_id]
            );
        }
        console.log('Sample events inserted successfully');

    } catch (error) {
        console.error('Error inserting sample data', error);
    }
};

const resetDatabase = async () => {
    await createTables();
    await insertSampleData();
    pool.end(); // Close the database connection
};

// Run the reset script
resetDatabase();