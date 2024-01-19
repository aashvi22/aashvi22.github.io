import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import Paper from '@mui/material/Paper';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const project_cards = [
  {
    title: "SEC Financial Dashboard",
    description: "Used complex SQL queries to filter search through SEC financial data and compute aggregated metrics.",
    tools: "",
    image:'secc.png'
  },
  {
    title: "Barbiebook",
    description: "Created a Barbie themed replica of Facebook. Features included: friends, home wall, feed, posting, commenting, and a page rank powered newsfeed",
    tools:"Node.js, ",
    image: 'barbiebook.png'
  },
  {
    title: "PennOS",
    description: "Built a basic operating system from scratch. Functionality includes context scheduler, kernel/user level functions, shell, foreground/background processes, logger, and custom file system.",
    tools:"C",
    image: 'pennos.png'
  },
  {
    title: "Health, Nutrition, Population Data Analysis",
    description:"Created linear regression, random forest, and SVM models to show relationship between GDP and health, population, and nutrition metrics of countries.",
    tools: "Python, Pandas, PyTorch",
    image: 'earth.jpeg'
  },
  {
    title: "Brain Tumor Segmentation",
    description:"Located tumors in 3D brain scans using UNET segmentation",
    tools: "Python, MONAI, Decathlon Dataset, PyTorch",
    image: 'segmentation.png'
  }
]

const pitching_cards = [
  {
    title:"UN Consulting: Empower women in Digital Economy - Top 10 (of 150)",
    description:"Through The Knowledge Society (TKS), my team and I created a proposal for the United Nations that enables women in Dharavi, India (Asia’s largest slum) participation in the digital economy. We designed a self-sustaining program that trains these women for an AWS certification, and then employs them to provide cloud services. Throughout, we contacted nonprofit leaders and women in Dharavi to iterate our solution."
  },
  {
    title:"Edukos - Digital Inclusion Challenge Top 10 (of 650)",
    description:"After observing the lack of student engagement following remote learning, my team and I decided to change up the way education is delivered by designing a project based learning platform. Edukos is a way for students to manifest their curiosity through the process of exploring and devising solutions to real world problems. Projects are pertinent to relevant social issues/real world applications and can also be customizable by the teacher."
  },
  {
    title:"Asfalis - Diamond Challenge semifinals, Blue Ocean semifinals",
    description:"Asfalis is a business concept me team and I created last year to tackle the prevalent issue of drug overdosage. We designed a locked pill bottle that connects to an app on the user's phone to give reminders for when to take the pill, as well as how much is remaining and when the bottle is next scheduled to unlock."
  }
]

const experience_cards = [
  {
    title: "Data Science Intern @ Munich Re",
    description: "I worked on alitheia, a tool to automate risk assessment for life insurance. \
    For alitheia, I built an automated backtesting tool which reduced the length of the backtesting process from days to minutes. \
    It was used by multiple teams to calculate success metrics of client data on different versions of the product. \
    The tool also allows one to simulate outcomes from custom changes in the risk assessment logic.",
  },
  {
    title: "Researcher @ CHOP Center of Autism Research",
    description: "I'm working to diagnose autism in children using their physiological biomarkers during social interactions. Metrics such as head movement, body pose, and eye contact are analyzed in machine learning algorithms. My key contributions include:\
    - Creating Bash scripts to run Open Face software on 300+ videos of participants and gain time series information about their head dynamics \
    - Cleaning data and performing statistical analysis in Python to identify which frames to discard; Engineering features for classification model. \
    - Contributing to published paper: “Head Movement Patterns during Face-to-Face Conversations Vary with Age” \
    - Building end to end software pipeline to extract relevant computer vision data from experimental videos",
  },
  {
    title: "CIS 5450 (Big Data Analytics) Teaching Assistant",
    description: "This is a masters level class covering big data analytics and machine learning.\
    The role involves hosting weekly office hours, teaching a recitation of 50+ students, grading homework/exams, creating homeworks, and answering questions online\
    ",
  },
  {
    title: "Researcher @ National University of Singapore",
    description: "\
    Tackled the issue of human error in pharmaceutical medication dispensing\
    Project included: Deep learning model to classify medications; Flask application to scan medications, run it in the model, \
    and display results; A physical rig to scan pills in optimal lighting and background\
    ",
  },
  {
    title: "Tech Committee Director @ Wharton Undergraduate Entrepreneurship Club",
    description: "\
    Spearheading an incubator with <10% acceptance where Penn students work on engineering passion projects\
    Built a platform connecting students to the startup culture at Penn by displaying campus startups and entrepreneurial\
    resources. Used React to design interactive homepage\
    Organized entrepreneurship business/tech conference with 5 speaker panels and 300 students in attendance\
    ",
  }
]

