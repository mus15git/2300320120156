import { useEffect, useState } from "react";
import { Container, Typography, Select, MenuItem } from "@mui/material";
import NotificationCard from "../components/NotificationCard";
import { getNotifications } from "../api/notificationAPI";

function AllNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [type, setType] = useState("");

  useEffect(() => {
    loadData();
  }, [type]);

  const loadData = async () => {
    try {
      const data = await getNotifications(10, 1, type);

      console.log("Notifications:", data);

      setNotifications(data || []);
    } catch (error) {
      console.error("Error loading notifications:", error);
      setNotifications([]);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        All Notifications
      </Typography>

      <Select
        value={type}
        onChange={(e) => setType(e.target.value)}
        sx={{ mb: 2 }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Event">Event</MenuItem>
        <MenuItem value="Result">Result</MenuItem>
        <MenuItem value="Placement">Placement</MenuItem>
      </Select>

      {notifications.length === 0 ? (
        <Typography sx={{ mt: 2 }}>
          No notifications found
        </Typography>
      ) : (
        notifications.map((item) => (
          <NotificationCard
            key={item.ID}
            notification={item}
            viewed={localStorage.getItem(item.ID)}
          />
        ))
      )}
    </Container>
  );
}

export default AllNotifications;