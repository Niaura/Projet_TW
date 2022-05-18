import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import Data from "./Bdd/data.json";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';


import { TextField, Slider } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import CancelScheduleSendIcon from "@mui/icons-material/CancelScheduleSend";
import SendIcon from "@mui/icons-material/Send";
import emailjs from '@emailjs/browser'
import { useRef } from 'react';

//----------------------------FONCTION IMAGE FOND ACCUEIL------------------------------
export function ImageFond(){
    return (
        <picture>
            <img
                src={'/images/accueilbienvenu.jpg'}
                alt="Albi accueil"
                width="100%"
            >
            </img>
        </picture>
    );
}


//----------------------------FONCTION CARROUSSEL------------------------------
export function Suggestion() {
    const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Musée Toulouse-Lautrec',
    imgPath:
      './images/museeT.jpg',
  },
  {
    label: 'Parc Rochegude',
    imgPath:
      './images/parc.jpg',
  },
  {
    label: 'Restaurant Le Cascarbar',
    imgPath:
      './images/Rcascarbar.jpg',
  },
  {
    label: 'Espace zoologique Exoticamis',
    imgPath:
      './images/Zoo.jpg',
  },
  {
    label: 'Hôtel les Pasteliers',
    imgPath:
      './images/Hpasteliers.jpg',
  },
];

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 500, flexGrow: 1, justifyContent:"center" }} b>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: '#b4b8c8',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 250,
                  display: 'block',
                  maxWidth: 500,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="medium"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="medium" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}



//----------------------------FONCTION ACTUALITES------------------------------
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export  function Suggestion4() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const NbActu = [{ _id: "0" },{ _id: "1" }, { _id: "2" }, { _id: "3" },{ _id: "4" }, { _id: "5" }, { _id: "6" }];
  return (
    <>
    <div>
      <Typography style={{fontFamily: "Comic Sans MS", textAlign: "center", fontSize: "30px"}}>
        VIVEZ L'ACTUALITÉ
      </Typography>
      <hr style={{
        margin: "10px auto",
        width: "50%",
        height: "2px",
        backgroundColor: "#f90",
        border: "none"
      }}/>
      <p style={{textAlign: "center", fontSize: "19px"}}>
        <strong>Toute l'actualité sur le sujet du tourisme à Albi.</strong><br />
        Consultez l'ensemble des articles en choisissant le sujet qui vous plaît ! Retrouvez l'actualité du tourisme à Albi pour ne rien rater des évenements !
      </p>
    </div>
    <br />
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
        {NbActu.map((l, i) => (
        <Tab label={Data.Actu[l._id].nom} {...a11yProps(l._id)} />
        ))}
        </Tabs>
      </AppBar>
      {NbActu.map((l, i) => (
        <TabPanel value={value} index={i}>
          
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <img
                  src={Data.Actu[i].image}
                  alt={Data.Actu[i].id}
                  width="100%"
              />
            </Grid>
            <Grid item xs={10}>
              <p><strong>Le {Data.Actu[i].date} - {Data.Actu[i].ou} - {Data.Actu[i].adresse}</strong> <br /> <br/>{Data.Actu[i].decription}<br/>{Data.Actu[i].description2}</p>
            </Grid>
          </Grid>
        </TabPanel>
      ))}
    </div>
    </>
  );
}

