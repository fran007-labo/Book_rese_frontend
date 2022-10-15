import axios from "axios";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

export const apiUrl = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}/api/v1`,
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*'
  }
})

onAuthStateChanged(auth, (user) => {
  if (user) {
    apiUrl.interceptors.request.use(async (config) => {
        const idToken = await auth.currentUser.getIdToken()
        config.headers.authorization = `Bearer ${idToken}`
        return config
      }
    )
  }
})