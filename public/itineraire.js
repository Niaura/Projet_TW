////////////////////////////// PARTIE POUR REACT /////////////////////////////////////

import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';

/////////////////////////////////////////////////////////////////////////////////////


///////////////////////////// IMPORTATION DES AUTRES FICHIERS ///////////////////////

import Data from "./Bdd/data.json";
import { Formulaire } from './contact.js';
import { Sejour } from './sejour.js';

/////////////////////////////////////////////////////////////////////////////////////



////////////////////////////// PARTIE POUR MUI ///////////////////////////////////////

import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Paper from '@mui/material/Paper';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationCityIcon from '@mui/icons-material/LocationCity';



/////////////////////////////////////////////////////////////////////////////////////


////////////////////////////// PARTIE POUR LEAFLET ///////////////////////////////////

// Voir sur npm -> leaflet react : VA REMPLACER GOOGLE

import L from 'leaflet';
import marker from 'leaflet';

import Routing from 'leaflet-routing-machine';

/////////////////////////////////////////////////////////////////////////////////////




//////////////////////////// BARRE DU HAUT //////////////////////////////////////////

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


//////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////// BARRE DU BAS /////////////////////////////////////

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


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




//////////////////////////////////////////////////////////////////////////////////////


const NbLieux = [{ _id: "0" },{ _id: "1" }, { _id: "2" }, { _id: "3" },{ _id: "4" }, { _id: "5" }, { _id: "6" },{ _id: "7" }, { _id: "8" }, { _id: "9" }];
const NbResto = [{ _id: "0" },{ _id: "1" }, { _id: "2" }, { _id: "3" },{ _id: "4" }, { _id: "5" }, { _id: "6" },{ _id: "7" }, { _id: "8" }, { _id: "9" }];
const NbHotel = [{ _id: "0" },{ _id: "1" }, { _id: "2" }, { _id: "3" },{ _id: "4" }, { _id: "5" }, { _id: "6" }];

const Map = () => {
  const mapStyles = {
    overflow: "hidden",
    width: "100%",
    height: "100vh"
  };
  const MAP_TILE = L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  // Charge la map sur Albi
  const mapParams = {
    center: [43.933333, 2.150000],
    zoom: 14,
    zoomControl: false,
    maxBounds: L.latLngBounds(L.latLng(-150, -240), L.latLng(150, 240)),
    layers: [MAP_TILE]
  };
   
  // Mettre ici toute les fonctions etc qui ont un effet sur map
  useEffect(() => {
    const map = L.map("map", mapParams);

    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .console.log(e.latlng)
            .openOn(map);
    }

    map.on('click', onMapClick);

    var lesLieux = [];
    var lesResto = [];
    var lesHotels = [];

    {NbLieux.map((l, i) => (

      lesLieux.push([Data.lieux[l._id].lagitude, Data.lieux[l._id].longitude, Data.lieux[l._id].nom])

    ))};

    {NbResto.map((l, i) => (

      lesResto.push([Data.Resto[l._id].lagitude, Data.Resto[l._id].longitude, Data.Resto[l._id].nom])

    ))};

    {NbHotel.map((l, i) => (

      lesHotels.push([Data.Hotel[l._id].lagitude, Data.Hotel[l._id].longitude, Data.Hotel[l._id].nom])

    ))};

    console.log(lesLieux);
    console.log(lesResto);
    console.log(lesHotels);



    var mesCoordonees = [
      [43.919737, 2.138901, "Université"],
      [43.928474, 2.143660, "Cathédrale"],
      [43.931220, 2.133501, "Base de Loisirs"],
      [43.854069, 2.275847, "Zoo"]
    ];


    for(var i = 0; i<lesLieux.length;i++){
      L.Routing.control({
        waypoints: [
  
          L.latLng(lesLieux[i][0], lesLieux[i][1]),
        ]
      }).addTo(map);
    }
    

    const locationOptions = {
      maximumAge: 10000,
      timeout: 5000,
      enableHighAccuracy: true
    };

    function handleLocation(position) {
      /* Zoom avant de trouver la localisation */
      map.setZoom(16);
      /* Centre la carte sur la latitude et la longitude de la localisation de l'utilisateur */
      map.panTo(new L.LatLng(position.coords.latitude, position.coords.longitude));
    }

    function handleLocationError(msg) {
        alert("Erreur lors de la géolocalisation");
    }

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(handleLocation, handleLocationError, locationOptions);
    } else {
        /* Le navigateur n'est pas compatible */
        alert("Géolocalisation indisponible");
  }

  }, []);



  

  return (
    <div>
      <div id="map" style={mapStyles} />
      
    </div>
    
  )
};


///////////////////////////////  PARTIE DU MILIEU ////////////////////////////////////

export function Itineraire(){

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const position = [51.505, -0.09]

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
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
            <Typography>Itinéraires disponibles :</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Voici une liste d'itinéraires spécialement préparé pour vous ! :D
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
            <Typography>Calculer un itinéraire :</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Vous pouvez calculer un itinéraire, sois avec des coordonées personnalisés sois grâce aux lieux déjà présent sur la map ! :D
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={7}>
          <Map />
        </Grid>
      </Grid>
    </Box>
  );
};




//ATTENTION : SI SUR MUI VOUS AVEZ document.querySelector('#app') MODIFIEZ AVEC ROOT
ReactDOM.render(<> <ResponsiveAppBar/> <br/> <Itineraire /> <br/> <ResponsiveAppBarFoot /> </>, document.querySelector('#root'));
