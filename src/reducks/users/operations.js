import { signInAction } from "./actions";
import { push } from "connected-react-router";

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