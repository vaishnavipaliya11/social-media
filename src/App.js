import "./App.css";
import {LeftNav} from "./Components/Navigation/leftNav"
import {Post} from "./Components/Post/Post"

function App() {
  return (
    <div className="App">
      <LeftNav/>
      <Post/>
    </div>
  );
}

export default App;
