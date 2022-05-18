import * as React from 'react';
import ReactDOM from 'react-dom';


import Data from "./Bdd/data.json";
import { Itineraire } from './itineraire.js';
import { Formulaire } from './contact.js';
import { Index } from './index.js';

//pour le bouton iti
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';



import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

//import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HotelIcon from '@mui/icons-material/Hotel';
import LandscapeIcon from '@mui/icons-material/Landscape';
import ShareIcon from '@mui/icons-material/Share';


import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Badge from '@mui/material/Badge';
import ButtonGroup from '@mui/material/ButtonGroup';


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Fragment } from "react";

import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';


import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import PropTypes from 'prop-types';
import Link from '@mui/material/Link';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ResetTvRounded } from '@mui/icons-material';




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function constructor(props) {
  onButtonClicked = onButtonClicked.bind(this);
  state = { currentButton: null };
};

function onButtonClicked (id) {
  setState({ currentButton: state.currentButton === id ? null : id });
};


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



//----------------------------BARRE TOP------------------------------
const ResponsiveAppBar = ({ onClick }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <AppBar position="sticky" style={{ background: 'linear-gradient(to right, blue, purple)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography>
            <Button
              variant="outlined"
              onClick={() => onClick('accueil')}
            >
              <HomeIcon style={{ color: "white" }}/>
            </Button>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              variant="outlined"
              sx={{ my: 2, color: 'white', display: 'block' }}
              onClick={() => onClick('itineraire')}
            >
              Destinations
            </Button>
            <Button
              variant="outlined"
              sx={{ my: 2, color: 'white', display: 'block' }}
              onClick={() => onClick('sejour')}
            >
              Séjours
            </Button>
            <Button
              variant="outlined"
              sx={{ my: 2, color: 'white', display: 'block' }}
              onClick={() => onClick('formulaire')}
            >
              Contacts
            </Button>
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </Container>
    </AppBar>
  );
};


//----------------------------BARRE BOTTOM------------------------------
const ResponsiveAppBarFoot = ({ onClick }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#34383e' }}>
        <Toolbar>
          <Grid container spacing={3}>
            <Grid item xs={5}>
              <Typography component="div">
                <LocationCityIcon /><strong>Albi Tourisme</strong> <br /><br /> Albi Tourisme est un site indépendant<br /> et nouvelle génération qui vous permet<br /> de trouver toutes les informations pour<br /> organiser vos voyages.
              </Typography>
            </Grid>
            <Grid item xs={5} >
              <Typography>
                <strong>À propos</strong> <br /><br /> <a>Qui sommes-nous ?</a> <br /> <a>L'équipe</a> <br /> <a>Conditions générales</a> <br /> <a>Confidentialité</a>
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography>
                <Button
                  onClick={() => onClick('formulaire')}
                >Nous contacter</Button> <br />
                <Button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://fr-fr.facebook.com/officedetourismealbi/';
                  }}
                ><FacebookIcon /></Button>

                <Button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://www.instagram.com/albitourisme/?hl=fr';
                  }}
                ><InstagramIcon /></Button>
                <Button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://twitter.com/tourisme_albi';
                  }}
                ><TwitterIcon /></Button>
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};


