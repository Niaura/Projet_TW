import * as React from 'react';
import ReactDOM from 'react-dom';


import Data from "./Bdd/data.json";
import { Itineraire } from './itineraire.js';
import { Formulaire } from './contact.js';



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
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import PropTypes from 'prop-types';
import Link from '@mui/material/Link';

import MoreVertIcon from '@mui/icons-material/MoreVert';


const container = document.getElementById('root');
//peut etre changer en plusieur card avec "learn more" pour chaque image??

const pages = ['Destinations', 'Séjours', 'Actualités','Contacts'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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

const ResponsiveAppBar = () => {
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
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <LocationCityIcon />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <LocationCityIcon />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
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

const ResponsiveAppBarFoot = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#34383e' }}>
        <Toolbar>
          <Grid container spacing={3}>
            <Grid item xs={5}>
              <Typography component="div">
              <LocationCityIcon /><strong>Albi Tourisme</strong> <br/><br/> Albi Tourisme est un site indépendant<br/> et nouvelle génération qui vous permet<br/> de trouver toutes les informations pour<br/> organiser vos voyages.
              </Typography>
            </Grid>
            <Grid item xs={5} >
              <Typography>
                <strong>A propos</strong> <br/><br/> <a>Qui sommes-nous ?</a> <br/> <a>L'équipe</a> <br/> <a>Conditions générales</a> <br/> <a>Confidentialité</a>
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography>
                <Button>Nous contacter</Button> <br/>
                <Button><FacebookIcon/></Button>
                <Button><InstagramIcon/></Button>
                <Button><TwitterIcon/></Button>
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};


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






export  function Sejour(){
  
  //Button like
  //Lieux
  const [test, setTest] = React.useState(1);
  const [count, setCount] = React.useState(1);
  const [count1, setCount1] = React.useState(1);
  const [count2, setCount2] = React.useState(1);
  const [count3, setCount3] = React.useState(1);
  const [count4, setCount4] = React.useState(1);
  const [count5, setCount5] = React.useState(1);
  const [count6, setCount6] = React.useState(1);
  const [count7, setCount7] = React.useState(1);
  const [count8, setCount8] = React.useState(1);
  const [count9, setCount9] = React.useState(1);

  const [state, setState]= React.useState(1);
  const [state1, setState1]= React.useState(1);
  const [state2, setState2]= React.useState(1);
  const [state3, setState3]= React.useState(1);
  const [state4, setState4]= React.useState(1);
  const [state5, setState5]= React.useState(1);
  const [state6, setState6]= React.useState(1);
  const [state7, setState7]= React.useState(1);
  const [state8, setState8]= React.useState(1);
  const [state9, setState9]= React.useState(1);

  //Resto
  const [count10, setCount10] = React.useState(1);
  const [count11, setCount11] = React.useState(1);
  const [count12, setCount12] = React.useState(1);
  const [count13, setCount13] = React.useState(1);
  const [count14, setCount14] = React.useState(1);
  const [count15, setCount15] = React.useState(1);
  const [count16, setCount16] = React.useState(1);
  const [count17, setCount17] = React.useState(1);
  const [count18, setCount18] = React.useState(1);
  const [count19, setCount19] = React.useState(1);

  const [state10, setState10]= React.useState(1);
  const [state11, setState11]= React.useState(1);
  const [state12, setState12]= React.useState(1);
  const [state13, setState13]= React.useState(1);
  const [state14, setState14]= React.useState(1);
  const [state15, setState15]= React.useState(1);
  const [state16, setState16]= React.useState(1);
  const [state17, setState17]= React.useState(1);
  const [state18, setState18]= React.useState(1);
  const [state19, setState19]= React.useState(1);

   //Hotel
   const [count20, setCount20] = React.useState(1);
   const [count21, setCount21] = React.useState(1);
   const [count22, setCount22] = React.useState(1);
   const [count23, setCount23] = React.useState(1);
   const [count24, setCount24] = React.useState(1);
   const [count25, setCount25] = React.useState(1);
   const [count26, setCount26] = React.useState(1);
   const [count27, setCount27] = React.useState(1);
   const [count28, setCount28] = React.useState(1);
   const [count29, setCount29] = React.useState(1);

   const [state20, setState20]= React.useState(1);
   const [state21, setState21]= React.useState(1);
   const [state22, setState22]= React.useState(1);
   const [state23, setState23]= React.useState(1);
   const [state24, setState24]= React.useState(1);
   const [state25, setState25]= React.useState(1);
   const [state26, setState26]= React.useState(1);
   const [state27, setState27]= React.useState(1);
   const [state28, setState28]= React.useState(1);
   const [state29, setState29]= React.useState(1);



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
  
  //New Expand
  const [expandedId, setExpandedId] = React.useState(-1);

  const NbLieux = [{ _id: "0" },{ _id: "1" }, { _id: "2" }, { _id: "3" },{ _id: "4" }, { _id: "5" }, { _id: "6" },{ _id: "7" }, { _id: "8" }, { _id: "9" }];

  const handleExpandClick = i => {
    setExpandedId(expandedId === i ? -1 : i);
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
          <Tab icon={< HotelIcon />} label="Nos restaurant" {...a11yProps(1)} />
          <Tab icon={< RestaurantIcon />} label="Nos hotel" {...a11yProps(2)} />
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
                  alt="cathédrale "
                />
                <CardContent>
                <Typography variant="body2" >
                {Data.lieux[l._id].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={ Data.lieux[l._id].aime }>
                  <IconButton aria-label="add to favorites" color={state === 0 ? "primary" : "default" }  onClick={() => {
                          if  (Data.lieux[l._id].ap==false){
                            
                            Data.lieux[l._id].aime=Data.lieux[l._id].aime+1
                            setCount(Data.lieux[l._id].aime)
                            Data.lieux[l._id].ap=true
                            
                            setState(0);
                          }
                          else{
                            Data.lieux[l._id].aime=Data.lieux[l._id].aime-1
                            Data.lieux[l._id].ap=false
                            setCount(Data.lieux[l._id].aime)

                            setState(1);
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
        <Grid item xs={4}>

              <Card style={{backgroundColor: "gainsboro"}} sx={{ width: 450 }}>
                <CardHeader
                  
                  title={Data.Resto[0].nom}
                
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="./images/Rambroise.jpg"
                  alt="ambroise "
                />
                <CardContent>
                <Typography variant="body2" >
                {Data.Resto[0].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={Data.Resto[0].aime}>
                  <IconButton aria-label="add to favorites" color={state10 === 0 ? "primary" : "default" }  onClick={() => {
                          if (Data.Resto[0].ap==false){
                            Data.Resto[0].aime=Data.Resto[0].aime+1
                            setCount10(Data.Resto[0].aime)
                            Data.Resto[0].ap=true
                            setState10(0);
                            
                          }
                          else{
                            Data.Resto[0].aime=Data.Resto[0].aime-1
                            Data.Resto[0].ap=false
                            setCount10(Data.Resto[0].aime)
                            setState10(1);
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>

                <Typography variant="body2" paragraph>
                {Data.Resto[0].description2}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  Adresse: <br />
                {Data.Resto[0].adresse}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  Téléphone: <br />
                {Data.Resto[0].tel}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                Horaire: <br />
                {Data.Resto[0].horaire}
                </Typography>
                
                </CardContent>
              </Collapse>
                
              </Card>
              </Grid>

              <Grid item xs={4}>

              <Card style={{backgroundColor: "gainsboro"}} sx={{ width: 450 }}>
                <CardHeader
                  
                  title={Data.Resto[1].nom}
                
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="./images/Rpont.jpg"
                  alt="pont du tarn "
                />
                <CardContent>
                <Typography variant="body2" >
                {Data.Resto[1].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={Data.Resto[1].aime}>
                  <IconButton aria-label="add to favorites" color={state11 === 0 ? "primary" : "default" }  onClick={() => {
                          if (Data.Resto[1].ap==false){
                            Data.Resto[1].aime=Data.Resto[1].aime+1
                            setCount11(Data.Resto[1].aime)
                            Data.Resto[1].ap=true
                            setState11(0);
                            
                          }
                          else{
                            Data.Resto[1].aime=Data.Resto[1].aime-1
                            Data.Resto[1].ap=false
                            setCount11(Data.Resto[1].aime)
                            setState11(1);
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
                <Typography variant="body2" paragraph>
                {Data.Resto[1].description2}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  Adresse: <br />
                {Data.Resto[1].adresse}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  Téléphone: <br />
                {Data.Resto[1].tel}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                Horaire: <br />
                {Data.Resto[1].horaire}
                </Typography>
                
                </CardContent>
              </Collapse>
                
              </Card>
              </Grid>


              <Grid item xs={4}>

              <Card style={{backgroundColor: "gainsboro"}} sx={{ width: 450 }}>
                <CardHeader
                  
                  title={Data.Resto[2].nom}
                
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="./images/Rhibou.jpg"
                  alt="au hibout "
                />
                <CardContent>
                <Typography variant="body2" >
                {Data.Resto[2].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={Data.Resto[2].aime}>
                  <IconButton aria-label="add to favorites" color={state12 === 0 ? "primary" : "default" }  onClick={() => {
                          if (Data.Resto[2].ap==false){
                            Data.Resto[2].aime=Data.Resto[2].aime+1
                            setCount12(Data.Resto[2].aime)
                            Data.Resto[2].ap=true
                            setState12(0);
                            
                          }
                          else{
                            Data.Resto[2].aime=Data.Resto[2].aime-1
                            Data.Resto[2].ap=false
                            setCount12(Data.Resto[2].aime)
                            setState12(1);
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
                <Typography variant="body2"  paragraph>
                {Data.Resto[2].description2}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  Adresse: <br />
                {Data.Resto[2].adresse}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  Téléphone: <br />
                {Data.Resto[2].tel}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                Horaire: <br />
                {Data.Resto[2].horaire}
                </Typography>
                
                </CardContent>
              </Collapse>
                
              </Card>
              </Grid>

              <Grid item xs={4}>

              <Card style={{backgroundColor: "gainsboro"}} sx={{ width: 450 }}>
                <CardHeader
                  
                  title={Data.Resto[3].nom}
                
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="./images/Rcocina.jpg"
                  alt="la cocina "
                />
                <CardContent>
                <Typography variant="body2">
                {Data.Resto[3].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={ Data.Resto[3].aime}>
                  <IconButton aria-label="add to favorites" color={state13 === 0 ? "primary" : "default" }  onClick={() => {
                          if (Data.Resto[3].ap==false){
                            Data.Resto[3].aime=Data.Resto[3].aime+1
                            setCount13(Data.Resto[3].aime)
                            Data.Resto[3].ap=true
                            setState13(0);
                            
                          }
                          else{
                            Data.Resto[3].aime=Data.Resto[3].aime-1
                            Data.Resto[3].ap=false
                            setCount13(Data.Resto[3].aime)
                            setState13(1);
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>

                <Typography variant="body2" paragraph>
                {Data.Resto[3].description2}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  Adresse: <br />
                {Data.Resto[3].adresse}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  Téléphone: <br />
                {Data.Resto[3].tel}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                Horaire: <br />
                {Data.Resto[3].horaire}
                </Typography>
                
                </CardContent>
              </Collapse>
                
              </Card>
              </Grid>

              <Grid item xs={4}>

              <Card style={{backgroundColor: "gainsboro"}} sx={{ width: 450 }}>
                <CardHeader
                  
                  title={Data.Resto[4].nom}
                
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="./images/Razzurro.jpg"
                  alt="azzurro "
                />
                <CardContent>
                <Typography variant="body2" >
                {Data.Resto[4].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={Data.Resto[4].aime}>
                  <IconButton aria-label="add to favorites" color={state14 === 0 ? "primary" : "default" }  onClick={() => {
                          if (Data.Resto[4].ap==false){
                            Data.Resto[4].aime=Data.Resto[4].aime+1
                            setCount14(Data.Resto[4].aime)
                            Data.Resto[4].ap=true
                            setState14(0);
                            
                          }
                          else{
                            Data.Resto[4].aime=Data.Resto[4].aime-1
                            Data.Resto[4].ap=false
                            setCount14(Data.Resto[4].aime)
                            setState14(1);
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
                <Typography variant="body2" paragraph>
                {Data.Resto[4].description2}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  Adresse: <br />
                {Data.Resto[4].adresse}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  Téléphone: <br />
                {Data.Resto[4].tel}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                Horaire: <br />
                {Data.Resto[4].horaire}
                </Typography>
                
                </CardContent>
              </Collapse>
                
              </Card>
              </Grid>


              <Grid item xs={4}>

              <Card style={{backgroundColor: "gainsboro"}} sx={{ width: 450 }}>
                <CardHeader
                  
                  title={Data.Resto[5].nom}
                
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="./images/Rfourchette.jpg"
                  alt="La Fourchette Adroite"
                />
                <CardContent>
                <Typography variant="body2" >
                {Data.Resto[5].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={Data.Resto[5].aime}>
                  <IconButton aria-label="add to favorites" color={state15 === 0 ? "primary" : "default" }  onClick={() => {
                          if (Data.Resto[5].ap==false){
                            Data.Resto[5].aime=Data.Resto[5].aime+1
                            setCount15(Data.Resto[5].aime)
                            Data.Resto[5].ap=true
                            setState15(0);
                            
                          }
                          else{
                            Data.Resto[5].aime=Data.Resto[5].aime-1
                            Data.Resto[5].ap=false
                            setCount15(Data.Resto[5].aime)
                            setState15(1);
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
                <Typography variant="body2" paragraph>
                {Data.Resto[5].description2}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  Adresse: <br />
                {Data.Resto[5].adresse}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  Téléphone: <br />
                {Data.Resto[5].tel}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                Horaire: <br />
                {Data.Resto[5].horaire}
                </Typography>
                
                </CardContent>
              </Collapse>
                
              </Card>
              </Grid>


              <Grid item xs={4}>

              <Card style={{backgroundColor: "gainsboro"}} sx={{ width: 450 }}>
                <CardHeader
                  
                  title={Data.Resto[6].nom}
                
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="./images/Rcascarbar.jpg"
                  alt="cascarbar"
                />
                <CardContent>
                <Typography variant="body2" >
                {Data.Resto[6].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={Data.Resto[6].aime}>
                  <IconButton aria-label="add to favorites"color={state16 === 0 ? "primary" : "default" }  onClick={() => {
                          if (Data.Resto[6].ap==false){
                            Data.Resto[6].aime=Data.Resto[6].aime+1
                            setCount16(Data.Resto[6].aime)
                            Data.Resto[6].ap=true
                            setState16(0);
                            
                          }
                          else{
                            Data.Resto[6].aime=Data.Resto[6].aime-1
                            Data.Resto[6].ap=false
                            setCount16(Data.Resto[6].aime)
                            setState16(1);
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
                <Typography variant="body2" paragraph>
                {Data.Resto[6].description2}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  Adresse: <br />
                {Data.Resto[6].adresse}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  Téléphone: <br />
                {Data.Resto[6].tel}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                Horaire: <br />
                {Data.Resto[6].horaire}
                </Typography>
                
                </CardContent>
              </Collapse>
                
              </Card>
              </Grid>

              <Grid item xs={4}>

              <Card style={{backgroundColor: "gainsboro"}} sx={{ width: 450 }}>
                <CardHeader
                  
                  title={Data.Resto[7].nom}
                
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="./images/Repicurien.jpg"
                  alt="l'epicurien"
                />
                <CardContent>
                <Typography variant="body2" >
                {Data.Resto[7].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={ Data.Resto[7].aime}>
                  <IconButton aria-label="add to favorites" color={state17 === 0 ? "primary" : "default" }  onClick={() => {
                          if (Data.Resto[7].ap==false){
                            Data.Resto[7].aime=Data.Resto[7].aime+1
                            setCount17(Data.Resto[7].aime)
                            Data.Resto[7].ap=true
                            setState17(0);
                            
                          }
                          else{
                            Data.Resto[7].aime=Data.Resto[7].aime-1
                            Data.Resto[7].ap=false
                            setCount17(Data.Resto[7].aime)
                            setState17(1);
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>

                <Typography variant="body2" paragraph>
                {Data.Resto[7].description2}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  Adresse: <br />
                {Data.Resto[7].adresse}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  Téléphone: <br />
                {Data.Resto[7].tel}
                </Typography>
                <Typography variant="subtitle2"  paragraph>
                Horaire: <br />
                {Data.Resto[7].horaire}
                </Typography>
                
                </CardContent>
              </Collapse>
                
              </Card>
              </Grid>

              <Grid item xs={4}>

              <Card style={{backgroundColor: "gainsboro"}} sx={{ width: 450 }}>
                <CardHeader
                  
                  title={Data.Resto[8].nom}
                
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="./images/Rbasilic.jpg"
                  alt="Basilic et Co Albi"
                />
                <CardContent>
                <Typography variant="body2" >
                {Data.Resto[8].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={ Data.Resto[8].aime}>
                  <IconButton aria-label="add to favorites" color={state18 === 0 ? "primary" : "default" }  onClick={() => {
                          if (Data.Resto[8].ap==false){
                            Data.Resto[8].aime=Data.Resto[8].aime+1
                            setCount18(Data.Resto[8].aime)
                            Data.Resto[8].ap=true
                            setState18(0);
                            
                          }
                          else{
                            Data.Resto[8].aime=Data.Resto[8].aime-1
                            Data.Resto[8].ap=false
                            setCount18(Data.Resto[8].aime)
                            setState18(1);
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
                <Typography variant="body2" paragraph>
                {Data.Resto[8].description2}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  Adresse: <br />
                {Data.Resto[8].adresse}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  Téléphone: <br />
                {Data.Resto[8].tel}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                Horaire: <br />
                {Data.Resto[8].horaire}
                </Typography>
                
                </CardContent>
              </Collapse>
                
              </Card>
              </Grid>

              <Grid item xs={4}>

              <Card style={{backgroundColor: "gainsboro"}} sx={{ width: 450 }}>
                <CardHeader
                  
                  title={Data.Resto[9].nom}
                
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="./images/Ramapola.jpg"
                  alt="amapola"
                />
                <CardContent>
                <Typography variant="body2" >
                {Data.Resto[9].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={Data.Resto[9].aime}>
                  <IconButton aria-label="add to favorites" color={state19 === 0 ? "primary" : "default" }  onClick={() => {
                          if (Data.Resto[9].ap==false){
                            Data.Resto[9].aime=Data.Resto[9].aime+1
                            setCount19(Data.Resto[9].aime)
                            Data.Resto[9].ap=true
                            setState19(0);
                            
                          }
                          else{
                            Data.Resto[9].aime=Data.Resto[9].aime-1
                            Data.Resto[9].ap=false
                            setCount19(Data.Resto[9].aime)
                            setState19(1);
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
                <Typography variant="body2" paragraph>
                {Data.Resto[9].description2}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  Adresse: <br />
                {Data.Resto[9].adresse}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  Téléphone: <br />
                {Data.Resto[9].tel}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                Horaire: <br />
                {Data.Resto[9].horaire}
                </Typography>
                
                </CardContent>
              </Collapse>
                
              </Card>
              </Grid>


              </Grid>



        </TabPanel>

        <TabPanel value={value} index={2}>
        
        <Grid container justify="space-around" spacing={2}>
        <Grid item xs={4}>

              <Card style={{backgroundColor: "gainsboro"}} sx={{ width: 450 }}>
                <CardHeader
                  
                  title={Data.Hotel[0].nom}
                
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="./images/Hpasteliers.jpg"
                  alt="Pasteliers "
                />
                <CardContent>
                <Typography variant="body2" >
                {Data.Hotel[0].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={Data.Hotel[0].aime}>
                  <IconButton aria-label="add to favorites" color={state20 === 0 ? "primary" : "default" }  onClick={() => {
                          if (Data.Hotel[0].ap==false){
                            Data.Hotel[0].aime=Data.Hotel[0].aime+1
                            setCount20(Data.Hotel[0].aime)
                            Data.Hotel[0].ap=true
                            setState20(0);
                            
                          }
                          else{
                            Data.Hotel[0].aime=Data.Hotel[0].aime-1
                            Data.Hotel[0].ap=false
                            setCount20(Data.Hotel[0].aime)
                            setState20(1);
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
                <Typography variant="body2" paragraph>
                {Data.Hotel[0].information}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                A partir de : <br />
                {Data.Hotel[0].tarif}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  Adresse: <br />
                {Data.Hotel[0].adresse}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  Téléphone: <br />
                {Data.Hotel[0].tel}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                Horaire: <br />
                {Data.Hotel[0].horaire}
                </Typography>
                <Link href={Data.Hotel[0].reservation} underline="none">
                Cliqué ici pour réserver une chambre!
                </Link>
                
                </CardContent>
              </Collapse>
                
              </Card>
              </Grid>

              <Grid item xs={4}>

              <Card style={{backgroundColor: "gainsboro"}} sx={{ width: 450 }}>
                <CardHeader
                  
                  title={Data.Hotel[1].nom}
                
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="./images/Hvigan.jpg"
                  alt="vigan "
                />
                <CardContent>
                <Typography variant="body2" >
                {Data.Hotel[1].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={Data.Hotel[1].aime}>
                  <IconButton aria-label="add to favorites" color={state21 === 0 ? "primary" : "default" }  onClick={() => {
                          if (Data.Hotel[1].ap==false){
                            Data.Hotel[1].aime=Data.Hotel[1].aime+1
                            setCount21(Data.Hotel[1].aime)
                            Data.Hotel[1].ap=true
                            setState21(0);
                            
                          }
                          else{
                            Data.Hotel[1].aime=Data.Hotel[1].aime-1
                            Data.Hotel[1].ap=false
                            setCount21(Data.Hotel[1].aime)
                            setState21(1);
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
                <Typography variant="body2" paragraph>
                {Data.Hotel[1].information}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                A partir de : <br />
                {Data.Hotel[1].tarif}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  Adresse: <br />
                {Data.Hotel[1].adresse}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  Téléphone: <br />
                {Data.Hotel[1].tel}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                Horaire: <br />
                {Data.Hotel[1].horaire}
                </Typography>
                <Link href={Data.Hotel[1].reservation} underline="none">
                Cliqué ici pour réserver une chambre!
                </Link>
                
                </CardContent>
              </Collapse>
                
              </Card>
              </Grid>

              <Grid item xs={4}>

              <Card style={{backgroundColor: "gainsboro"}} sx={{ width: 450 }}>
                <CardHeader
                  
                  title={Data.Hotel[2].nom}
                
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="./images/Hlaperouse.jpg"
                  alt="laperouse "
                />
                <CardContent>
                <Typography variant="body2" >
                {Data.Hotel[2].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={Data.Hotel[2].aime}>
                  <IconButton aria-label="add to favorites" color={state22 === 0 ? "primary" : "default" }  onClick={() => {
                          if (Data.Hotel[2].ap==false){
                            Data.Hotel[2].aime=Data.Hotel[2].aime+1
                            setCount22(Data.Hotel[2].aime)
                            Data.Hotel[2].ap=true
                            setState22(0);
                            
                          }
                          else{
                            Data.Hotel[2].aime=Data.Hotel[2].aime-1
                            Data.Hotel[2].ap=false
                            setCount22(Data.Hotel[2].aime)
                            setState22(1);
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>

                <Typography variant="body2" paragraph>
                {Data.Hotel[2].information}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                A partir de : <br />
                {Data.Hotel[2].tarif}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  Adresse: <br />
                {Data.Hotel[2].adresse}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  Téléphone: <br />
                {Data.Hotel[2].tel}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                Horaire: <br />
                {Data.Hotel[2].horaire}
                </Typography>
                <Link href={Data.Hotel[2].reservation} underline="none">
                Cliqué ici pour réserver une chambre!
                </Link>
                
                </CardContent>
              </Collapse>
                
              </Card>
              </Grid>

              <Grid item xs={4}>

              <Card style={{backgroundColor: "gainsboro"}} sx={{ width: 450 }}>
                <CardHeader
                  
                  title={Data.Hotel[3].nom}
                
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="./images/Hbrasserie.jpg"
                  alt="brasserie "
                />
                <CardContent>
                <Typography variant="body2" >
                {Data.Hotel[3].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={Data.Hotel[3].aime}>
                  <IconButton aria-label="add to favorites" color={state23 === 0 ? "primary" : "default" }  onClick={() => {
                          if (Data.Hotel[3].ap==false){
                            Data.Hotel[3].aime=Data.Hotel[3].aime+1
                            setCount23(Data.Hotel[3].aime)
                            Data.Hotel[3].ap=true
                            setState23(0);
                            
                          }
                          else{
                            Data.Hotel[3].aime=Data.Hotel[3].aime-1
                            Data.Hotel[3].ap=false
                            setCount23(Data.Hotel[3].aime)
                            setState23(1);
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>

                <Typography variant="body2" paragraph>
                {Data.Hotel[3].information}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                A partir de : <br />
                {Data.Hotel[3].tarif}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  Adresse: <br />
                {Data.Hotel[3].adresse}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  Téléphone: <br />
                {Data.Hotel[3].tel}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                Horaire: <br />
                {Data.Hotel[3].horaire}
                </Typography>
                <Link href={Data.Hotel[3].reservation} underline="none">
                Cliqué ici pour réserver une chambre!
                </Link>
                
                </CardContent>
              </Collapse>
                
              </Card>
              </Grid>


              <Grid item xs={4}>

              <Card style={{backgroundColor: "gainsboro"}} sx={{ width: 450 }}>
                <CardHeader
                  
                  title={Data.Hotel[4].nom}
                
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="./images/Hantoine.jpg"
                  alt="antoine "
                />
                <CardContent>
                <Typography variant="body2" >
                {Data.Hotel[4].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={ Data.Hotel[4].aime}>
                  <IconButton aria-label="add to favorites" color={state24 === 0 ? "primary" : "default" }  onClick={() => {
                         if (Data.Hotel[4].ap==false){
                          Data.Hotel[4].aime=Data.Hotel[4].aime+1
                          setCount24(Data.Hotel[4].aime)
                          Data.Hotel[4].ap=true
                          setState24(0);
                          
                        }
                        else{
                          Data.Hotel[4].aime=Data.Hotel[4].aime-1
                          Data.Hotel[4].ap=false
                          setCount24(Data.Hotel[4].aime)
                          setState24(1);
                        }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
                <Typography variant="body2" paragraph>
                {Data.Hotel[4].information}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                A partir de : <br />
                {Data.Hotel[4].tarif}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  Adresse: <br />
                {Data.Hotel[4].adresse}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  Téléphone: <br />
                {Data.Hotel[4].tel}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                Horaire: <br />
                {Data.Hotel[4].horaire}
                </Typography>
                <Link href={Data.Hotel[4].reservation} underline="none">
                Cliqué ici pour réserver une chambre!
                </Link>
                
                </CardContent>
              </Collapse>
                
              </Card>
              </Grid>


              <Grid item xs={4}>

              <Card style={{backgroundColor: "gainsboro"}} sx={{ width: 450 }}>
                <CardHeader
                  
                  title={Data.Hotel[5].nom}
                
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="./images/Hroche.jpg"
                  alt="rochegude "
                />
                <CardContent>
                <Typography variant="body2" >
                {Data.Hotel[5].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={Data.Hotel[5].aime}>
                  <IconButton aria-label="add to favorites" color={state25 === 0 ? "primary" : "default" }  onClick={() => {
                          if (Data.Hotel[5].ap==false){
                            Data.Hotel[5].aime=Data.Hotel[5].aime+1
                            setCount25(Data.Hotel[5].aime)
                            Data.Hotel[5].ap=true
                            setState25(0);
                            
                          }
                          else{
                            Data.Hotel[5].aime=Data.Hotel[5].aime-1
                            Data.Hotel[5].ap=false
                            setCount25(Data.Hotel[5].aime)
                            setState25(1);
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
                <Typography variant="body2" paragraph>
                {Data.Hotel[5].information}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                A partir de : <br />
                {Data.Hotel[5].tarif}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  Adresse: <br />
                {Data.Hotel[5].adresse}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  Téléphone: <br />
                {Data.Hotel[5].tel}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                Horaire: <br />
                {Data.Hotel[5].horaire}
                </Typography>
                <Link href={Data.Hotel[5].reservation} underline="none">
                Cliqué ici pour réserver une chambre!
                </Link>
                
                </CardContent>
              </Collapse>
                
              </Card>
              </Grid>


              <Grid item xs={4}>

              <Card style={{backgroundColor: "gainsboro"}} sx={{ width: 450 }}>
                <CardHeader
                  
                  title={Data.Hotel[6].nom}
                
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="./images/Halchimy.jpg"
                  alt="alchimy "
                />
                <CardContent>
                <Typography variant="body2" >
                {Data.Hotel[6].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={Data.Hotel[6].aime}>
                  <IconButton aria-label="add to favorites" color={state26 === 0 ? "primary" : "default" }  onClick={() => {
                           if (Data.Hotel[6].ap==false){
                            Data.Hotel[6].aime=Data.Hotel[6].aime+1
                            setCount26(Data.Hotel[6].aime)
                            Data.Hotel[6].ap=true
                            setState26(0);
                            
                          }
                          else{
                            Data.Hotel[6].aime=Data.Hotel[6].aime-1
                            Data.Hotel[6].ap=false
                            setCount26(Data.Hotel[6].aime)
                            setState26(1);
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>

                <Typography variant="body2" paragraph>
                {Data.Hotel[6].information}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                A partir de : <br />
                {Data.Hotel[6].tarif}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  Adresse: <br />
                {Data.Hotel[6].adresse}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  Téléphone: <br />
                {Data.Hotel[6].tel}
                </Typography>
                <Typography variant="subtitle2" paragraph>
                Horaire: <br />
                {Data.Hotel[6].horaire}
                </Typography>
                <Link href={Data.Hotel[6].reservation} underline="none">
                Cliqué ici pour réserver une chambre!
                </Link>
                
                </CardContent>
              </Collapse>
                
              </Card>
              </Grid>

              </Grid>


        </TabPanel>
      </SwipeableViews>
    </Box>
  );
    }
  


  



//ATTENTION : SI SUR MUI VOUS AVEZ document.querySelector('#app') MODIFIEZ AVEC ROOT
ReactDOM.render(<> <ResponsiveAppBar/> <br/> <Sejour />  <br/> <ResponsiveAppBarFoot /> </> , document.querySelector('#root'));
