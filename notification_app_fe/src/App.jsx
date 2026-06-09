import {
 BrowserRouter,
 Routes,
 Route,
 Link
}
from "react-router-dom";

import {
 AppBar,
 Toolbar,
 Button
}
from "@mui/material";

import AllNotifications
from "./pages/AllNotifications";

import PriorityNotifications
from "./pages/PriorityNotifications";

function App(){

 return(

 <BrowserRouter>

  <AppBar position="static">

   <Toolbar>

    <Button
      color="inherit"
      component={Link}
      to="/"
    >
      All
    </Button>

    <Button
      color="inherit"
      component={Link}
      to="/priority"
    >
      Priority
    </Button>

   </Toolbar>

  </AppBar>

  <Routes>

   <Route
    path="/"
    element={<AllNotifications />}
   />

   <Route
    path="/priority"
    element={<PriorityNotifications />}
   />

  </Routes>

 </BrowserRouter>

 );

}

export default App;