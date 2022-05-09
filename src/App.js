import "./App.css";
import {LeftNav} from "./Components/Navigation/leftNav"
import {Post} from "./Components/Post/Post"
import { Sidecard } from "./Components/sidecard/Sidecard";
import { Profile } from "./Pages/profile/Profile";

function App() {
  return (
    <div className="App">
      <LeftNav/>
      <h2>post</h2>
      <Post/>
      <h2>profile</h2>
      <Profile/>
      <h1>sidecard</h1>
      <Sidecard/>
    </div>
  );
}

export default App;
