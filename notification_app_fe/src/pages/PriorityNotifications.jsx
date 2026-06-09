import {useEffect,useState}
from "react";

import {
 Container,
 Typography
}
from "@mui/material";

import NotificationCard
from "../components/NotificationCard";

import {
 getNotifications
}
from "../api/notificationApi";

function PriorityNotifications(){

 const [notifications,setNotifications]
 = useState([]);

 useEffect(()=>{

   loadData();

 },[]);

 const loadData = async()=>{

   const data =
   await getNotifications(
     10,
     1
   );

   const weights = {
     Placement:3,
     Result:2,
     Event:1
   };

   const sorted =
   data.notifications.sort(
    (a,b)=>{

      const w =
      weights[b.Type]
      -
      weights[a.Type];

      if(w!==0)
      return w;

      return (
       new Date(b.Timestamp)
       -
       new Date(a.Timestamp)
      );
    }
   );

   setNotifications(
    sorted.slice(0,10)
   );

 };

 return(

  <Container>

   <Typography
    variant="h4"
    gutterBottom
   >
    Priority Notifications
   </Typography>

   {
    notifications.map(item=>(

     <NotificationCard
      key={item.ID}
      notification={item}
      viewed={
       localStorage.getItem(item.ID)
      }
     />

    ))
   }

  </Container>

 );

}

export default PriorityNotifications;