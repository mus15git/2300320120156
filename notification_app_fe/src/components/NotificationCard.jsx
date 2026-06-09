import {
  Card,
  CardContent,
  Typography
} from "@mui/material";

function NotificationCard({
  notification,
  viewed
}) {
  return (
    <Card
  onClick={() => {
    localStorage.setItem(notification.ID, "viewed");
    window.location.reload();
  }}
  sx={{
    mb: 2,
    bgcolor: viewed ? "#f5f5f5" : "#e3f2fd",
    cursor: "pointer"
  }}
>
      <CardContent>

        <Typography variant="h6">
          {notification.Type}
        </Typography>

        <Typography>
          {notification.Message}
        </Typography>

        <Typography>
          {new Date(notification.Timestamp).toLocaleString()}
        </Typography>

      </CardContent>
    </Card>
  );
}

export default NotificationCard;    