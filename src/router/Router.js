import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Main from '../pages/Main'
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Switch>

                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/' component={Main} />
            </Switch>
        </Router>
    )
}

export default AppRouter;