//----------------------------FONCTION EXCURSION GROUPE------------------------------
export  function Groupes() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Nbgroup = [{ _id: "0" },{ _id: "1" }, { _id: "2" }, { _id: "3" },{ _id: "4" }, { _id: "5" }, { _id: "6" }];
  
  

  return (
    <>
    
    <div>
      <Typography style={{fontFamily: "Comic Sans MS", textAlign: "center", fontSize: "30px"}}>
        PARTICIPER À DES EXCURSIONS EN GROUPE!
      </Typography>
      <hr style={{
        margin: "10px auto",
        width: "50%",
        height: "2px",
        backgroundColor: "#f90",
        border: "none"
      }}/>
      <p style={{textAlign: "center", fontSize: "19px"}}>
        <strong>Toute les excursions en groupe à Albi.</strong><br />
        Consultez l'ensemble des articles en choisissant le sujet qui vous plaît ! Retrouvez les excursions en groupe à Albi pour rencontrer de nouvelles personnes !
      </p>
    </div>
    <br />
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
        {Nbgroup.map((l, i) => (
        <Tab label={Data.Groupe[l._id].nom} {...a11yProps(l._id)} />
        ))}
        </Tabs>
      </AppBar>
      {Nbgroup.map((l, i) => (
        <TabPanel value={value} index={i}>
          
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <img
                  src={Data.Groupe[i].image}
                  alt={Data.Groupe[i].id}
                  width="100%"
              />
            </Grid>
            <Grid item xs={10}>
              <p><strong> {Data.Groupe[i].date} - {Data.Groupe[i].adresse}</strong> <br /> <br/>{Data.Groupe[i].decription}<br/>{Data.Groupe[i].description2}</p>
            </Grid>
            </Grid>

            </TabPanel>
             ))}
             </div>

    </>
  );
}


//----------------------------FONCTION EXCURSION INSCRIPTION------------------------------
export  function Inscri() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Nbgroup = [{ _id: "0" },{ _id: "1" }, { _id: "2" }, { _id: "3" },{ _id: "4" }, { _id: "5" }, { _id: "6" }];
  
  //---email
  const form = useRef();
  var a = true;
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kwb9sn7','template_o13i2e7', form.current,'yAV214GEzT_CoRl69').
    then((resultat) => {
      console.log(resultat.text);
    }, (error) => {
      console.log(error.text);
    });
  };

  const handleChange6 = (event) => {
    setOpen2(true)
  };
  const handleChange2 = (event) => {
    setOpen3(true);
  };
  const handleChange3 = (event) => {
    if (event.target.value === 100) {
      if (
        document.getElementById("jesouhaite").value != "" &&
        document.getElementById("nom").value != "" &&
        document.getElementById("prenom").value != "" &&
        document.getElementById("datedenaissance").value != "" &&
        document.getElementById("email").value != "" 
      ) {
        if (a==true){
          document.getElementById("boutonenvoyer").click();
          setOpen(true);
          a=false;
        }
        
        
      } else {
        alert("Veuillez compléter les cases vides !");
        document.getElementById("slideenvoyer").setAttribute("defaultValue", 0);
      }
    }
  };

  const [value2, setValue2] = React.useState("");

  const handleChange4 = (event) => {
    setOpen4(true);

    setValue2(event.target.value);
  };
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);

  const [slidevalue, setSlidevalue] = React.useState(0);
  const [checked, setChecked] = React.useState(false);

  const handleChange5 = () => {
    setChecked((prev) => !prev);
  };

  const marks = [
    {
      value: 0,
      label: <CancelScheduleSendIcon />
    },
    {
      value: 100,
      label: <SendIcon />
    }
  ];

  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: blue[800]
      },
      secondary: {
        // This is green.A700 as hex.
        main: "#11cb5f"
      }
    }
  });

  

  return (
    <>
    <form ref={form} onSubmit={sendEmail}>
    
        <p style={{textAlign: "center", fontSize: "19px"}}>
        <strong>Remplissez le formulaire pour vous inscrire!</strong><br />
      </p>
            
      <br/>
      <div style={{ textAlign: "center" }}>
        <FormControl id="jesouhaite" sx={{ m: 1, width: 600 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Je souhaite m'inscrire pour*
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="select1"
            onChange={handleChange4}
            autoWidth
            label="Je souhaite m'inscrire pour*"
          >
            <MenuItem value="La cité épiscopale d'Albi">La cité épiscopale d'Albi</MenuItem>
            <MenuItem value="Le centre historique">Le centre historique</MenuItem>
            <MenuItem value="Les aventuriers de la ville rouge">Les aventuriers de la ville rouge</MenuItem>
            <MenuItem value="Chasse au trésor">Chasse au trésor</MenuItem>
            <MenuItem value="Crimes et faits divers à ALbi">Crimes et faits divers à Albi</MenuItem>
            <MenuItem value="Promenade avec madame Lapérouse">Promenade avec madame Lapérouse</MenuItem>
            <MenuItem value="Les monstrueuses nocturnes d'Albi">Les monstrueuses nocturnes d'Albi</MenuItem>
          </Select>
        </FormControl>
      </div>
      
      <div
        id="coordonnee"
        style={{ textAlign: "center"}}
      >
        <Collapse in={open4}>
        
        <FormControl id="civilité" sx={{ m: 1, width: 600 }}/>

          <br/>

          <TextField id="nom" name="nom" label="Nom*" sx={{ m: 1, width: 600 }}/>

          <br />

          <TextField id="prenom" name="prenom" label="Prénom*" sx={{ m: 1, width: 600 }}/>

          <br />

          <TextField
            id="datedenaissance"
            label="Date de naisssance"
            InputLabelProps={{ shrink: true, required: true }}
            type="date"
            name="datedenaissance"
            sx={{ m: 1, width: 600 }}
          />

          <br />

          <TextField id="email" name="email" label="E-mail*" sx={{ m: 1, width: 600 }}/>

          <br />
        

        <br />
        <Grid container spacing={2}>
          
          <Grid item xs={12}>
            <FormControlLabel
              control={<Switch checked={checked} onChange={handleChange5} />}
              label="J’accepte que mes informations soient enregistrées afin de rendre le service demandé"
            />
          </Grid>
          <Grid item xs={12}>
            <ThemeProvider theme={theme} id="themeprovider">
              <Slider
                id="slideenvoyer"
                defaultValue={slidevalue}
                color="primary"
                onChange={handleChange3}
                marks={marks}
                sx={{
                  width: 175,
                  color: "success.dark",
                  "& .MuiSlider-thumb": {
                    borderRadius: "6px"
                  }
                }}
              />
            </ThemeProvider>
          </Grid>
        </Grid>
        </Collapse>
        <br />
        <Button type="submit" id="boutonenvoyer" style={{visibility: "hidden"}}>Envoyer</Button>
        <div id="messageenvoye" style={{ width: "100%" }}>
          <Collapse in={open}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                    
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              Votre demande d'inscription a bien été envoyé!
            </Alert>
          </Collapse>
        </div>
        
        <Collapse in={open}>
          <Button 
            style={{textAlign: "center"}}
            onClick={(e) => {
              e.preventDefault();
              window.location.reload();
            }}>
            Raffraichir la page
          </Button>
        </Collapse>
      </div>
      <div style={{visibility: "hidden"}}>
          <TextField name="jesouhaite" value={value2}/>
      </div>
    </form>
    </>
  );
}


//----------------------------FONCTION ETAPE / PREPARATION SEJOUR------------------------------
export function Etape() {
  const steps = ['Geocaching', 'Visites-spectacles', 'Tourisme participatif'];
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '97%' }} style={{border: "thick double #32a1ce", borderRadius: "20px"}}>
      <h3 style={{textAlign: "center"}}>
        Nos consignes pour réussir votre séjour à Albi !
      </h3>

      <p>
        Partir en vacances en ayant l’esprit tranquille et éviter le stress lié au départ est le rêve de tout vacancier. Pour réussir son départ et ses vacances d’été, le respect de quelques règles simples est essentiel. Voici les quelques conseils pour bien préparer son séjour.
      </p>
      <br/>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Bravo, vous pouvez être sûr de passer un excellent séjour !
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}



