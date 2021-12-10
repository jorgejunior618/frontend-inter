import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import SignIn from '../screens/SignIn';
  import SignUp from '../screens/SignUp';
  import Dashboard from '../screens/Dashboard';
import PageNotFound from "../screens/PageNotFound";

  export const Router = ()=>{
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />}/>
          <Route path="/signin" element={<SignIn />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
      </BrowserRouter>
    )
  }

  export default Router
  