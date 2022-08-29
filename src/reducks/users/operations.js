import { signInAction, signOutAction } from "./actions";
import { push } from "connected-react-router";
import { auth } from '../../settings/firebase';

export const listenAuthState = () => {
  return (dispatch) => { 
    return auth.onAuthStateChanged( user => {
      if (user) { 
        signInDispatch(dispatch, user.uid, user.displayName, user.email)
        dispatch(push('/'));
      } else {
        dispatch(push('/Cart'));
      }
    })
  }
} 

export const signIn = (uid, displayName, email) => {
  return (dispatch) => {
    signInDispatch(dispatch, uid, displayName, email);
    dispatch(push('/'))
  };
}

export const signOut = () => {
  return (dispatch) => {
    auth.signOut().then(() => {
      dispatch(signOutAction());
      dispatch(push('/'));
    });
  }
}

function signInDispatch(dispatch, uid, name, email) { 
  return dispatch(
    signInAction({
      uid: uid, 
      name: name,
      email: email,
      isSignedIn: true
    })
  )
}