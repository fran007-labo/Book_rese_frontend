import { useSelector } from "react-redux";
import { getSignedIn } from "../reducks/users/selectors";
import { Outlet, Navigate } from 'react-router-dom';

export const PrivateRoute = () => {
  const selector = useSelector((state) => state);
  const isSignedIn = getSignedIn(selector);

  return ( 
    isSignedIn ? <Outlet/> : <Navigate to='/'/>
  )
}
