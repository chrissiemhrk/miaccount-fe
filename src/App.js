import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
    </Router>
  );
}

export default App;
