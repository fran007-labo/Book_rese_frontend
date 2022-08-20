import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Button from '@mui/material/Button';
import axios from 'axios';

export default function FirebaseAuth() {
  const [user] = useAuthState(auth);

  return (
    <div>
      {user ? ( 
        <>
          <UserInfo />
          <SingOutButton />
        </>
      ) : (
        <>
          <SingInButton />
        </>
      )}
    </div>
  )
}

// サインイン 
function SingInButton() {
  const SingInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      const url = 'http://localhost:8000/api/v1/users/registrations';
      const user = result.user
      const data = { name: user.displayName, email: user.email, uid: user.uid }
      user.getIdToken().then(idToken => {
        axios.post(url, { token: idToken, registration: data });
      })

    }).catch((error) => {
      console.log('error Occur')
    });
  } 
  return (
    <div>
      <Button onClick={SingInWithGoogle} variant="contained" color="success">
        グーグルでサインイン
      </Button>
    </div> 
  )
}

// サインアウト
function SingOutButton() {
  const singOut = () => {
    const url = 'http://localhost:8000/api/v1/users/sign_outs'
    axios.post(url);
    auth.signOut();
  }

  return (
    <div>
      <Button onClick={() => singOut()} color="secondary">
        サインアウト
      </Button>
    </div>
  )
}

function UserInfo() {
  return (
    <div className="userInfo">
      <img src={auth.currentUser.photoURL} alt="" />
      <p>{auth.currentUser.displayName}</p>
    </div>
  );
}