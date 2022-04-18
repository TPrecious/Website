import { Route, Routes } from "react-router"
import Login from '../components/login';
import Profile from '../components/profile';
import Settings from '../components/settings';
import About from '../components/about';
import SignUp from '../components/signup';
import ResetPassword from '../components/resetpassword';
import ContactUs from '../components/contactus';
import App from '../App';
import NotFound from "../components/notfound";
import Home from "../components/secure/home";
import RequireAuth from "../services/require-auth";
import PreTestPage from '../components/pretestpage';
import Completed from "../components/secure/completed";
import Results from "../components/results";


const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/About" element={<About />} />
            <Route path="/ResetPassword" element={<ResetPassword />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/SignUP" element={<SignUp />} />
            <Route path="/Results" element={
                <RequireAuth>
                    <Results />
                </RequireAuth>
            } />
            <Route path="/Completed" element={
                <RequireAuth>
                    <Completed />
                </RequireAuth>
            } />
            <Route path="/Home" element={
                <RequireAuth>
                    <Home />
                </RequireAuth>
            } />
            <Route path="/PreTestPage" element={
                <RequireAuth>
                    <PreTestPage />
                </RequireAuth>
            } />
            <Route path="/Profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
export default MyRoutes 