export  function Sejour(){
  
  //Button like
  //Lieux
  const [count, setCount] = React.useState(1);
  
  //Resto
  const [count10, setCount10] = React.useState(1);

  const [state10, setState10]= React.useState(1);

   //Hotel
   const [count20, setCount20] = React.useState(1);
   const [state20, setState20]= React.useState(1);
   
  const [invisible, setInvisible] = React.useState(false);

  

  //menu
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };


  //images de fond
  const styles = {
    paperContainer: {
        width: '100%',
        height: '100%',
        backgroundImage: `url(${"./images/fondN.jpg"})` ,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
  };

    //Expande
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const itinerariesPerCity = [{ _id: "1" }, { _id: "2" }, { _id: "3" }];
  const [expanded, setExpanded] = React.useState(false);

  //const handleExpandClicke = () => {
   // setExpanded(!expanded);
  //};
  
  const [state, setState]= React.useState( "default");
  function handleChangeState(){
    if(state=="default"){
      setState("primary")
    }else{
      setState("default");
    }
    
  }

  //New Expand
  const [expandedId, setExpandedId] = React.useState(-1);

  const NbLieux = [{ _id: "0" },{ _id: "1" }, { _id: "2" }, { _id: "3" },{ _id: "4" }, { _id: "5" }, { _id: "6" },{ _id: "7" }, { _id: "8" }, { _id: "9" }];
  const NbHotel = [{ _id: "0" },{ _id: "1" }, { _id: "2" }, { _id: "3" },{ _id: "4" }, { _id: "5" }, { _id: "6" }];

  const handleExpandClick = i => {
    setExpandedId(expandedId === i ? -1 : i);
  }

  //changement page
  let [etat, setEtat] = React.useState("notsejour");
  function render() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      })
      switch (etat) {
        case "sejour":
          return <Sejour />;
        case "itineraire":
          return <Itineraire />;
        case "accueil":
          return (
            <>
            <ImageFond />
            <Suggestion3 onClick={setEtat}/>
            <Suggestion2 onClick={setEtat}/> 
            <br/>
            <Suggestion4/>
            <Graphique/>
            </>
          );
        case "formulaire":
          return (
            <>
            <ImageFond2 />
            <Formulaire />
            </>
          );
        default:
          return <></>
    }
  }

  
  return (
    
    <Box  style={styles.paperContainer}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          position="fixed"
        >
          <Tab icon={< LandscapeIcon  />} label="Nos lieux à visiter" {...a11yProps(0)} />
          <Tab icon={< HotelIcon />} label="Nos restaurants" {...a11yProps(1)} />
          <Tab icon={< RestaurantIcon />} label="Nos hôtels" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        

        <Grid container justify="space-around" spacing={2}>
        <Fragment>
        {NbLieux.map((l, i) => (
        <Grid item xs={4}>

              <Card style={{backgroundColor: "gainsboro"}} sx={{width : 450}}>
                <CardHeader
                  
                  title={Data.lieux[l._id].nom}
                
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={Data.lieux[l._id].image}
                  alt={Data.lieux[l._id].id}
                />
                <CardContent>
                <Typography variant="body2" >
                {Data.lieux[l._id].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={ Data.lieux[l._id].aime }>
                  <IconButton aria-label="add to favorites" color={ Data.lieux[l._id].ap}  onClick={() => {
                          if  (Data.lieux[l._id].ap=="default"){
                            
                            Data.lieux[l._id].aime=Data.lieux[l._id].aime+1
                            setCount(Data.lieux[l._id].aime)
                            Data.lieux[l._id].ap="primary"
                            
                            ///handleChangeState();
                            setState( Data.lieux[l._id].ap);
                          }
                          else{
                            Data.lieux[l._id].aime=Data.lieux[l._id].aime-1
                            Data.lieux[l._id].ap="default"
                            setCount(Data.lieux[l._id].aime)

                           /// handleChangeState();
                            setState( Data.lieux[l._id].ap);
                           /// setState(1);
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>
                
                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon onClick={() => {
                      setEtat("itineraire");
                      
                      { render()};
                      ReactDOM.render(<> <ResponsiveAppBar/> <br />
                        <Itineraire /> <br /> <ResponsiveAppBarFoot/>
                      </>, document.querySelector('#root'));
                      console.log("test");
                    }}/>
                </IconButton>
              
                <IconButton
              onClick={() => handleExpandClick(i)}
              aria-expanded={expandedId === i}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
        <CardContent>
                <Typography variant="body2"  paragraph>
                {Data.lieux[l._id].description2}
                </Typography>
                <Typography variant="subtitle2"   paragraph>
                Horaire: <br />
                {Data.lieux[l._id].horaire}
                </Typography>
                <Typography variant="subtitle2"   paragraph>
                  Tarifs: <br />
                {Data.lieux[l._id].Tarifs}
                </Typography>
              
                  
                
                
                </CardContent>
              </Collapse>
                
              </Card>
              </Grid>

              ))}
              </Fragment>


        </Grid>

        </TabPanel>

        <TabPanel value={value} index={1}>
        
          
        <Grid container justify="space-around" spacing={2}>
        <Fragment>
        {NbLieux.map((l, i) => (
        <Grid item xs={4}>

              <Card style={{backgroundColor: "gainsboro"}} sx={{ width: 450 }}>
                <CardHeader
                  
                  title={Data.Resto[l._id].nom}
                
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={Data.Resto[l._id].image}
                  alt={Data.Resto[l._id].id}
                />
                <CardContent>
                <Typography variant="body2" >
                {Data.Resto[l._id].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={Data.Resto[l._id].aime}>
                  <IconButton aria-label="add to favorites" color={ Data.Resto[l._id].ap}    onClick={() => {
                          if (Data.Resto[l._id].ap=="default"){
                            Data.Resto[l._id].aime=Data.Resto[l._id].aime+1
                            setCount10(Data.Resto[l._id].aime)
                            Data.Resto[l._id].ap="primary"
                            
                            ///handleChangeState();
                            setState( Data.Resto[l._id].ap);
                            
                          }
                          else{
                            Data.Resto[l._id].aime=Data.Resto[l._id].aime-1
                            
                            setCount10(Data.Resto[l._id].aime)
                            Data.Resto[l._id].ap="default"
                            
                            ///handleChangeState();
                            setState( Data.Resto[l._id].ap);
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                <IconButton
              onClick={() => handleExpandClick(i)}
              aria-expanded={expandedId === i}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
        <CardContent>

                <Typography variant="body2" paragraph>
                {Data.Resto[l._id].description2}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  Adresse: <br />
                {Data.Resto[l._id].adresse}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  Téléphone: <br />
                {Data.Resto[l._id].tel}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                Horaire: <br />
                {Data.Resto[l._id].horaire}
                </Typography>
                
                </CardContent>
              </Collapse>
                
              </Card>
              </Grid>

              ))}
              </Fragment>


              </Grid>



        </TabPanel>

        <TabPanel value={value} index={2}>
        
        <Grid container justify="space-around" spacing={2}>
        <Fragment>
        {NbHotel.map((l, i) => (
        <Grid item xs={4}>

              <Card style={{backgroundColor: "gainsboro"}} sx={{ width: 450 }}>
                <CardHeader
                  
                  title={Data.Hotel[l._id].nom}
                
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={Data.Hotel[l._id].image}
                  alt={Data.Hotel[l._id].id}
                />
                <CardContent>
                <Typography variant="body2" >
                {Data.Hotel[l._id].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={Data.Hotel[l._id].aime}>
                  <IconButton aria-label="add to favorites" color={ Data.Hotel[l._id].ap}  onClick={() => {
                          if (Data.Hotel[l._id].ap=="default"){
                            Data.Hotel[l._id].aime=Data.Hotel[l._id].aime+1
                            setCount20(Data.Hotel[l._id].aime)
                            Data.Hotel[l._id].ap="primary"
                            
                            ///handleChangeState();
                            setState( Data.Hotel[l._id].ap);
                            
                          }
                          else{
                            Data.Hotel[l._id].aime=Data.Hotel[l._id].aime-1
                            
                            setCount20(Data.Hotel[l._id].aime)
                            Data.Hotel[l._id].ap="default"
                            
                            ///handleChangeState();
                            setState( Data.Hotel[l._id].ap);
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                <IconButton
              onClick={() => handleExpandClick(i)}
              aria-expanded={expandedId === i}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
        <CardContent>
                <Typography variant="body2" paragraph>
                {Data.Hotel[l._id].information}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                A partir de : <br />
                {Data.Hotel[l._id].tarif}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  Adresse: <br />
                {Data.Hotel[l._id].adresse}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  Téléphone: <br />
                {Data.Hotel[l._id].tel}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                Horaire: <br />
                {Data.Hotel[l._id].horaire}
                </Typography>
                <Link href={Data.Hotel[l._id].reservation} color="inherit" underline="hover">
                Cliqué ici pour réserver une chambre!
                </Link>
                
                </CardContent>
              </Collapse>
                
              </Card>
              </Grid>

              ))}
              </Fragment>

              </Grid>


        </TabPanel>
      </SwipeableViews>
    </Box>
  );
    }

    

    
  
