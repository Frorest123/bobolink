'use client'
import { useRouter } from "next/navigation"
import { useState } from "react"
import { signIn } from 'next-auth/react'

export default function Login(){
    const [data, setData] = useState({
        email: '',
        password: ''
      })
    const router= useRouter() 
    const login = async (e) => {
        e.preventDefault();
        let user = await signIn('credentials', {
            ...data,
            redirect: false
        });
        router.push("/")
    }
   return(
    <section>
      <h1>Join Our Waitlist</h1>
      <p>Please fill out this form with the required information if you are intersted in joining our waitlist</p>
        <form method="post" action='#' onSubmit={login}>
          <fieldset>
            <label htmlFor="email">Enter Your Email: 
                <input id="email" name="email" type="email" required value={data.email} onChange={(e) => {setData({...data, email: e.target.value})}}></input>
            </label>

            <label htmlFor="new-password">Enter Your Password: 
                <input id="new-password" name="new-password" type="password" pattern="[a-z0-5]{8,}" required value={data.password} onChange={(e) => {setData({...data, password: e.target.value})}}></input>
            </label>
    
          </fieldset>
          <input type="submit" value="Submit"></input>
        </form>
    </section>
   ) 
}
