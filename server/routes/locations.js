import express from 'express'
// import controllers for events and locations
import { getLocations } from '../controllers/locations.js';

const locationsRouter = express.Router()

// define routes to get events and locations
router.get('/locations', getLocations);


export default locationsRrouter