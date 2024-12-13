import React from 'react'
import "./index.css"

function Input() {
  return (
    <div><div id="main">
    <div class="intro">
      <h1>facebook</h1>
      <p class="subtitle">
        Facebook helps you connect and share with the people in your life.
      </p>
    </div>
    <div class="form-section">
      <form>
        <input type="text" placeholder="Email address or phone number" />
        <input type="password" placeholder="Password" />
        <button class="Login">Log in</button>
        <a class="forgot" href="#">Forgotten password?</a>
        <hr />
        <div>
          <button class="Create-button">Create new account</button>
        </div>
      </form>
      <p>
        <a href="#" class="link">Create a Page</a> for a celebrity, brand or
        business.
      </p>
    </div>
  </div>
    </div>
  )
}

export default Input
