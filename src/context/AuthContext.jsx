import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";
import {auth, db} from "../services/firebase"
import {doc, setDoc} from 'firebase/firestore'

const AuthContext = createContext();

export function AuthContextProvider({children}){

    const [user, setUser] = useState({});

    useEffect(()=>{
        const unsuscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        })

        return ()=> {
            unsuscribe();
        }
    }, [])

    function signUp(email, password) {
        createUserWithEmailAndPassword(auth, email, password);
        setDoc(doc(db, 'users', email), {
            favShows: [],
        })
    }

    function logIn(email, password) {
        signInWithEmailAndPassword(auth, email, password);
    }

    function logOut(){
        signOut(auth);
    }

    return (
        <AuthContext.Provider value={{user, signUp, logIn, logOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth(){
    return useContext(AuthContext);
}