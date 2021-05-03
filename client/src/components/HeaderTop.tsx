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

export default function HeaderTop(props: { sections: []; title: String }) {
  const classes = useStyles();
  const { sections = [], title } = props;
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
        <Button variant="outlined" size="small" href="/signIn">
          Login
        </Button>
        <Button variant="outlined" size="small" href="/signup">
          Sign up
        </Button>
      </Toolbar>
    </React.Fragment>
  );
}

HeaderTop.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
