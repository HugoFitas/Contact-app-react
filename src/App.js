import logo from "./logo.svg";
import "./App.css";
import Contact from "./components/Contact";

const user = {
  username: "Hugo Fitas",
  avatar: "https://avatars.githubusercontent.com/u/36313321?s=60&v=4",
  isOnline: true,
};

function App() {
  return (
    <div className="App">
      <Contact {...user} />
    </div>
  );
}

export default App;