//----------------------------FONCTION ETAPE 2------------------------------
export function Actualite() {
  const steps = [
    {
      label: 'Select campaign settings',
      description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
    },
    {
      label: 'Create an ad group',
      description:
        'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
      label: 'Create an ad',
      description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
  ];
  
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}


//----------------------------FONCTION GRAPHIQUE------------------------------
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

//L'ACCUEIL EN 2020
export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Répartition des clientèles qualifiées étrangères',
    },
  },
};

var ClientelesEtrangersLabels = [];
var ClientelesEtrangersData2019 = [];
var ClientelesEtrangersData2020= [];

for (let i=0; i<Data.ClientelesEtrangers2019.length; i++){
  ClientelesEtrangersLabels.push(Data.ClientelesEtrangers2019[i].nom);
  ClientelesEtrangersData2019.push(Data.ClientelesEtrangers2019[i].nbvisiteur);
  ClientelesEtrangersData2020.push(Data.ClientelesEtrangers2020[i].nbvisiteur);
}

export const data = {
  labels: ClientelesEtrangersLabels,
  datasets: [
    {
      label: 'Clientèle en 2020',
      data: ClientelesEtrangersData2020,
      backgroundColor: 'rgba(72, 116, 217, 0.9)',
    },
    {
      label: 'Clientèle en 2019',
      data: ClientelesEtrangersData2019,
      backgroundColor: 'rgba(216, 85, 85, 0.9)',
    },
  ]

};

