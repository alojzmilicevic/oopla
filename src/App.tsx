import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes,
} from "react-router";
import { Home } from "./functions/home/module/Home";
import { useApp } from "./useApp";
import { AppSkeleton } from "./AppSkeleton";
import { Login } from "./functions/auth/modules/Login";

function App() {
    const { user, loading } = useApp();

    if (loading) {
        return <AppSkeleton />
    }

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={user ? <Home /> : <Navigate to="/login" />}
                />
                <Route
                    path="/login"
                    element={user ? <Navigate to="/" /> : <Login />}
                />
            </Routes>
        </Router>
    );
}

export default App;
