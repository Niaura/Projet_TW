import * as React from "react";
import { TextField, Typography, Slider, Hidden } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextareaAutosize from "@mui/base/TextareaAutosize";
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
import Button from '@mui/material/Button';
import { ConstructionRounded } from "@mui/icons-material";

export function ImageFond2(){
  return (
      <div style={{backgroundColor: "#D3D3D3"}}>
        <img
            src={'/images/contacteznous.jpg'}
            alt="Contacter-nous"
            width="100%"
        >
        </img>
        <div
          style={{
          textAlign: "center",
          
        }}
        >
          <h1>--- Contactez-nous ---</h1>
          <h3>
            Que vous planifiiez un voyage de loisirs ou d’affaires, seul, en
            famille ou en groupe, nous sommes ravis de vous accompagner dans
            l’organisation de votre séjour à Albi !
          </h3>
          <p style={{ fontSize: "18px" }}>
            On aime entretenir une relation personnalisée avec notre public. C'est
            pourquoi nous vous proposons de choisir votre moyen de communication
            privilégié.
          </p>
          <p style={{ fontSize: "18px" }}>
            Contactez-nous pour toute demande d'informations et de suggestion.
            Albi Tourisme vous aide à préparer votre séjour à Albi.
          </p>
        </div>
        <br/>
      </div>
  );
}

export function Formulaire() {
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

  const [value, setValue] = React.useState("");
  const [value2, setValue2] = React.useState("");
  const [value3, setValue3] = React.useState("");

  const handleChange = (event) => {
    setOpen2(true);
    
    setValue(event.target.value);
  };
  const handleChange2 = (event) => {
    setOpen3(true);

    setValue2(event.target.value);
  };
  const handleChange3 = (event) => {
    if (event.target.value === 100) {
      if (
        document.getElementById("nom").value != "" &&
        document.getElementById("prenom").value != "" &&
        document.getElementById("datedenaissance").value != "" &&
        document.getElementById("adresse").value != "" &&
        document.getElementById("telephone").value != "" &&
        document.getElementById("ville").value != "" &&
        document.getElementById("email").value != "" &&
        document.getElementById("textmessage").value != ""
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
  const handleChange4 = (event) => {
    setOpen4(true);

    setValue3(event.target.value);
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
    <form ref={form} onSubmit={sendEmail}>
      <br/>
      <div style={{ textAlign: "center" }}>
        <FormControl id="jesuis" sx={{ m: 1, width: 600 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Je suis*
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="select1"
            onChange={handleChange}
            autoWidth
            label="Je suis*"
          >
            <MenuItem value="Particulier">Particulier</MenuItem>
            <MenuItem value="Professionnel">Professionnel</MenuItem>
            <MenuItem value="Collectivite">Collectivité</MenuItem>
            <MenuItem value="Candidat">Candidat</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div style={{ textAlign: "center" }}>
      <Collapse in={open2}>
        <FormControl
          id="jesouhaite"
          sx={{ m: 1, width: 600 }}
        >
          <InputLabel id="demo-simple-select-autowidth-label">
            Je souhaite*
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="jesouhaite"
            onChange={handleChange2}
            autoWidth
            label="Je souhaite*"
          >
            <MenuItem value="Contacter le service client concernant une visite">
              Contacter le service client concernant une visite
            </MenuItem>
            <MenuItem value="Demander des informations sur un lieu de la ville">
              Demander des informations sur un lieu de la ville
            </MenuItem>
            <MenuItem value="De l'aide concernant mon séjour">De l'aide concernant mon séjour</MenuItem>
            <MenuItem value="De l'aide sur le fonctionnement du site">
              De l'aide sur le fonctionnement du site
            </MenuItem>
            <MenuItem value="Autre demande">Autre demande</MenuItem>
          </Select>
        </FormControl>
      </Collapse>
      </div>

      <br />

      <div id="message" style={{ textAlign: "center"}}>
      <Collapse in={open3}>
        <FormControl id="civilité" sx={{ m: 1, width: 600 }}>
          <InputLabel id="civilité2">Civilité*</InputLabel>
          <Select
            id="civilité"
            onChange={handleChange4}
            autoWidth
            label="Civilité*"
          >
            <MenuItem value="Madame">Madame</MenuItem>
            <MenuItem value="Monsieur">Monsieur</MenuItem>
          </Select>
        </FormControl>
      </Collapse>
      </div>
      <br />
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

          <TextField id="adresse" name="adresse" label="Adresse*" sx={{ m: 1, width: 600 }} />

          <br />

          <TextField id="ville" name="ville" label="Ville*" sx={{ m: 1, width: 600 }}/>

          <br />

          <TextField id="telephone" name="telephone" label="Téléphone*" sx={{ m: 1, width: 600 }}/>

          <br />

          <TextField id="email" name="email" label="E-mail*" sx={{ m: 1, width: 600 }}/>

          <br />
        

        <br />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextareaAutosize
              id="textmessage"
              placeholder="Votre message"
              name="message"
              style={{ resize: "none", width: 600 }}
              minRows={15}
            ></TextareaAutosize>
          </Grid>
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
              Votre message a bien été envoyé!
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
     
      <div style={{visibility: "hidden", display: "inline"}}>
        <TextField name="jesuis" value={value}/>
        <TextField name="jesouhaite" value={value2}/>
        <TextField name="civilité" value={value3}/>
      </div>
      
    </form>
  );
}