//ATTRACTIVITE EN 2016

var AttractiviteLabel = [];
var AttractiviteData = [];
var TabCouleur = [
'rgba(255, 99, 132, 0.2)',
'rgba(54, 162, 235, 0.2)',
'rgba(255, 206, 86, 0.2)',
'rgba(75, 192, 192, 0.2)',
'rgba(153, 102, 255, 0.2)',
'rgba(255, 159, 64, 0.2)',
'rgba(158, 60, 158, 0.2)',
'rgba(124, 169, 49, 0.2)',
'rgba(64, 199, 195, 0.2)'
]

var TabBordure = [
'rgba(255, 99, 132, 1)',
'rgba(54, 162, 235, 1)',
'rgba(255, 206, 86, 1)',
'rgba(75, 192, 192, 1)',
'rgba(153, 102, 255, 1)',
'rgba(255, 159, 64, 1)',
'rgba(158, 60, 158, 1)',
'rgba(124, 169, 49, 1)',
'rgba(64, 199, 195, 1)'
]

for (let i=0; i<Data.Attractivité2016.length; i++){
  AttractiviteLabel.push(Data.Attractivité2016[i].nom);
  AttractiviteData.push(Data.Attractivité2016[i].nbvisiteur);
}

export const options2 = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Nombre de visiteurs sur les différents sites touristiques',
    },
  },
};

export const data2 = {
  labels: AttractiviteLabel,
  datasets: [
    {
      label: 'Attractivité en 2016',
      data: AttractiviteData,
      backgroundColor: TabCouleur,
      borderColor: TabBordure,
      borderWidth: 1,
    },
  ],
  
};

export function Graphique() {
  return( 
    <>
    <div>
      <Typography style={{fontFamily: "Comic Sans MS", textAlign: "center", fontSize: "30px"}}>
        L'ACCUEIL EN 2020
      </Typography>
      <hr style={{
        margin: "10px auto",
        width: "50%",
        height: "2px",
        backgroundColor: "#f90",
        border: "none"
      }}/>
      <p style={{textAlign: "center", fontSize: "19px"}}>
        <strong>L'accueil des visiteurs en 2020 a été fortement impacté par la crise sanitaire</strong><br />
        Alors que le début d’année 2020 s’annonçait plutôt bon, le reste de l’année comme pour tous les Offices de Tourisme nationaux a été catastrophique.<br/>
        Nous enregistrons une chute de notre fréquentation dans la ville d'Albi.
      </p>
    </div>
    <div style={{width: "600px", margin:"0 auto"}} >
      <Bar options={options} data={data} />
    </div>

    <br/>
    <br/>
    
    <div>
      <Typography style={{fontFamily: "Comic Sans MS", textAlign: "center", fontSize: "30px"}}>
        ATTRACTIVITÉ DE LA VILLE EN 2016
      </Typography>
      <hr style={{
        margin: "10px auto",
        width: "50%",
        height: "2px",
        backgroundColor: "#f90",
        border: "none"
      }}/>
      <p style={{textAlign: "center", fontSize: "19px"}}>
        <strong>Joyau du gothique méridional, la cathédrale Sainte-Cécile, la plus grande cathédrale de briques du monde</strong><br />
        Après avoir atteint le seuil du million de visiteurs, la cité tarnaise en a reçu 1,5 million en 2016. Ce chiffre prend en compte les visiteurs des principaux sites  <br/>
        (cathédrale, musée Toulouse-Lautrec), mais aussi les participants des événements comme la Semaine fédérale de cyclotourisme et ses 15 000 participants en août dernier.
      </p>
    </div>

    <div style={{width: "500px", margin:"0 auto"}} >
      <Pie options={options2}data={data2} />
    </div>
    <br/>
    </>
  );
}
