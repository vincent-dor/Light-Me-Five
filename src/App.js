import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import HomePage from "./Components/Homepage/Homepage.jsx";
import ArtistPage from "./Components/Artistpage/Artistpage.jsx";
import WelcomePage from "./Components/Welcomepage/Welcomepage.jsx";
import EventPage from "./Components/Eventpage/Eventpage.jsx";
import UserProfilePage from "./Components/Userprofilepage/Userprofilepage.jsx";
import GroupPage from "./Components/Grouppage/Grouppage.jsx";
import GenrePage from "./Components/Genrepage/Genrepage.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exac path="/" element={<HomePage />} />
        <Route path="/genres" element={<GenrePage />} />
        <Route path="/artists" element={<ArtistPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/groups" element={<GroupPage />} />
        <Route path="/userprofiles" element={<UserProfilePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
