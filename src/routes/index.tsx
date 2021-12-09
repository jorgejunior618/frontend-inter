import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import SignIn from '../screens/SignIn';
  import SignUp from '../screens/SignUp';
  import Dashboard from '../screens/Dashboard';

  export const Router = ()=>{
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />}/>
          <Route path="/signin" element={<SignIn />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
      </BrowserRouter>
    )
  }

  export default Router
  