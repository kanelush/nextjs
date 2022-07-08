import { useState } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from "next/router";
import { auth } from "../firebase";

const Register = () => {
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
        <label >Email:</label>
        <input type="text" name="email" onChange={changeUser} />
        <label >Password:</label>
        <input type="password" id="last" name="password"  onChange={changeUser}/>
        {/* <button type="submit" onClick={registerUser}>Submit</button> */}
        <input type="submit" onClick={registerUser} value="Submit"/>
        </form>
        </div>
        </>
    )
}

export default Register;