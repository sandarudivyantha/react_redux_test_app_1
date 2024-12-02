import "./App.css";
import ButtonComponents from "./components/ButtonComponents";
import PostList from "./components/PostList";
import SelectedPost from "./components/SelectedPost";

function App() {
  return (
    <div className="App">
      <h1>wds</h1>
      <ButtonComponents />
      <br />
      <PostList />
      <br/>
      <SelectedPost/>
    </div>
  );
}

export default App;
