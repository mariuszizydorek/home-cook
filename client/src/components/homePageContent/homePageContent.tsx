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

const useStyles = makeStyles((theme) => ({
  root: {
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
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export function HomePageContent() {
  const classes = useStyles();
  
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.topGrid}>
          <Paper className={classes.searchboxcontainer}>
            <div className={classes.largeHeadline}>Home Cook</div>
            <div className={classes.smallHeadline}>Find chefs making delicious home cooked food near you</div>
            <React.Fragment>
              <CssBaseline />
              <Container maxWidth="xs">
                <Typography component="div">
                  <form className={classes.root} noValidate autoComplete="off">
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
                  alt="Our Story"
                  height="250"
                  image="./images/munch-fit.jpg"
                  title="Contemplative Reptile"
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
                  title="Contemplative Reptile"
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
                  alt="Our Story"
                  height="250"
                  image="./images/chefs.jpg"
                  title="Contemplative Reptile"
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
                  alt="Our Story"
                  height="250"
                  image="./images/6720.jpg"
                  title="Contemplative Reptile"
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
      <Grid item xs={12} sm={6} md={3} lg={3}>
      <Paper elevation={3} />
     FAQs
      </Grid>
    </div>
  );
}
