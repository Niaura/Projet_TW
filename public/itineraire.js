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
