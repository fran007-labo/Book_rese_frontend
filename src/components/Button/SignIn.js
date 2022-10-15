import {useEffect, useState} from 'react'
import Button from '@mui/material/Button';

// firebase
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from "../../settings/firebase";
import { apiUrl } from "../../settings/ApiClient";

// reducks
import { useDispatch, useSelector } from 'react-redux';
import { signIn, signOut, listenAuthState} from '../../reducks/users/operations';
import { getSignedIn, getUserName, getUserPhotoURL } from "../../reducks/users/selectors";

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
  const url = '/users/registrations';
  const SingInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      const data = { uid: user.uid, name: user.displayName, email: user.email };
      user.getIdToken().then(idToken => {
        apiUrl.post(url, { token: idToken, registration: data });
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
  const url = '/users/registrations';
  const singOut = () => {
    apiUrl.signOut();
    dispatch(signOut())
  }

  return (
    <div>
      <Button onClick={() => singOut()} variant="contained" color="primary">
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