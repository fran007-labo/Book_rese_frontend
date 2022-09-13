import axios from "axios";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

const apiUrl = axios.create({
  baseURL: 'http://localhost:8000/api/v1'
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

export default apiUrl;