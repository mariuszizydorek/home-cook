import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Copyright from "../Copyright";
import { useHistory, withRouter } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import { log } from "util";
import { string } from "prop-types";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SIGN_IN = gql`
  mutation login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      userName
      authToken
    }
  }
`;

function SignIn() {
  const classes = useStyles();
  const [loginForm, setLoginForm] = useState({
    email: string,
    password: string,
  });

  const history = useHistory();
  const [login, { data }] = useMutation(SIGN_IN, {
    onCompleted(data) {
      if (data) {
        localStorage.setItem("token", data.login.authToken);
        localStorage.setItem("email", data.login.email);
        localStorage.setItem("forceUserFetch", "1");
        history.push("/"); //signin
      }
    },
    onError(error) {
      debugger;
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    login({
      variables: {
        loginInput: {
          email: loginForm.email,
          password: loginForm.password,
        },
      },
    }).catch((error) => {
      console.error(error);
    });
  };

  const setStateValue = ({ target }: any) => {
    setLoginForm({
      ...loginForm,
      [target.id]: target.value,
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            value={loginForm.email}
            onChange={setStateValue}
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={loginForm.password}
            onChange={setStateValue}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default withRouter(SignIn);
