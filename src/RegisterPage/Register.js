import React from "react";
import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import obj from "./Register.module.css";

const EMAIL_RGX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PWD_RGX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@$%$]).{8,24}$/;

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   useRef.current.focus();
  // }, []);

  useEffect(() => {
    setValidEmail(EMAIL_RGX.test(email));
  }, [email]);

  useEffect(() => {
    const result = PWD_RGX.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd, matchPwd]);

  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}></Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  aria-invalid={validEmail ? "false" : "true"}
                  aria-describedby="uidnote"
                  // onFocus={() => setEmailFocus(true)}  hiding errormsg for incorrect email when not focused
                  // onBlur={() => setEmailFocus(false)}
                />
                <Grid
                  id="uidnote"
                  className={
                    emailFocus && email && !validEmail
                      ? "Instructions"
                      : obj.hide
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  Invalid email-adress
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => {
                    setPwd(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
  // <section>
  //   <p
  //     ref={errRef}
  //     className={errMsg ? "errmsg" : "offscreen"}
  //     aria-live="assertive"
  //   ></p>
  //   <h1>Register</h1>
  //   <form>
  //     <label htmlFor="username">
  //       Username:
  //       <span className={validName ? "valid" : "hide"}>
  //         <FontAwesomeIcon icon={faCheck} />
  //       </span>
  //       <span className={validName || !user ? "hide" : "invalid"}>
  //         <FontAwesomeIcon icon={faTimes} />
  //       </span>
  //     </label>
  //     <input
  //       type="text"
  //       id="username"
  //       ref={userRef}
  //       autoComplete="off"
  //       onChange={(e) => {
  //         setUser(e.target.value);
  //       }}
  //       required
  //       aria-invalid={validName ? "false" : "true"}
  //       aria-describedby="uidnote"
  //       onFocus={() => setUserFocus(true)}
  //       onBlur={() => setUserFocus(false)}
  //     ></input>
  // <p
  //   id="uidnote"
  //   className={
  //     userFocus && user && !validName ? "Instructions" : "offscreen"
  //   }
  // >
  //   <FontAwesomeIcon icon={faInfoCircle} />
  //   4 to 24 characters
  //   <br />
  //   Must begin with a letter.
  //   <br />
  //   Letters, numbers, underscores allowed.
  // </p>
  //   </form>
  // </section>
};
export default Register;
