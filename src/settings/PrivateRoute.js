import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSignedIn } from "../reducks/users/selectors";
import { listenAuthState } from "../reducks/users/operations";

import { Outlet, Navigate } from 'react-router-dom';

export const PrivateRoute = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const isSignedIn = getSignedIn(selector);

  useEffect( () => {
    if (!isSignedIn) {
      dispatch(listenAuthState())
    }
  }, [dispatch, isSignedIn]);
  
  return ( 
    isSignedIn ? <Outlet/> : <Navigate to='/'/>
  )
}
