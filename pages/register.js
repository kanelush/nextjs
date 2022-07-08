import Link from "next/link";
import { useState } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from "next/router";
import { auth } from "../firebase";

function Register() {
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })
    const { router } = useRouter();
    const changeUser = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
            
        });
        console.log("credentials---->", credentials)
    }

    const registerUser = async () => {
        try {
           await createUserWithEmailAndPassword(
            auth, 
            credentials.email, 
            credentials.password
            )
            router.push("/");
        } catch(error){
            console.log(error);
        }

    };

    return(
        <>
        <div>
        <form>
        <label >EmailxD:</label>
        <input type="text" name="email" onChange={changeUser} />
        <label >Password:</label>
        <input type="password" id="last" name="password"  onChange={changeUser}/>
        <button onClick={registerUser}>Submit</button>
        </form>
        </div>
        </>
    )
}

export default Register;