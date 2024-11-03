import axios from './axios';

export const getActivities = async (accessToken) => {
  try {
    const response = await axios.get('/api/v3/athlete/activities', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching activities:', error);
    throw error;
  }
};

export const createActivity = async (activityData, accessToken) => {
  try {
    const response = await axios.post('/api/v3/activities', activityData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating activity:', error);
    throw error;
  }
};
