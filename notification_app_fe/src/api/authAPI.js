const BASE_URL = "http://4.224.186.213/evaluation-service";

export const getToken = async () => {
  try {
    const response = await fetch(`${BASE_URL}/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: import.meta.env.VITE_EMAIL,
        name: import.meta.env.VITE_NAME,
        rollNo: import.meta.env.VITE_ROLLNO,
        accessCode: import.meta.env.VITE_ACCESS_CODE,
        clientID: import.meta.env.VITE_CLIENT_ID,
        clientSecret: import.meta.env.VITE_CLIENT_SECRET,
      }),
    });

    const data = await response.json();

    if (response.ok && data.access_token) {
      localStorage.setItem("token", data.access_token);
      console.log("Token generated successfully");
      return data.access_token;
    }

    console.error("Failed to generate token:", data);
    return null;
  } catch (error) {
    console.error("Auth API Error:", error);
    return null;
  }
};