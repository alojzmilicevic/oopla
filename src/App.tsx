import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes,
} from "react-router";
import { Login } from "./auth/modules/Login";
import { Home } from "./home/Home";
import { useApp } from "./useApp";
import { AppSkeleton } from "./AppSkeleton";

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
