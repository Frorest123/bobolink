export default function Register(){
   return(
      <section class="register">
        <div>
          <h1 class="reggie">Registration Form</h1>
          <p class="reggie">Please fill out this form with the required information</p>
        </div>
        <fieldset class="inputfield">
        <form method="post" class="post">
            <label for="email">Enter Your Email: <input id="email" name="email" type="email" required></input></label>
          <input type="submit" value="Submit"></input>
        </form>
        </fieldset>
      </section>
   )
}