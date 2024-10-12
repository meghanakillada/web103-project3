import { pool } from '../config/database.js';

export const getLocations = async (req, res) => {
    try {
        const query = `SELECT * FROM locations`;
        const result = await pool.query(query);
        res.json(result.rows);
    } catch (error) {
        res.status(500).send('Error fetching locations');
    }
};