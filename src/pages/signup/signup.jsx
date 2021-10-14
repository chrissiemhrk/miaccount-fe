import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./signup.css";

function signup() {
  return (
    <div className="container">
      <section className="left">
        <h1>MiAccount</h1>
      </section>
      <section className="right">
        <div className="right-container">
          <h2>Create My Account</h2>
          <form>
            <TextField
              className="name__input"
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
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
                Register
              </Button>
            </Link>
          </form>
          <p>
            Already have an account?
            <Link to="/login" className="register">
              Login
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default signup;
