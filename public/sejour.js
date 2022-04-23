import * as React from 'react';
import ReactDOM from 'react-dom';

import Data from "./Bdd/data.json";


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





export function Sejour(){
  
  //Button like
  const [test, setTest] = React.useState(1);
  const [count, setCount] = React.useState(1);
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
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <Typography gutterBottom variant="h5" component="div">
            Nos lieux à visiter!
        </Typography>

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

                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>learn more</Typography>
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
                <Badge color="secondary" badgeContent={count+16}>
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

                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>learn more</Typography>
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
                <Badge color="secondary" badgeContent={count+14}>
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

                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>learn more</Typography>
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
                <Badge color="secondary" badgeContent={count+9}>
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

                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>learn more</Typography>
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
                <Badge color="secondary" badgeContent={count+5}>
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

                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>learn more</Typography>
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
                <Badge color="secondary" badgeContent={count+25}>
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

                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>learn more</Typography>
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
                <Badge color="secondary" badgeContent={count+12}>
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

                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>learn more</Typography>
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
                <Badge color="secondary" badgeContent={count+3}>
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

                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>learn more</Typography>
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
                <Badge color="secondary" badgeContent={count+4}>
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

                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>learn more</Typography>
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
        <Typography gutterBottom variant="h5" component="div">
            Nos restaurant!
        </Typography>
          
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

                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>learn more</Typography>
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
                {Data.lieux[0].horaire}
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

                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>learn more</Typography>
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
                {Data.lieux[1].horaire}
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

                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>learn more</Typography>
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
                {Data.lieux[2].horaire}
                </Typography>
                
              </AccordionDetails>
            </Accordion>
                  
                
                </CardActions>
                
              </Card>
              </Grid>

              </Grid>



        </TabPanel>

        <TabPanel value={value} index={2}>
        <Typography gutterBottom variant="h5" component="div">
            Nos hotel!
        </Typography>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
    }


  



//ATTENTION : SI SUR MUI VOUS AVEZ document.querySelector('#app') MODIFIEZ AVEC ROOT
ReactDOM.render(<> <ResponsiveAppBar/> <br/> <Sejour /> <br/> <ResponsiveAppBarFoot /> </> , document.querySelector('#root'));
