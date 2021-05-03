import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // padding: "0px 10px 10px 10px",
  },
  searchForm: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    minHeight: "500px",
    margin: "10px"
  },
  searchboxcontainer: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontSize: "20px",
    elevation: "3",
    maxWidth: "800px",
    variant: "outlined",
    margin: "auto",
    marginTop: "200px",
    marginBottom: "30px",
  },
  smallHeadline: {
    marginBottom: "20px",
  },
  largeHeadline: {
    fontSize: "60px",
    marginBottom: "10px",
    color: "orangered",
  },
  searchButton: {
    height: "55px",
    backgroundColor: "orangered",
    color: "white",
  },
  card2: {
    height: "440px",
  },
  topGrid: {
    backgroundImage: `url(${"/images/table-food2.jpg"})`,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordianContainer: {
    margin: "10px",
    width: "100%",
    //textAlign: "center",
  }
}));

export function HomePageContent() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={12} className={classes.topGrid}>
          <Paper className={classes.searchboxcontainer}>
            <div className={classes.largeHeadline}>Home Cook</div>
            <div className={classes.smallHeadline}>Find chefs making delicious home cooked food near you</div>
            <React.Fragment>
              <CssBaseline />
              <Container maxWidth="xs">
                <Typography component="div">
                  <form className={classes.searchForm} noValidate autoComplete="off">
                    <TextField
                      id="postcode-input"
                      label="Enter your postcode"
                      variant="outlined"
                    />
                    <Button className={classes.searchButton}
                      variant="outlined"
                      color="secondary"
                    >
                      Search
                    </Button>
                  </form>
                </Typography>
              </Container>
            </React.Fragment>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
        <Paper className={classes.paper}>
            <Card className={classes.card2} elevation={0}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="How it works"
                  height="250"
                  image="./images/munch-fit.jpg"
                  title="How it works"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    How it works
          </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Browse the chefs Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica, across all continents except Antarctica, across all continents except Antarctica
          </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
        </Button>
                <Button size="small" color="primary">
                  Learn More
        </Button>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
        <Paper className={classes.paper}>
            <Card className={classes.card2} elevation={0}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Our Story"
                  height="250"
                  image="./images/happy.jpg"
                  title="Our Story"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Our Story
          </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica, across all continents except Antarctica, across all continents except Antarctica
                    across all continents
          </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
        </Button>
                <Button size="small" color="primary">
                  Learn More
        </Button>
              </CardActions>
            </Card>
          </Paper>

        
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Paper className={classes.paper}>
            <Card className={classes.card2} elevation={0}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="The Chefs"
                  height="250"
                  image="./images/chefs.jpg"
                  title="The Chefs"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    The Chefs
          </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Browse the chefs Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica, across all continents except Antarctica, across all continents except Antarctica
          </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
        </Button>
                <Button size="small" color="primary">
                  Learn More
        </Button>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Paper className={classes.paper}>
            <Card className={classes.card2} elevation={0}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Are you a chef? Sign up"
                  height="250"
                  image="./images/6720.jpg"
                  title="Are you a chef? Sign up"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Are you a chef? Sign up
          </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Browse the chefs Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica, across all continents except Antarctica, across all continents except Antarctica
          </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
        </Button>
                <Button size="small" color="primary">
                  Learn More
        </Button>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
        </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
      <Paper elevation={3} className={classes.accordianContainer}>
      <Typography style={{ textAlign: "left"}} gutterBottom variant="h5" component="h2">FAQs</Typography>
     <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
      </Paper>
      </Grid>
    </div>
  );
}
