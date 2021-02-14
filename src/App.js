import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import projects from "./projects.json";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [0, 1, 2, 3]

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Button href="mailto: benorule@outlook.com" variant="h6" color="inherit">
            Contact
          </Button>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Benjamin Turnbull
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Front end web developer dedicated to writing clean, elegant and efficient code in the languages of JavaScript, HTML, and CSS. Proficient in using JavaScript libraries including React and jQuery, the CSS preprocessor SASS, REST APIs, and CSS frameworks such as Bootstrap, Material UI, and Bulma. Detail oriented approach to fully responsive design. Experience working in teams using the agile project management methodology Scrum. Practised in testing, quality assurance, and GitHub version control. Experience presenting projects, effectively communicating their market value, and explaining the technology using real world examples. Knowledge of back end technologies including Node.js, Express, MySQL, and MongoDB.  
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button target="_blank" href="https://www.linkedin.com/in/benorule/" variant="contained" color="primary">
                    LinkedIn
                  </Button>
                </Grid>
                <Grid item>
                  <Button target="_blank" href="https://github.com/benorule" variant="outlined" color="primary">
                    GitHub
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={projects[card].image}
                    title={projects[card].name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {projects[card].name}
                    </Typography>
                    <Typography>
                      {projects[card].description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button target="_blank" href={projects[card].github} size="small" color="primary">
                    Source Code
                      </Button>
                    <Button target="_blank" href={projects[card].deployment} size="small" color="primary">
                      Deployment
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Get in contact
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button href="mailto: benorule@outlook.com" variant="contained" color="primary">
                Email
          </Button>
            </Grid>
            <Grid item>
              <Button target="_blank" href="https://www.linkedin.com/in/benorule/" variant="contained" color="primary">
                LinkedIn
                  </Button>
            </Grid>
            <Grid item>
              <Button target="_blank" href="https://github.com/benorule" variant="contained" color="primary">
                GitHub
                  </Button>
            </Grid>
          </Grid>
        </div>
      </footer>
    </React.Fragment>
  );
}