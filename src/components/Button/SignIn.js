import {useEffect, useState} from 'react'
import Button from '@mui/material/Button';

// firebase
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from "../../settings/firebase";
import { apiUrl } from "../../settings/ApiClient";

// reducks
import { useDispatch, useSelector } from 'react-redux';
import { signIn, signOutOperation, listenAuthState} from '../../reducks/users/operations';
import { getSignedIn, getUserName, getUserPhotoURL } from "../../reducks/users/selectors";
import axios from 'axios';

export default function SignIn() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const isSignedIn = getSignedIn(selector);
  const user = isSignedIn;
  const [load, setLoad] = useState(false);

  useEffect( () => {
    if (!user) {
      dispatch(listenAuthState());
    }

    setLoad(true)
  }, [dispatch, isSignedIn]);

  return (
    <>
      { user ? ( 
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
  const url = `${process.env.REACT_APP_API_BASE_URL}/api/v1/users/registrations`;
  const SingInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      const data = { uid: user.uid, name: user.displayName, email: user.email };
      user.getIdToken().then(idToken => {
        axios.post(
          url, 
          { token: idToken, registration: data },
          { header: {'Access-Control-Allow-Origin': '*'} }
        );
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
  const url = '/users/sign_outs';

  const signOut = () => {
    apiUrl.post(url)
    dispatch(signOutOperation())
  }

  return (
    <div>
      <Button onClick={() => signOut()} variant="contained" color="primary">
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
    <div className="item">
      <img src={userPhotoURL} alt="" className="avatar"/>
      <p>{userName}</p>
    </div>
  );
}