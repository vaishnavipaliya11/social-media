import "./App.css";
import { LeftNav } from "./Components/Navigation/leftNav";
import { Post } from "./Components/Post/Post";
import { Sidecard } from "./Components/sidecard/Sidecard";
import { Bookmark } from "./Pages/bookmark/Bookmark";
import { Liked } from "./Pages/liked/Liked";
import { Profile } from "./Pages/profile/Profile";
import { Notification } from "./Pages/notification/Notification";
import { Routes, Route } from "react-router-dom";
import { Login } from "./Pages/login/Login";
import {Signup} from "./Pages/signup/SignUp"
import { TopNav } from "./Components/Navigation/topNav";
import { Explore } from "./Pages/explore/explore";
import { Home } from "./Pages/home/Home";

function App() {
  return (
    <div className="App">
    <TopNav />
      <div className="page-container">
        <LeftNav />
       
        <Routes>
        <Route path="/explore" element={<Explore/>}/>
          <Route path="/liked" element={<Liked />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Signup />} />
          <Route path="/"element={<Home/>}/>
        </Routes>
        <Sidecard />
      </div>
    </div>
  );
}

export default App;
