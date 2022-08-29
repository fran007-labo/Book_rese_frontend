import {useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import axios from 'axios';

// firebase
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from "../settings/firebase";

// reducks
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../reducks/users/operations';

export default function SignIn() {
  const selector = useSelector((state) => state);
  const [user] = useAuthState(auth);
  console.log(selector.users);

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
  const dispatch = useDispatch();
  const url = 'http://localhost:8000/api/v1/users/registrations';
  const SingInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      const data = { uid: user.uid, name: user.displayName, email: user.email };
      user.getIdToken().then(idToken => {
        axios.post(url, { token: idToken, registration: data });
      });
      dispatch(signIn(user.uid, user.displayName, user.email));

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
  const url = 'http://localhost:8000/api/v1/users/registrations';
  const singOut = () => {
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