import { pool } from '../config/database.js';

export const getEvents = async (req, res) => {
    try {
        const query = `
            SELECT events.*, locations.name as location_name, locations.address as location_address
            FROM events
            LEFT JOIN locations ON events.location_id = locations.id;
        `;
        const result = await pool.query(query);
        res.json(result.rows);
    } catch (error) {
        res.status(500).send('Error fetching events with locations');
    }
};