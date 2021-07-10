import {
     BrowserRouter as Router,
     Switch,
     Route,
} from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";


const AppRouter = () => {
     return (
       <Router >
            <Switch>

            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            </Switch>
       </Router>
     )
}

export default AppRouter;
