import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { HomePageContent } from "../../components/homePageContent/homePageContent";

export function HomePage() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();

  return <HomePageContent />;
}
