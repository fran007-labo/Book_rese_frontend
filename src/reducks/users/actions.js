export const SIGN_IN = "SIGN_IN"
export const signInAction = (userState) => {
  return { 
    type: "SIGN_IN",
    payload: {
      uid: userState.uid,
      name: userState.name,
      email: userState.email,
      photoURL: userState.photoURL,
      isSignedIn: true,
    }
  }
}

export const SIGN_OUT = "SIGN_OUT"
export const signOutAction = () => {
  return {
    type: "SIGN_OUT",
    payload: { 
      uid: '',
      name: '',
      email: '',
      isSignedIn: false
    }
  }
}