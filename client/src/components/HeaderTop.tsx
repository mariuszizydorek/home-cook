import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import FastfoodTwoToneIcon from "@material-ui/icons/FastfoodTwoTone";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { red } from "@material-ui/core/colors";
import { gql, useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    "&> a": {
      margin: theme.spacing(1),
    },
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const GET_USER = gql`
  query userInfoQuery {
    userInfo {
      userName
      firstName
      lastName
      loggedIn
    }
  }
`;

export default function HeaderTop(props: { sections: []; title: String }) {
  const classes = useStyles();
  const { loading, error, data, refetch } = useQuery(GET_USER, {
    variables: {},
  });
  const history = useHistory();

  if (loading) return <p>Loading...</p>;

  console.log(data);
  console.log(error);
  const loggedIn = error ? false : data?.userInfo?.loggedIn;
  if (localStorage.getItem("forceUserFetch") === "1") {
    refetch();
    localStorage.setItem("forceUserFetch", "0");
    history.go(0);
  }

  const { sections = [], title } = props;

  const handleSignOut = () => {
    localStorage.setItem("token", "");
    refetch();
    history.go(0);
  };

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography component="h2">
          <IconButton href="/">
            <FastfoodTwoToneIcon />
          </IconButton>
        </Typography>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        {!loggedIn && (
          <Button variant="outlined" size="small" href="/signIn">
            Login
          </Button>
        )}
        {!loggedIn && (
          <Button variant="outlined" size="small" href="/signup">
            Sign up
          </Button>
        )}
        {loggedIn && (
          <Button variant="outlined" size="small" onClick={handleSignOut}>
            Sign out
          </Button>
        )}
      </Toolbar>
    </React.Fragment>
  );
}

HeaderTop.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
