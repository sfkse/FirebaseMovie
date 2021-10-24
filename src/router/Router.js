import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";
import Main from '../pages/Main'
import Login from "../pages/Login";
import Register from "../pages/Register";
import { signInWithGoogle } from "../auth/firebase";

const AppRouter = () => {


    const handleGoogleRegister = (history) => {
        signInWithGoogle(history)

    }
    return (
        <Router>
            <Navbar />
            <Switch>

                <Route path='/login' component={() => <Login handleGoogleRegister={handleGoogleRegister} />} />
                <Route path='/register' component={() => <Register handleGoogleRegister={handleGoogleRegister} />} />
                <Route path='/' component={Main} />
            </Switch>
        </Router>
    )
}

export default AppRouter;