const cloud_cards = [
  {
    title:"Popular Ted Talks",
    description:"Augmented TED talk data with Twitter data to give each talk a “social id” + created full stack app that displays 15 TED talks given a user keyword.",
    tools: "DynamoDB, Apache Spark, Node.js, HTML/CSS/Bootstrap",
    image:"ted.png"
  },
  {
    title:"Restaurant Map",
    description:"Created a multi-page site where users pin their favorite restaurants on a public map and add descriptions. Updates in realtime. Includes user authentication and sign up.",
    tools:"Google Maps API, DynamoDB, AJAX, Node.js, HTML/CSS/Bootstrap",
    image:"restaurantMap.jpg"
  },
  {
    title:"Social Rank",
    description:"Implemented a pagerank algorithm on social network data.",
    tools:"Apache Spark, Amazon Elastic MapReduce",
    image:"socialnetwork.jpeg"
  }
]

const android_cards = [
  {
    title: "Weather",
    description:"Gives the current weather and the 5 day forecast based on zip code using OpenWeather API",
    image:"weatherapp.jpg"
  },
  {
    title: "Egg Clicker",
    description:"This is based on the game Cookie clicker but with eggs",
    image:"eggclicker.png"
  },
  {
    title:"Lifestyle App",
    description:"This allows users to improve and keep track of their body and diet by suggesting workouts and using Edimam API to filter healthy recipes. ",
    image:"lifestyle.jpeg"
  
  },
  {
    title:"GPS",
    description:"A GPS app displaying longitude, latitude, city, and meters travelled",
    image:"gps.png"
  },
  {
    title:"Marvel Wiki",
    description:"Practice using list views, horizontal layouts, and bundles by displaying a editable list of Marvel heroes",
    image:"marvel.png"
  },
  {
    title:"Calculator",
    description:"A four function calculator with trig and log functions, as well as storage of previous equations",
    image:"calculator.png"
  },
  {
    title:"Pickup line chatbot",
    description:"Basic chatbot that attempts to asks you out through SMS",
    image:"pickuplines.png"
  }
]


const unity_cards = [
  {
    title:"Sword fighting",
    description:"Two player sword fighting game, arcade style"
  },
  {
    title:"ML Agents",
    description:"Uses imitation learning to move an agent to food"
  },
  {
    title:"Chicken Brick Cannon",
    description:"A cannon shoots chickens at a brick wall"
  }
]

