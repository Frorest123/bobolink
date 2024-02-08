export default function Register(){
   return(
      <section>
        <title>Registration Form</title>
        <h1>Registration Form</h1>
        <p>Please fill out this form with the required information</p>
        <form method="post">
          <fieldset>
            <label for="email">Enter Your Email: <input id="email" name="email" type="email" required></input></label>
            <label for="new-password">Create a New Password: <input id="new-password" name="new-password" type="password" pattern="[a-z0-5]{8,}" required></input></label>
          </fieldset>
          <input type="submit" value="Submit"></input>
        </form>
      </section>
   )
}