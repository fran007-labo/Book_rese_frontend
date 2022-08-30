import { signInAction, signOutAction } from "./actions";
import { push } from "connected-react-router";
import { auth } from '../../settings/firebase';

export const listenAuthState = () => {
  return (dispatch) => { 
    return auth.onAuthStateChanged( user => {
      if (user) { 
        const userInfo = setSignInValue(user.uid, user.displayName, user.email)
        dispatch(signInAction(userInfo))
      } else {
        // dispatch(push('/Cart'));
        console.log('operation.js listenAuthState error')
      }
    })
  }
} 

export const signIn = (uid, displayName, email) => {
  return (dispatch) => {
    const userInfo = setSignInValue(uid, displayName, email)
    dispatch(signInAction(userInfo));
    
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

function setSignInValue(uid, name, email) { 
  return {
    uid: uid, 
    name: name,
    email: email,
    isSignedIn: true
  }
}