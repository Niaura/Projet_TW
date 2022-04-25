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


export function Sejour(){
  
  //Button like
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
  const [count10, setCount10] = React.useState(1);
  const [count11, setCount11] = React.useState(1);

  const [invisible, setInvisible] = React.useState(false);

  const [state, setState]= React.useState(1);

  //menu
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  

  
  return (
    
    <Box sx={{ bgcolor: 'background.paper', width: 'auto'}}>
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
        <Grid item xs={4}>

              <Card sx={{width : 450 }}>
                <CardHeader
                  
                  title={Data.lieux[0].nom}
                
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="./images/ALBI.jpg"
                  alt="cathédrale "
                />
                <CardContent>
                <Typography variant="body2" color="text.secondary">
                {Data.lieux[0].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={ Data.lieux[0].aime }>
                  <IconButton aria-label="add to favorites" color={state === 0 ? "primary" : "default" }  onClick={() => {
                          if  (Data.lieux[0].ap==false){
                            
                            Data.lieux[0].aime=Data.lieux[0].aime+1
                            setCount(Data.lieux[0].aime)
                            Data.lieux[0].ap=true
                            
                            setState(0);
                          }
                          else{
                            Data.lieux[0].aime=Data.lieux[0].aime-1
                            Data.lieux[0].ap=false
                            setCount(Data.lieux[0].aime)

                            setState(1);
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>
                
              
                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>en savoir plus</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography  paragraph>
                {Data.lieux[0].description2}
                </Typography>
                <Typography  paragraph>
                Horaire: <br />
                {Data.lieux[0].horaire}
                </Typography>
                <Typography  paragraph>
                  Tarifs: <br />
                {Data.lieux[0].Tarifs}
                </Typography>
              </AccordionDetails>
            </Accordion>
                  
                
                </CardActions>
                
              </Card>
              </Grid>

              <Grid item xs={4}>

              <Card sx={{ width: 450 }}>
                <CardHeader
                  
                  title={Data.lieux[1].nom}
                
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="./images/museeM.jpg"
                  alt="musee de la mode "
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                  {Data.lieux[1].description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={Data.lieux[1].aime}>
                  <IconButton aria-label="add to favorites" color="default"  onClick={() => {
                          if (Data.lieux[1].ap==false){
                            Data.lieux[1].aime=Data.lieux[1].aime+1
                            setCount1(Data.lieux[1].aime)
                            Data.lieux[1].ap=true
                          }
                          else{
                            Data.lieux[1].aime=Data.lieux[1].aime-1
                            Data.lieux[1].ap=false
                            setCount1(Data.lieux[1].aime)
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default">
                    <LocationOnIcon/>
                </IconButton>

                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>en savoir plus</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography  paragraph>
                {Data.lieux[1].description2}
                </Typography>
                <Typography  paragraph>
                Horaire: <br />
                {Data.lieux[1].horaire}
                </Typography>
                <Typography  paragraph>
                  Tarifs: <br />
                {Data.lieux[1].Tarifs}
                </Typography>
              </AccordionDetails>
              </Accordion>
                  
                
                </CardActions>
                
              </Card>
              </Grid>


              <Grid item xs={4}>
              <Card sx={{ width: 450 }}>
                <CardHeader
                  
                  title={Data.lieux[2].nom}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="./images/museeT.jpg"
                  alt="Musée Toulouse-Lautrec"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                  {Data.lieux[2].description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={Data.lieux[2].aime}>
                  <IconButton aria-label="add to favorites" color="default"  onClick={() => {
                          if (Data.lieux[2].ap==false){
                            Data.lieux[2].aime=Data.lieux[2].aime+1
                            setCount2(Data.lieux[2].aime)
                            Data.lieux[2].ap=true
                          }
                          else{
                            Data.lieux[2].aime=Data.lieux[2].aime-1
                            Data.lieux[2].ap=false
                            setCount2(Data.lieux[2].aime)
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default">
                    <LocationOnIcon/>
                </IconButton>

                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>en savoir plus</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography  paragraph>
                {Data.lieux[2].description2}
                </Typography>
                <Typography  paragraph>
                Horaire: <br />
                {Data.lieux[2].horaire}
                </Typography>
                <Typography  paragraph>
                  Tarifs: <br />
                {Data.lieux[2].Tarifs}
                </Typography>
              </AccordionDetails>
            </Accordion>
                  
                
                </CardActions>
                
              </Card>
              </Grid>

              

              <Grid item xs={4}>

              <Card sx={{ width: 450 }}>
                <CardHeader
                  
                  title={Data.lieux[3].nom}
                
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="./images/zoo.jpg"
                  alt="zoologique Exoticamis "
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                  {Data.lieux[3].description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={Data.lieux[3].aime}>
                  <IconButton aria-label="add to favorites" color="default"  onClick={() => {
                           if (Data.lieux[3].ap==false){
                            Data.lieux[3].aime=Data.lieux[3].aime+1
                            setCount3(Data.lieux[3].aime)
                            Data.lieux[3].ap=true
                          }
                          else{
                            Data.lieux[3].aime=Data.lieux[3].aime-1
                            Data.lieux[3].ap=false
                            setCount3(Data.lieux[3].aime)
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>en savoir plus</Typography>
              </AccordionSummary>
              <AccordionDetails>
              <Typography  paragraph>
                {Data.lieux[3].description2}
                </Typography>
                <Typography  paragraph>
                Horaire: <br />
                {Data.lieux[3].horaire}
                </Typography>
                <Typography  paragraph>
                  Tarifs: <br />
                {Data.lieux[3].Tarifs}
                </Typography>
              </AccordionDetails>
            </Accordion>
                  
                
                </CardActions>
                
              </Card>
              </Grid>

              <Grid item xs={4}>

              <Card sx={{ width: 450 }}>
                <CardHeader
                  
                  title={Data.lieux[4].nom}
                
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="./images/jardin.jpg"
                  alt="jardins de la Berbie  "
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                  {Data.lieux[4].description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={Data.lieux[4].aime}>
                  <IconButton aria-label="add to favorites" color="default"  onClick={() => {
                          if (Data.lieux[4].ap==false){
                            Data.lieux[4].aime=Data.lieux[4].aime+1
                            setCount4(Data.lieux[4].aime)
                            Data.lieux[4].ap=true
                          }
                          else{
                            Data.lieux[4].aime=Data.lieux[4].aime-1
                            Data.lieux[4].ap=false
                            setCount4(Data.lieux[4].aime)
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>en savoir plus</Typography>
              </AccordionSummary>
              <AccordionDetails>
              <Typography  paragraph>
                {Data.lieux[4].description2}
                </Typography>
                <Typography  paragraph>
                Horaire: <br />
                {Data.lieux[4].horaire}
                </Typography>
                <Typography  paragraph>
                  Tarifs: <br />
                {Data.lieux[4].Tarifs}
                </Typography>
              </AccordionDetails>
            </Accordion>
                  
                
                </CardActions>
                
              </Card>
              </Grid>


              <Grid item xs={4}>

              <Card sx={{ width: 450 }}>
                <CardHeader
                  
                  title={Data.lieux[6].nom}
                
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="./images/parc.jpg"
                  alt="parc rochegude  "
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                  {Data.lieux[6].description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={Data.lieux[6].aime}>
                  <IconButton aria-label="add to favorites" color="default"  onClick={() => {
                          if (Data.lieux[6].ap==false){
                            Data.lieux[6].aime=Data.lieux[6].aime+1
                            setCount6(Data.lieux[6].aime)
                            Data.lieux[6].ap=true
                          }
                          else{
                            Data.lieux[6].aime=Data.lieux[6].aime-1
                            Data.lieux[6].ap=false
                            setCount6(Data.lieux[6].aime)
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>en savoir plus</Typography>
              </AccordionSummary>
              <AccordionDetails>
              <Typography  paragraph>
                {Data.lieux[6].description2}
                </Typography>
                <Typography  paragraph>
                Horaire: <br />
                {Data.lieux[6].horaire}
                </Typography>
                <Typography  paragraph>
                  Tarifs: <br />
                {Data.lieux[6].Tarifs}
                </Typography>
              </AccordionDetails>
            </Accordion>
                  
                
                </CardActions>
                
              </Card>
              </Grid>


              <Grid item xs={4}>

              <Card sx={{ width: 450 }}>
                <CardHeader
                  
                  title={Data.lieux[7].nom}
                
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="./images/base.jpg"
                  alt="base de loisirs"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                  {Data.lieux[7].description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={Data.lieux[7].aime}>
                  <IconButton aria-label="add to favorites" color="default"  onClick={() => {
                           if (Data.lieux[7].ap==false){
                            Data.lieux[7].aime=Data.lieux[7].aime+1
                            setCount7(Data.lieux[7].aime)
                            Data.lieux[7].ap=true
                            
                          }
                          else{
                            Data.lieux[7].aime=Data.lieux[7].aime-1
                            Data.lieux[7].ap=false
                            setCount7(Data.lieux[7].aime)
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>en savoir plus</Typography>
              </AccordionSummary>
              <AccordionDetails>
              <Typography  paragraph>
                {Data.lieux[7].description2}
                </Typography>
                <Typography  paragraph>
                Horaire: <br />
                {Data.lieux[7].horaire}
                </Typography>
                <Typography  paragraph>
                  Tarifs: <br />
                {Data.lieux[7].Tarifs}
                </Typography>
              </AccordionDetails>
            </Accordion>
                  
                
                </CardActions>
                
              </Card>
              </Grid>

              <Grid item xs={4}>

              <Card sx={{ width: 450 }}>
                <CardHeader
                  
                  title={Data.lieux[8].nom}
                
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="./images/miniature.jpg"
                  alt="Académie des miniatures"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                  {Data.lieux[8].description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={ Data.lieux[8].aime}>
                  <IconButton aria-label="add to favorites" color="default"  onClick={() => {
                          if (Data.lieux[8].ap==false){
                            Data.lieux[8].aime=Data.lieux[8].aime+1
                            setCount8(Data.lieux[8].aime)
                            Data.lieux[8].ap=true
                            
                          }
                          else{
                            Data.lieux[8].aime=Data.lieux[8].aime-1
                            Data.lieux[8].ap=false
                            setCount8(Data.lieux[8].aime)
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>en savoir plus</Typography>
              </AccordionSummary>
              <AccordionDetails>
              <Typography  paragraph>
                {Data.lieux[8].description2}
                </Typography>
                <Typography  paragraph>
                Horaire: <br />
                {Data.lieux[8].horaire}
                </Typography>
                <Typography  paragraph>
                  Tarifs: <br />
                {Data.lieux[8].Tarifs}
                </Typography>
              </AccordionDetails>
            </Accordion>
                  
                
                </CardActions>
                
              </Card>
              </Grid>

              <Grid item xs={4}>

              <Card sx={{ width: 450 }}>
                <CardHeader
                  
                  title={Data.lieux[9].nom}
                
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="./images/cap.jpg"
                  alt="Cap’Découverte"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                  {Data.lieux[9].description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={ Data.lieux[9].aime}>
                  <IconButton aria-label="add to favorites" color="default"  onClick={() => {
                          if (Data.lieux[9].ap==false){
                            Data.lieux[9].aime=Data.lieux[9].aime+1
                            setCount9(Data.lieux[9].aime)
                            Data.lieux[9].ap=true
                            
                          }
                          else{
                            Data.lieux[9].aime=Data.lieux[9].aime-1
                            Data.lieux[9].ap=false
                            setCount9(Data.lieux[9].aime)
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>en savoir plus</Typography>
              </AccordionSummary>
              <AccordionDetails>
              <Typography  paragraph>
                {Data.lieux[9].description2}
                </Typography>
                <Typography  paragraph>
                Horaire: <br />
                {Data.lieux[9].horaire}
                </Typography>
                <Typography  paragraph>
                  Tarifs: <br />
                {Data.lieux[9].Tarifs}
                </Typography>
              </AccordionDetails>
            </Accordion>
                  
                
                </CardActions>
                
              </Card>
              </Grid>


        </Grid>

        </TabPanel>

        <TabPanel value={value} index={1}>
        
          
        <Grid container justify="space-around" spacing={2}>
        <Grid item xs={4}>

              <Card sx={{ width: 450 }}>
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
                <Typography variant="body2" color="text.secondary">
                {Data.Resto[0].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={count+21}>
                  <IconButton aria-label="add to favorites" color="default"  onClick={() => {
                          if (test==1){
                            setCount(count + 1),
                            setTest(test+1);
                          }
                          else{
                            setCount(count - 1),
                            setTest(test-1);
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>en savoir plus</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography  paragraph>
                {Data.Resto[0].description2}
                </Typography>
                <Typography  paragraph>
                  Adresse: <br />
                {Data.Resto[0].adresse}
                </Typography>
                <Typography  paragraph>
                  Téléphone: <br />
                {Data.Resto[0].tel}
                </Typography>
                <Typography  paragraph>
                Horaire: <br />
                {Data.Resto[0].horaire}
                </Typography>
                
              </AccordionDetails>
            </Accordion>
                  
                
                </CardActions>
                
              </Card>
              </Grid>

              <Grid item xs={4}>

              <Card sx={{ width: 450 }}>
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
                <Typography variant="body2" color="text.secondary">
                {Data.Resto[1].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={count+21}>
                  <IconButton aria-label="add to favorites" color="default"  onClick={() => {
                          if (test==1){
                            setCount(count + 1),
                            setTest(test+1);
                          }
                          else{
                            setCount(count - 1),
                            setTest(test-1);
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>en savoir plus</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography  paragraph>
                {Data.Resto[1].description2}
                </Typography>
                <Typography  paragraph>
                  Adresse: <br />
                {Data.Resto[1].adresse}
                </Typography>
                <Typography  paragraph>
                  Téléphone: <br />
                {Data.Resto[1].tel}
                </Typography>
                <Typography  paragraph>
                Horaire: <br />
                {Data.Resto[1].horaire}
                </Typography>
                
              </AccordionDetails>
            </Accordion>
                  
                
                </CardActions>
                
              </Card>
              </Grid>


              <Grid item xs={4}>

              <Card sx={{ width: 450 }}>
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
                <Typography variant="body2" color="text.secondary">
                {Data.Resto[2].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={count+21}>
                  <IconButton aria-label="add to favorites" color="default"  onClick={() => {
                          if (test==1){
                            setCount(count + 1),
                            setTest(test+1);
                          }
                          else{
                            setCount(count - 1),
                            setTest(test-1);
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>en savoir plus</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography  paragraph>
                {Data.Resto[2].description2}
                </Typography>
                <Typography  paragraph>
                  Adresse: <br />
                {Data.Resto[2].adresse}
                </Typography>
                <Typography  paragraph>
                  Téléphone: <br />
                {Data.Resto[2].tel}
                </Typography>
                <Typography  paragraph>
                Horaire: <br />
                {Data.Resto[2].horaire}
                </Typography>
                
              </AccordionDetails>
            </Accordion>
                  
                
                </CardActions>
                
              </Card>
              </Grid>

              <Grid item xs={4}>

              <Card sx={{ width: 450 }}>
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
                <Typography variant="body2" color="text.secondary">
                {Data.Resto[3].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={count+21}>
                  <IconButton aria-label="add to favorites" color="default"  onClick={() => {
                          if (test==1){
                            setCount(count + 1),
                            setTest(test+1);
                          }
                          else{
                            setCount(count - 1),
                            setTest(test-1);
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>en savoir plus</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography  paragraph>
                {Data.Resto[3].description2}
                </Typography>
                <Typography  paragraph>
                  Adresse: <br />
                {Data.Resto[3].adresse}
                </Typography>
                <Typography  paragraph>
                  Téléphone: <br />
                {Data.Resto[3].tel}
                </Typography>
                <Typography  paragraph>
                Horaire: <br />
                {Data.Resto[3].horaire}
                </Typography>
                
              </AccordionDetails>
            </Accordion>
                  
                
                </CardActions>
                
              </Card>
              </Grid>

              <Grid item xs={4}>

              <Card sx={{ width: 450 }}>
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
                <Typography variant="body2" color="text.secondary">
                {Data.Resto[4].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={count+21}>
                  <IconButton aria-label="add to favorites" color="default"  onClick={() => {
                          if (test==1){
                            setCount(count + 1),
                            setTest(test+1);
                          }
                          else{
                            setCount(count - 1),
                            setTest(test-1);
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>en savoir plus</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography  paragraph>
                {Data.Resto[4].description2}
                </Typography>
                <Typography  paragraph>
                  Adresse: <br />
                {Data.Resto[4].adresse}
                </Typography>
                <Typography  paragraph>
                  Téléphone: <br />
                {Data.Resto[4].tel}
                </Typography>
                <Typography  paragraph>
                Horaire: <br />
                {Data.Resto[4].horaire}
                </Typography>
                
              </AccordionDetails>
            </Accordion>
                  
                
                </CardActions>
                
              </Card>
              </Grid>


              <Grid item xs={4}>

              <Card sx={{ width: 450 }}>
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
                <Typography variant="body2" color="text.secondary">
                {Data.Resto[5].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={count+21}>
                  <IconButton aria-label="add to favorites" color="default"  onClick={() => {
                          if (test==1){
                            setCount(count + 1),
                            setTest(test+1);
                          }
                          else{
                            setCount(count - 1),
                            setTest(test-1);
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>en savoir plus</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography  paragraph>
                {Data.Resto[5].description2}
                </Typography>
                <Typography  paragraph>
                  Adresse: <br />
                {Data.Resto[5].adresse}
                </Typography>
                <Typography  paragraph>
                  Téléphone: <br />
                {Data.Resto[5].tel}
                </Typography>
                <Typography  paragraph>
                Horaire: <br />
                {Data.Resto[5].horaire}
                </Typography>
                
              </AccordionDetails>
            </Accordion>
                  
                
                </CardActions>
                
              </Card>
              </Grid>


              <Grid item xs={4}>

              <Card sx={{ width: 450 }}>
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
                <Typography variant="body2" color="text.secondary">
                {Data.Resto[6].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={count+21}>
                  <IconButton aria-label="add to favorites" color="default"  onClick={() => {
                          if (test==1){
                            setCount(count + 1),
                            setTest(test+1);
                          }
                          else{
                            setCount(count - 1),
                            setTest(test-1);
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>en savoir plus</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography  paragraph>
                {Data.Resto[6].description2}
                </Typography>
                <Typography  paragraph>
                  Adresse: <br />
                {Data.Resto[6].adresse}
                </Typography>
                <Typography  paragraph>
                  Téléphone: <br />
                {Data.Resto[6].tel}
                </Typography>
                <Typography  paragraph>
                Horaire: <br />
                {Data.Resto[6].horaire}
                </Typography>
                
              </AccordionDetails>
            </Accordion>
                  
                
                </CardActions>
                
              </Card>
              </Grid>

              <Grid item xs={4}>

              <Card sx={{ width: 450 }}>
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
                <Typography variant="body2" color="text.secondary">
                {Data.Resto[7].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={count+21}>
                  <IconButton aria-label="add to favorites" color="default"  onClick={() => {
                          if (test==1){
                            setCount(count + 1),
                            setTest(test+1);
                          }
                          else{
                            setCount(count - 1),
                            setTest(test-1);
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>en savoir plus</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography  paragraph>
                {Data.Resto[7].description2}
                </Typography>
                <Typography  paragraph>
                  Adresse: <br />
                {Data.Resto[7].adresse}
                </Typography>
                <Typography  paragraph>
                  Téléphone: <br />
                {Data.Resto[7].tel}
                </Typography>
                <Typography  paragraph>
                Horaire: <br />
                {Data.Resto[7].horaire}
                </Typography>
                
              </AccordionDetails>
            </Accordion>
                  
                
                </CardActions>
                
              </Card>
              </Grid>

              <Grid item xs={4}>

              <Card sx={{ width: 450 }}>
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
                <Typography variant="body2" color="text.secondary">
                {Data.Resto[8].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={count+21}>
                  <IconButton aria-label="add to favorites" color="default"  onClick={() => {
                          if (test==1){
                            setCount(count + 1),
                            setTest(test+1);
                          }
                          else{
                            setCount(count - 1),
                            setTest(test-1);
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>en savoir plus</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography  paragraph>
                {Data.Resto[8].description2}
                </Typography>
                <Typography  paragraph>
                  Adresse: <br />
                {Data.Resto[8].adresse}
                </Typography>
                <Typography  paragraph>
                  Téléphone: <br />
                {Data.Resto[8].tel}
                </Typography>
                <Typography  paragraph>
                Horaire: <br />
                {Data.Resto[8].horaire}
                </Typography>
                
              </AccordionDetails>
            </Accordion>
                  
                
                </CardActions>
                
              </Card>
              </Grid>

              <Grid item xs={4}>

              <Card sx={{ width: 450 }}>
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
                <Typography variant="body2" color="text.secondary">
                {Data.Resto[9].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={count+21}>
                  <IconButton aria-label="add to favorites" color="default"  onClick={() => {
                          if (test==1){
                            setCount(count + 1),
                            setTest(test+1);
                          }
                          else{
                            setCount(count - 1),
                            setTest(test-1);
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>en savoir plus</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography  paragraph>
                {Data.Resto[9].description2}
                </Typography>
                <Typography  paragraph>
                  Adresse: <br />
                {Data.Resto[9].adresse}
                </Typography>
                <Typography  paragraph>
                  Téléphone: <br />
                {Data.Resto[9].tel}
                </Typography>
                <Typography  paragraph>
                Horaire: <br />
                {Data.Resto[9].horaire}
                </Typography>
                
              </AccordionDetails>
            </Accordion>
                  
                
                </CardActions>
                
              </Card>
              </Grid>


              </Grid>



        </TabPanel>

        <TabPanel value={value} index={2}>
        
        <Grid container justify="space-around" spacing={2}>
        <Grid item xs={4}>

              <Card sx={{ width: 450 }}>
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
                <Typography variant="body2" color="text.secondary">
                {Data.Hotel[0].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={count+21}>
                  <IconButton aria-label="add to favorites" color="default"  onClick={() => {
                          if (test==1){
                            setCount(count + 1),
                            setTest(test+1);
                          }
                          else{
                            setCount(count - 1),
                            setTest(test-1);
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>en savoir plus</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography  paragraph>
                {Data.Hotel[0].information}
                </Typography>
                <Typography  paragraph>
                A partir de : <br />
                {Data.Hotel[0].tarif}
                </Typography>
                <Typography  paragraph>
                  Adresse: <br />
                {Data.Hotel[0].adresse}
                </Typography>
                <Typography  paragraph>
                  Téléphone: <br />
                {Data.Hotel[0].tel}
                </Typography>
                <Typography  paragraph>
                Horaire: <br />
                {Data.Hotel[0].horaire}
                </Typography>
                <Link href={Data.Hotel[0].reservation} underline="none">
                Cliqué ici pour réserver une chambre!
                </Link>
                
              </AccordionDetails>
            </Accordion>
                  
                
                </CardActions>
                
              </Card>
              </Grid>

              <Grid item xs={4}>

              <Card sx={{ width: 450 }}>
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
                <Typography variant="body2" color="text.secondary">
                {Data.Hotel[1].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={count+21}>
                  <IconButton aria-label="add to favorites" color="default"  onClick={() => {
                          if (test==1){
                            setCount(count + 1),
                            setTest(test+1);
                          }
                          else{
                            setCount(count - 1),
                            setTest(test-1);
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>en savoir plus</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography  paragraph>
                {Data.Hotel[1].information}
                </Typography>
                <Typography  paragraph>
                A partir de : <br />
                {Data.Hotel[1].tarif}
                </Typography>
                <Typography  paragraph>
                  Adresse: <br />
                {Data.Hotel[1].adresse}
                </Typography>
                <Typography  paragraph>
                  Téléphone: <br />
                {Data.Hotel[1].tel}
                </Typography>
                <Typography  paragraph>
                Horaire: <br />
                {Data.Hotel[1].horaire}
                </Typography>
                <Link href={Data.Hotel[1].reservation} underline="none">
                Cliqué ici pour réserver une chambre!
                </Link>
                
              </AccordionDetails>
            </Accordion>
                  
                
                </CardActions>
                
              </Card>
              </Grid>

              <Grid item xs={4}>

              <Card sx={{ width: 450 }}>
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
                <Typography variant="body2" color="text.secondary">
                {Data.Hotel[2].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={count+21}>
                  <IconButton aria-label="add to favorites" color="default"  onClick={() => {
                          if (test==1){
                            setCount(count + 1),
                            setTest(test+1);
                          }
                          else{
                            setCount(count - 1),
                            setTest(test-1);
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>en savoir plus</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography  paragraph>
                {Data.Hotel[2].information}
                </Typography>
                <Typography  paragraph>
                A partir de : <br />
                {Data.Hotel[2].tarif}
                </Typography>
                <Typography  paragraph>
                  Adresse: <br />
                {Data.Hotel[2].adresse}
                </Typography>
                <Typography  paragraph>
                  Téléphone: <br />
                {Data.Hotel[2].tel}
                </Typography>
                <Typography  paragraph>
                Horaire: <br />
                {Data.Hotel[2].horaire}
                </Typography>
                <Link href={Data.Hotel[2].reservation} underline="none">
                Cliqué ici pour réserver une chambre!
                </Link>
                
              </AccordionDetails>
            </Accordion>
                  
                
                </CardActions>
                
              </Card>
              </Grid>

              <Grid item xs={4}>

              <Card sx={{ width: 450 }}>
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
                <Typography variant="body2" color="text.secondary">
                {Data.Hotel[3].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={count+21}>
                  <IconButton aria-label="add to favorites" color="default"  onClick={() => {
                          if (test==1){
                            setCount(count + 1),
                            setTest(test+1);
                          }
                          else{
                            setCount(count - 1),
                            setTest(test-1);
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>en savoir plus</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography  paragraph>
                {Data.Hotel[3].information}
                </Typography>
                <Typography  paragraph>
                A partir de : <br />
                {Data.Hotel[3].tarif}
                </Typography>
                <Typography  paragraph>
                  Adresse: <br />
                {Data.Hotel[3].adresse}
                </Typography>
                <Typography  paragraph>
                  Téléphone: <br />
                {Data.Hotel[3].tel}
                </Typography>
                <Typography  paragraph>
                Horaire: <br />
                {Data.Hotel[3].horaire}
                </Typography>
                <Link href={Data.Hotel[3].reservation} underline="none">
                Cliqué ici pour réserver une chambre!
                </Link>
                
              </AccordionDetails>
            </Accordion>
                  
                
                </CardActions>
                
              </Card>
              </Grid>


              <Grid item xs={4}>

              <Card sx={{ width: 450 }}>
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
                <Typography variant="body2" color="text.secondary">
                {Data.Hotel[4].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={count+21}>
                  <IconButton aria-label="add to favorites" color="default"  onClick={() => {
                          if (test==1){
                            setCount(count + 1),
                            setTest(test+1);
                          }
                          else{
                            setCount(count - 1),
                            setTest(test-1);
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>en savoir plus</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography  paragraph>
                {Data.Hotel[4].information}
                </Typography>
                <Typography  paragraph>
                A partir de : <br />
                {Data.Hotel[4].tarif}
                </Typography>
                <Typography  paragraph>
                  Adresse: <br />
                {Data.Hotel[4].adresse}
                </Typography>
                <Typography  paragraph>
                  Téléphone: <br />
                {Data.Hotel[4].tel}
                </Typography>
                <Typography  paragraph>
                Horaire: <br />
                {Data.Hotel[4].horaire}
                </Typography>
                <Link href={Data.Hotel[4].reservation} underline="none">
                Cliqué ici pour réserver une chambre!
                </Link>
                
              </AccordionDetails>
            </Accordion>
                  
                
                </CardActions>
                
              </Card>
              </Grid>


              <Grid item xs={4}>

              <Card sx={{ width: 450 }}>
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
                <Typography variant="body2" color="text.secondary">
                {Data.Hotel[5].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={count+21}>
                  <IconButton aria-label="add to favorites" color="default"  onClick={() => {
                          if (test==1){
                            setCount(count + 1),
                            setTest(test+1);
                          }
                          else{
                            setCount(count - 1),
                            setTest(test-1);
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>en savoir plus</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography  paragraph>
                {Data.Hotel[5].information}
                </Typography>
                <Typography  paragraph>
                A partir de : <br />
                {Data.Hotel[5].tarif}
                </Typography>
                <Typography  paragraph>
                  Adresse: <br />
                {Data.Hotel[5].adresse}
                </Typography>
                <Typography  paragraph>
                  Téléphone: <br />
                {Data.Hotel[5].tel}
                </Typography>
                <Typography  paragraph>
                Horaire: <br />
                {Data.Hotel[5].horaire}
                </Typography>
                <Link href={Data.Hotel[5].reservation} underline="none">
                Cliqué ici pour réserver une chambre!
                </Link>
                
              </AccordionDetails>
            </Accordion>
                  
                
                </CardActions>
                
              </Card>
              </Grid>


              <Grid item xs={4}>

              <Card sx={{ width: 450 }}>
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
                <Typography variant="body2" color="text.secondary">
                {Data.Hotel[6].description}
                </Typography>
              </CardContent>
              
                <CardActions disableSpacing>
                <Badge color="secondary" badgeContent={count+21}>
                  <IconButton aria-label="add to favorites" color="default"  onClick={() => {
                          if (test==1){
                            setCount(count + 1),
                            setTest(test+1);
                          }
                          else{
                            setCount(count - 1),
                            setTest(test-1);
                          }
                          
                          }}>
                      <FavoriteIcon   />
                  </IconButton>
                </Badge>

                <IconButton aria-label="open map" color="default" >
                    
                    <LocationOnIcon/>
                </IconButton>

                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>en savoir plus</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography  paragraph>
                {Data.Hotel[6].information}
                </Typography>
                <Typography  paragraph>
                A partir de : <br />
                {Data.Hotel[6].tarif}
                </Typography>
                <Typography  paragraph>
                  Adresse: <br />
                {Data.Hotel[6].adresse}
                </Typography>
                <Typography  paragraph>
                  Téléphone: <br />
                {Data.Hotel[6].tel}
                </Typography>
                <Typography  paragraph>
                Horaire: <br />
                {Data.Hotel[6].horaire}
                </Typography>
                <Link href={Data.Hotel[6].reservation} underline="none">
                Cliqué ici pour réserver une chambre!
                </Link>
                
              </AccordionDetails>
            </Accordion>
                  
                
                </CardActions>
                
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
