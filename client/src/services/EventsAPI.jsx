// src/services/EventsAPI.jsx

const API_URL = 'http://localhost:5000/api/events'; // Adjust the URL if deploying

// Function to get all events
export const getAllEvents = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch events');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    }
};

// Function to get event by ID
export const getEventById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch event');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching event by ID:', error);
        throw error;
    }
};
