import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const BASE_URL = "http://4.224.186.213/evaluation-service";

async function getToken() {
  try {
    const response = await fetch(`${BASE_URL}/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "muskan.23b0121048@abes.ac.in",
        name: "Muskan",
        rollNo: "2300320120156",
        accessCode: "cXuqht",
        clientID: "64797274-8d10-49f0-88d4-b44282cda1c5",
        clientSecret: "spEhrpkWkAUYuCZS",
      }),
    });

    const data = await response.json();

   

    if (response.ok && data.access_token) {
      localStorage.setItem("token", data.access_token);
      console.log("Token saved");
    } else {
      console.error("Auth failed:", data);
    }
  } catch (err) {
    console.error(err);
  }
}

async function startApp() {
  await getToken();

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

startApp();