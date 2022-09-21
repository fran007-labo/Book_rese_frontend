import { signInAction, signOutAction } from "./actions";
import { push } from "connected-react-router";
import { auth } from '../../settings/firebase';

export const listenAuthState = () => {
  return (dispatch) => { 
    return auth.onAuthStateChanged( user => {
      if (user) { 
        const userInfo = setSignInValue(user.uid, user.displayName, user.email, user.photoURL)
        dispatch(signInAction(userInfo))
      } else {
        // dispatch(push('/Cart'));
        console.log('users/operation.js userがログインしていません')
      }
    })
  }
} 

export const signIn = (uid, displayName, email, photoURL) => {
  return (dispatch) => {
    const userInfo = setSignInValue(uid, displayName, email, photoURL);
    console.log(userInfo);
    dispatch(signInAction(userInfo));
    
    // dispatch(push('/'))
  };
}

export const signOut = () => {
  return (dispatch) => {
    auth.signOut().then(() => {
      dispatch(signOutAction());
      // dispatch(push('/'));
    }); 
  }
}

function setSignInValue(uid, name, email, photoURL) { 
  return {
    uid: uid, 
    name: name,
    email: email,
    photoURL: photoURL,
    isSignedIn: true
  }
}