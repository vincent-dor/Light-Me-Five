import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState,useContext } from "react";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import HomePage from "./Components/Homepage/Homepage.jsx";
import ArtistPage from "./Components/Artistpage/Artistpage.jsx";
import WelcomePage from "./Components/Welcomepage/Welcomepage.jsx";
import EventPage from "./Components/Eventpage/Eventpage.jsx";
import UserProfilePage from "./Components/Userprofilepage/Userprofilepage.jsx";
import GroupPage from "./Components/Grouppage/Grouppage.jsx";
import GenrePage from "./Components/Genrepage/Genrepage.jsx";
import Auth from "./Components/contexts/Auth.js";
import AuthenticatedRoute from "./Components/AuthenticatedRoute/AuthenticatedRoute.jsx";
import { hasAuthenticated } from "./services/AuthApi.js";

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated);

  return (
    <Auth.Provider value={{ isAuthenticated, setIsAuthenticated}}>
    <Router>
      <Header />
      <Routes>
        <Route exac path="/" element={<HomePage />} />{" "}
        <Route path="/genres" element={<GenrePage />} />{" "}
        <Route path="/genres" element={<AuthenticatedRoute />} />{" "}
        <Route path="/artists" element={<ArtistPage />} />{" "}
        <Route path="/welcome" element={<WelcomePage />} />{" "}
        <Route path="/events" element={<EventPage />} />{" "}
        <Route path="/groups" element={<GroupPage />} />{" "}
        <Route path="/userprofiles" element={<UserProfilePage />} />{" "}
      </Routes>{" "}
      <Footer />
    </Router>
  </Auth.Provider>
  );
}

export default App;
