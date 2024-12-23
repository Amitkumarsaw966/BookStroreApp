import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Course from "./pages/Course";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar remains fixed on all pages */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/course" component={Course} />
      </Switch>
    </Router>
  );
};

export default App;
