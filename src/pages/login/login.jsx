import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import "./login.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
function login() {
  return (
    <div className="container">
      <section className="left">
        <h1>MiAccount</h1>
      </section>
      <section className="right">
        <div className="right-container">
          <h2>Login</h2>
          <form>
            <TextField
              className="email__input"
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              className="password__input"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Link to="/" className="login__btn">
              <Button variant="contained" color="success">
                Login
              </Button>
            </Link>
          </form>
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="register">
              Register
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default login;
