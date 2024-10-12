import express from 'express'
// import controllers for events and locations
import { getEvents } from '../controllers/events.js';


const eventsRouter = express.Router()

// define routes to get events and locations
router.post('/events', getEvents);

export default eventsRouter