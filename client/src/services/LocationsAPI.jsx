// src/services/LocationsAPI.jsx

const API_URL = 'http://localhost:5000/api/locations'; // Adjust the URL if deploying

// Function to get all locations
export const getAllLocations = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch locations');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching locations:', error);
        throw error;
    }
};

// Function to get location by ID
export const getLocationById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch location');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching location by ID:', error);
        throw error;
    }
};

export default {
    getAllLocations,
    getLocationById
};