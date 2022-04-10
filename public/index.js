import React from 'react';
import ReactDOM from 'react-dom';

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Grid from '@mui/material/Grid';
import { Sejour } from './sejour.js';
import { Itineraire } from './itineraire.js';
import { ImageFond } from './accueil.js';
import { Suggestion } from './accueil.js';
import HomeIcon from '@mui/icons-material/Home';

const container = document.getElementById('root');

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
    <AppBar position="static" style={{ background: 'linear-gradient(to right, blue, purple)' }}>
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
            >
              Actualités
            </Button>
            <Button
              variant="outlined"
              sx={{ my: 2, color: 'white', display: 'block' }}
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

const ResponsiveAppBarFoot = () => {

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
                <Button>Nous contacter</Button> <br />
                <Button><FacebookIcon /></Button>
                <Button><InstagramIcon /></Button>
                <Button><TwitterIcon /></Button>
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

function App() {

  let [etat, setEtat] = React.useState("accueil");
  function render() {

    switch (etat) {
      case "sejour":
        return <Sejour />;
      case "itineraire":
        return <Itineraire />;
      case "accueil":
        return (
          <>
          <ImageFond />
          <Suggestion/>
          </>
        );
      default:
        return <></>
    }
  }

  return <>
    <ResponsiveAppBar onClick={setEtat}/>
    { render()}
    <ResponsiveAppBarFoot />
  </>;
}

//ATTENTION : SI SUR MUI VOUS AVEZ document.querySelector('#app') MODIFIEZ AVEC ROOT
ReactDOM.render(<>
  <App />
</>, document.querySelector('#root'));

