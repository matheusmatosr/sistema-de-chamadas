import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from "./pages/Dashboard";
import { Fragment } from "react";

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={ <SignIn /> } />
          <Route path="/register" element={ <SignUp /> } />
          <Route path="/dashboard" element={ <Dashboard /> } />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
