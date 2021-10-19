import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

import {
  getAuth,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
initializeAuthentication();

const useFirebase = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider=new GithubAuthProvider()
  const [user, setUser] = useState({})
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  // google sign in function 

  const googleSignIn = () => {
 return   signInWithPopup(auth, googleProvider)
  }
 // github login
 const githubSignin=()=>{
 return signInWithPopup(auth,githubProvider)
}
  // onstate change set user 
  useEffect(() => {
    setIsLoading(true);
   const unSubscribe =  onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
        setIsLoading(false)
      }
      else {
        setUser({})
        setIsLoading(false)
      }
   })
    return () => unSubscribe;
  }, []);
  // logout function
  const logOutUser = () => {
    signOut(auth).then(() => setUser({}))
  }
  // Create a new user  with email and password 
  const createNewUser = (email, password) => {
   return createUserWithEmailAndPassword(auth, email, password)
  }
  // add user display name 
  const updateUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => { })
      .catch(err => setError(err.message));
  }
  // login with email and password 
  const loginWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth,email, password )
  }
 

  return {
    user,
    error,
    setUser,
    setError,
    googleSignIn,
    logOutUser,
    isLoading,
    setIsLoading,
    createNewUser,
    updateUserName,
    loginWithEmail,
    githubSignin
  };
}
export default useFirebase;