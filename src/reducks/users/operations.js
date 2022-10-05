import { signInAction, signOutAction } from "./actions";
import { auth } from '../../settings/firebase';

export const listenAuthState = () => {
  return (dispatch) => { 
    return auth.onAuthStateChanged( user => {
      if (user) { 
        const userInfo = setSignInValue(user.uid, user.displayName, user.email, user.photoURL)
        dispatch(signInAction(userInfo))
      } else {
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
  };
}

export const signOut = () => {
  return (dispatch) => {
    auth.signOut().then(() => {
      dispatch(signOutAction());
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