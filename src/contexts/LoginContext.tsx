import { createContext, useEffect, useState, ReactNode } from "react";
import {auth} from '../firebase';
import firebase from 'firebase/app';

interface LoginContextData {
    SignIn: (email: string, password: string) => Promise<firebase.auth.UserCredential>
    SignUp: (email: string, password: string) => Promise<firebase.auth.UserCredential>
    SignOut: () => Promise<void>;

    currentUser: any;
    setSignupEmail: React.Dispatch<React.SetStateAction<string>>;
    signupEmail: string;
    setSignupPassword: React.Dispatch<React.SetStateAction<string>>;
    signupPassword: string;
}

interface LoginProviderProps {
    children: ReactNode;
}

export const LoginContext = createContext({} as LoginContextData);

export function LoginProvider({children}: LoginProviderProps){
    const [loading, setLoading] = useState(true);

    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');

    const [currentUser, setCurrentUser] = useState<firebase.User>();
    
    function SignUp(email: string, password: string){
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function SignIn (email: string, password: string) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function SignOut(){
        return auth.signOut();
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false)
        })

        return unsubscribe;
    }, [])

    return (
        <LoginContext.Provider value={{
            currentUser,
            SignUp,
            SignIn,
            SignOut,
            setSignupEmail,
            signupEmail,
            setSignupPassword,
            signupPassword
        }}>
            {!loading && children}
        </LoginContext.Provider>
    )
}