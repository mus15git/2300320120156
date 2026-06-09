// src/api/notificationAPI.js

const BASE_URL = "http://4.224.186.213/evaluation-service";

export const getNotifications = async (
  limit = 10,
  page = 1
) => {
  try {
    const token = localStorage.getItem("token");

   
    if (!token) {
      throw new Error("No token found in localStorage");
    }

    const response = await fetch(
      `${BASE_URL}/notifications?limit=${limit}&page=${page}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch notifications");
    }

    return data.notifications || [];
  } catch (error) {
    console.error("Notification API Error:", error);
    return [];
  }
};