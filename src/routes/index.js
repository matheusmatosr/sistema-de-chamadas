import { BrowserRouter, Routes } from 'react-router-dom';
import Route from './Route';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <SignIn /> } />
                <Route path="/register" element={ <SignUp /> } />

                <Route path="/dashboard" element={ <Dashboard /> } isPrivate />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;