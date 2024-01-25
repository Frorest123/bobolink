'use client'
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Register(){
    const [data, setData] = useState({
        email: '',
        password: '',
      })
    const router= useRouter()
    const register = async (e) => {
        e.preventDefault()
  
        console.log('hi')
  
        const res = await fetch('/api/register', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({data})
        })
  
        const user = await res.json();
  
        console.log(user)
  
        router.push('/login')
    }
   return(

<html lang="en">
  <head>
    <title>Registration Form</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Registration Form</h1>
    <p>Please fill out this form with the required information</p>
    <form method="post" action='#' onSubmit={register}>
      <fieldset>
        <label for="email">Enter Your Email: 
            <input id="email" name="email" type="email" required value={data.email} onChange={(e) => {setData({...data, email: e.target.value})}}/>
        </label>

        <label for="new-password">Create a New Password: 
            <input id="new-password" name="new-password" type="password" pattern="[a-z0-5]{8,}" required value={data.password} onChange={(e) => {setData({...data, password: e.target.value})}}/>
        </label>

      </fieldset>
      <button type="submit">Submit</button>
    </form>
  </body>
</html>

    )
}