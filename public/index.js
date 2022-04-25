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
import { Formulaire, ImageFond2 } from './contact.js';
import HomeIcon from '@mui/icons-material/Home';
import ButtonBase from '@mui/material/ButtonBase';

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

const Suggestion2 = ({ onClick }) => {

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

  const images = [
    {
      url: './images/cap.jpg',
      title: 'Lieux',
      width: '33%',
    },
    {
      url: './images/Razzurro.jpg',
      title: 'Restaurants',
      width: '34%',
    },
    {
      url: './images/Hpasteliers.jpg',
      title: 'Hôtels',
      width: '33%',
    },
  ];
  
  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));
  
  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });
  
  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));
  
  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }));
  
  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }));

  

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          onClick={ () => onClick('sejour')}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}


function App() {

  let [etat, setEtat] = React.useState("accueil");
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
            <Suggestion/>
            <Suggestion2 onClick={setEtat}/>
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

  return <>
    <ResponsiveAppBar onClick={setEtat}/>
    { render()}
    <ResponsiveAppBarFoot onClick={setEtat}/>
  </>;
}

//ATTENTION : SI SUR MUI VOUS AVEZ document.querySelector('#app') MODIFIEZ AVEC ROOT
ReactDOM.render(<>
  <App />
</>, document.querySelector('#root'));