const java_cards = [
  {
    title:"Minesweeper",
    description:"Created the classic Minesweeper game",
    image:"minesweeper.png"
  },
  {
    title:"Maze Runner",
    description:"User must go through a maze before a timer runs out. Graphics can switch from 2D to 3D.",
    image:"MazeRunnerPicture.png"
  },
  {
    title:"Textpad",
    description:"Note-taking app with drawing functionality"
  },
  {
    title:"Music Box",
    description:"App that allows user to create a song using a matrix of notes (similar to a digital piano). This song can be played, paused, saved, and loaded in the future."
  }
]


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative" style={{ background: '#343840'}}>

        <Toolbar>
          <Typography variant="h6" color="#A79995" noWrap>
            Aashvi Manakiwala
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            // bgcolor: 'background.paper',
            // bgcolor: 'red',
            backgroundImage:`url(https://source.unsplash.com/snow-covered-mountains-during-daytime-VrAl7hRVX4A)`,
            // backgroundImage: `url(https://source.unsplash.com/a-close-up-of-a-window-with-rain-drops-pe_R74hldW4)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            //height: "400px",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
              About
              </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              {/* Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely. */}

              Hey! I'm Aashvi.
              I'm currently a third-year pursuing a BS/MS in computer science at the University of Pennsylvania. 
              I love exploring emerging technologies with the hope of harnessing them to improve the world. 
              I also enjoy painting, traveling, and baking!
            </Typography>
            <img
                
                src={require('./projectImages/linkedinpfp.jpeg')}
                style={{ width: "20%", height: "20%",display: "block", margin: "auto", borderRadius:"50%" }}
            />
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {/* <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button> */}
            </Stack>
          </Container>
        </Box>

        <Box
          sx={{
              // bgcolor: 'background.paper',
              bgcolor: '#343840',
              // backgroundImage:`url(https://source.unsplash.com/snow-covered-mountains-during-daytime-VrAl7hRVX4A)`,
              // backgroundImage: `url(https://source.unsplash.com/a-close-up-of-a-window-with-rain-drops-pe_R74hldW4)`,
              // backgroundRepeat: "no-repeat",
              // backgroundSize: "cover",
              //height: "400px",
              pt: 8,
              pb: 6
            }}
        >

        <Typography
              component="h1"
              variant="h2"
              align="center"
              color="#A79995"
              gutterBottom
        >
            Experiences
        </Typography>
        <Box sx={{p: 6}}>
        {experience_cards.map((card) => (
          //
          //linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(60,0,193,1) 100%)
          
              <Accordion item key = {card} sx={{background:"linear-gradient(90deg, rgba(76,111,156,1) 0%, rgba(206,141,126,1) 100%)", border:2, borderColor:"#A79995", p:1, mb:1}}>
                <AccordionSummary id="panel-header" aria-controls="panel-content" sx={{color:"white"}}>
                  {card.title}
                </AccordionSummary>
                <AccordionDetails>
                  <Box sx={{bgcolor: "rgb(255 255 255 / 50%"}}>
                  {card.description}
                  </Box>
                  
                </AccordionDetails>
              </Accordion>

        ))}

        </Box>
        
        
        

          <Typography
              component="h1"
              variant="h2"
              align="center"
              color="#A79995"
        >
            Projects
        </Typography>
        
        
        <Container sx={{ py: 8}} maxWidth="md">
        <Typography
              component="h3"
              variant="h4"
              align="left"
              color="white"
              gutterBottom
            >
            Featured
        </Typography>
        
          <Grid container spacing={4} sx={{mb:5}}>
            {project_cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    // image="https://source.unsplash.com/random?wallpapers"
                    image = {require('./projectImages/'+card.image)}
                    // style={{height: 50, paddingTop: '56.25%'}}
                    // image={card.image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}
          </Grid>


          
        <Typography
              component="h3"
              variant="h4"
              align="left"
              color="white"
              gutterBottom
            >
            Cloud/Web
        </Typography>

        <Grid container spacing={4} sx={{mb:5}}>
            {cloud_cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    // image="https://source.unsplash.com/random?wallpapers"
                    image = {require('./projectImages/'+card.image)}
                    // style={{height: 50, paddingTop: '56.25%'}}
                    // image={card.image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography sx={{mb:2}}>
                      {card.description}
                    </Typography>
                    <Typography sx={{mb:"1"}}>
                      <b>Tools:</b> {card.tools}
                    </Typography>
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}
          </Grid>

        
        

          <Typography
              component="h3"
              variant="h4"
              align="left"
              color="white"
              gutterBottom
            >
            Android Apps
        </Typography>

        <Grid container spacing={4} sx={{mb:5}}>
            {android_cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    //image="https://source.unsplash.com/random?wallpapers"
                    image = {require('./projectImages/'+card.image)}
                    // style={{height: 50, paddingTop: '56.25%'}}
                    // image={card.image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography sx={{mb:2}}>
                      {card.description}
                    </Typography>
                    {/* <Typography sx={{mb:"1"}}>
                      <b>Tools:</b> {card.tools}
                    </Typography> */}
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}
          </Grid>

        <Typography
              component="h3"
              variant="h4"
              align="left"
              color="white"
              gutterBottom
            >
            Unity Games
        </Typography>

        <Grid container spacing={4} sx={{mb:5}}>
            {unity_cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                    //image = {require('./projectImages/'+card.image)}
                    // style={{height: 50, paddingTop: '56.25%'}}
                    // image={card.image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography sx={{mb:2}}>
                      {card.description}
                    </Typography>
                    {/* <Typography sx={{mb:"1"}}>
                      <b>Tools:</b> {card.tools}
                    </Typography> */}
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}
          </Grid>

        <Typography
              component="h3"
              variant="h4"
              align="left"
              color="white"
              gutterBottom
            >
            Java
        </Typography>

        <Grid container spacing={4} sx={{mb:5}}>
            {java_cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                    //image = {require('./projectImages/'+card.image)}
                    // style={{height: 50, paddingTop: '56.25%'}}
                    // image={card.image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography sx={{mb:2}}>
                      {card.description}
                    </Typography>
                    {/* <Typography sx={{mb:"1"}}>
                      <b>Tools:</b> {card.tools}
                    </Typography> */}
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}
          </Grid>

          <Typography
              component="h3"
              variant="h4"
              align="left"
              color="white"
              gutterBottom
            >
            Pitching/Consulting
        </Typography>
        <Grid container spacing={4} sx={{mb:5}}>
            {pitching_cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                    //image = {require('./projectImages/'+card.image)}
                    // style={{height: 50, paddingTop: '56.25%'}}
                    // image={card.image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography sx={{mb:2}}>
                      {card.description}
                    </Typography>
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}
          </Grid>

        </Container>

        </Box>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Contact Me!
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          aashvi22@gmail.com
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}