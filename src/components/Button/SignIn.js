import {useEffect} from 'react'
import Button from '@mui/material/Button';
import axios from 'axios';

// firebase
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from "../../settings/firebase";

// reducks
import { useDispatch, useSelector } from 'react-redux';
import { signIn, signOut, listenAuthState} from '../../reducks/users/operations';
import { getSignedIn, getUserName, getUserPhotoURL } from "../../reducks/users/selectors";

export default function SignIn() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const isSignedIn = getSignedIn(selector);
  const user = isSignedIn;

  useEffect( () => {
    if (!user) {
      dispatch(listenAuthState());
    }
  }, [dispatch, isSignedIn]);

  return (
    <>
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
    </>
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
      dispatch(signIn(user.uid, user.displayName, user.email, user.photoURL));

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
  const dispatch = useDispatch();
  const url = 'http://localhost:8000/api/v1/users/registrations';
  const singOut = () => {
    auth.signOut();
    dispatch(signOut())
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
  const selector = useSelector((state) => state);
  const userName = getUserName(selector);
  const userPhotoURL = getUserPhotoURL(selector);

  return (
    <div className="userInfo">
      <img src={userPhotoURL} alt="" />
      <p>{userName}</p>
    </div>
  );
}