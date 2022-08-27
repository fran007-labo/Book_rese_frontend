import { signInAction } from "./actions";
import { push } from "connected-react-router";
import auth from '../../firebase'

export const listenAuthState = (uid, displayName, email) => {

}

export const signIn = (uid, displayName, email) => {
  return (dispatch) => {
    dispatch(signInAction({
      uid: uid, 
      username: displayName,
      email: email,
      isSignedIn: true
    }))
    dispatch(push('/'))
  } 
}