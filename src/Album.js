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

const styles = {
  gridContainer: {
    display: 'grid',         // Use grid layout
    gridTemplateColumns: 'repeat(9, 1fr)', // Create 5 equal columns
    padding: '15px',
  },
  gridItem: {
    color: 'white',          // White text
    fontSize: '10px',        // Small font size
    textAlign: 'center',     // Center the text inside the grid item
  },
};

const TimeLabels = () => {
  const times = ["4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM", "12AM"];

  return (
    <div style={styles.gridContainer}>
      {times.map((time, index) => (
        <span key={index} style={styles.gridItem}>{time}</span>
      ))}
    </div>
  );
};



const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const experience_cards = [
  {title: "Monday", image: "sunnyicon.png", temp: "72°"},
  {title: "Tuesday",  image: "sunnyicon.png", temp: "78°"},
  {title: "Wednesday", image: "sunnyicon.png", temp: "79°"},
  {title: "Thursday", image:"sunnyicon.png", temp: "68°"},
  {title: "Friday", image:"sunnyicon.png", temp: "72°"},
  {title: "Saturday", image:"sunnyicon.png", temp: "71°"},
  {title: "Sunday", image: "sunnyicon.png", temp: "68°"},

]


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative" style={{ background: '#343840'}}>


      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/012/877/619/large_2x/beauty-white-cloud-and-clear-blue-sky-in-sunny-day-texture-background-copy-space-for-banner-or-wallpaper-design-text-free-photo.JPG)`,
            backgroundSize: 'cover', // Ensures the background image covers the entire box
            backgroundPosition: 'center', // Centers the background image
            width: '100vw',
            height: '100vh',
            pt: 8,
            pb: 6,
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="white"
                  gutterBottom
                >
                Philadelphia
              </Typography>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="white"
                gutterBottom
              >
              71°
              </Typography>
            <Typography variant="h5" align="center" color="white" paragraph>
              Sunny
            </Typography>
    
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              
            </Stack>
          </Container>
        

        <Card variant="outlined" sx={{background:"linear-gradient(90deg, hsla(214, 34%, 45%, 1) 0%, hsla(215, 38%, 33%, 1) 39%, hsla(20, 36%, 42%, 1) 44%, hsla(215, 39%, 30%, 1) 49%, hsla(218, 56%, 16%, 1) 100%)",mb:2, p:1}}>
          <CardMedia
              component="div"
              image = {require('./projectImages/weatherchart.png')}
              style={{ 
                height: '100px',      
                width: 'auto',        
                backgroundSize: 'contain', 
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat', 
                margin: '0 auto',
              }}
          />

        <TimeLabels></TimeLabels>

        </Card>
        
        {/* <Box sx={{p: 6}}> */}
        {experience_cards.map((card) => (
          
              <Card item key = {card} 
                sx={{
                    background:"linear-gradient(90deg, rgba(96, 110, 117,1) 0%, rgba(96, 110, 117,0.2) 100%)", 
                    p:1, 
                    px: 3,
                    mb:0.5,
                    display: 'flex',            
                    alignItems: 'center',        
                    justifyContent: 'space-between',
                }}
              >

                <Typography color="white">
                  {card.title}
                </Typography>

                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                
                <CardMedia
                  component="div"
                  image = {require('./projectImages/'+card.image)}
                  style={{ 
                    height: '20px',      
                    width: '20px',        
                    backgroundSize: 'contain', 
                    backgroundPosition: 'center', 
                    backgroundRepeat: 'no-repeat', 
                    objectFit: 'cover',
                    
                  }}
                >
                </CardMedia>
                <Typography color="white">
                  {card.temp}
                </Typography>
                </div>
              </Card>

        ))}

        </Box>  

        
        
        



        
      </main>
    </ThemeProvider>
  );
}