import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { LoginContext } from "./contexts/LoginContext";


export default function redirectUser(){
    const { currentUser } = useContext(LoginContext);
    
    const router = useRouter();
    useEffect(() => {
        (currentUser !== null) && router.push('/browse')
    }, [])
}
