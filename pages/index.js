import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Register from '../components/Register'
import jwt from 'jsonwebtoken'
import { useState } from 'react'
import { GetServerSideProps } from 'next'

export default function Home(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  console.log("This are props--->", props);
  const [message, setMessage] = useState('')

  async function submitForm(){
    const res = await fetch('/api/login', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username,password})

    }).then((t) => t.json())
    const token = res.token

    if(token){
      const json = jwt.decode(token)
      setMessage(`You are ${json.username} and you are ${json.admin ? 'an admin' : 'not an admin'}`)

    }
    else{
      setMessage('Something went wrong')
    }
  }
  return (
    <>
    <div className="container">
     <Register/>
      <h1>{message}</h1>
     <form>
      <input 
        type='text' 
        name='username'
        value={username} 
        onChange={(e) => setUsername(e.target.value)}/>
      <br/>
      <input 
        type='password' 
        name='password'
        value={password} 
        onChange={(e) => setPassword(e.target.value)}/>
      <br/>
      <input type='submit' value='Login' onClick={submitForm}/>
     </form>
    </div>
    </>
  )
}

export async function getServerSideProps() {
  const response = await fetch('https://chillin.cl/api/productos')
  const data = await response.json()

  return {
    props: {
      productos: data
    }
  }

}

