"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Register(){
  const [email, setEmail] = useState(""); 
  const router = useRouter();
  const submitEmail = async(e) => {
    e.preventDefault()
    const userEmail = email;
    const response = await fetch("/api/postWaitlist", {
      method: "POST",
      headers: {"content-type":"application/json"},
      body: JSON.stringify({email: userEmail})
    })
    router.push("/")
  } 
   return(
      <section class="register">
        <div>
          <h1 class="reggie">Registration Form</h1>
          <p class="reggie">Please fill out this form with the required information</p>
        </div>
        <fieldset class="inputfield">
        <form method="post" class="post" onSubmit={submitEmail}>
            <label for="email">Enter Your Email: <input id="email" name="email" type="email" required value={email} onChange={e => setEmail(e.target.value)}></input></label>
          <a href="/"><input type="submit" value="Submit" href="/"></input></a>
        </form>
        </fieldset>
      </section>
   )
}