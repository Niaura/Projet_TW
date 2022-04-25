import * as React from "react";
import { TextField, Typography, Slider } from "@mui/material";
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
import ScheduleSendIcon from "@mui/icons-material/ScheduleSend";
import SendIcon from "@mui/icons-material/Send";

export function Formulaire() {
  const handleChange = (event) => {
    document.getElementById("jesouhaite").style.visibility = "visible";
  };
  const handleChange2 = (event) => {
    document.getElementById("message").style.visibility = "visible";
  };
  const handleChange3 = (event) => {
    if (event.target.value === 100) {
      if (
        document.getElementById("nom").value != "" &&
        document.getElementById("prenom").value != "" &&
        document.getElementById("datedenaissance").value != "" &&
        document.getElementById("adresse").value != "" &&
        document.getElementById("telephone").value != "" &&
        document.getElementById("codepostal").value != "" &&
        document.getElementById("email").value != "" &&
        document.getElementById("textmessage").value != ""
      ) {
        setOpen(true);
      } else {
        alert("Veuillez compléter les cases vides !");
      }
    }
  };
  const handleChange4 = (event) => {
    document.getElementById("coordonnee").style.visibility = "visible";
  };
  const [open, setOpen] = React.useState(false);
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
      value: 50,
      label: <ScheduleSendIcon />
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
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#D3D3D3"
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
            <MenuItem value="particulier">Particulier</MenuItem>
            <MenuItem value="professionnel">Professionnel</MenuItem>
            <MenuItem value="collectivite">Collectivité</MenuItem>
            <MenuItem value="candidat">Candidat</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div style={{ textAlign: "center" }}>
        <FormControl
          id="jesouhaite"
          sx={{ m: 1, width: 600 }}
          style={{ visibility: "hidden" }}
        >
          <InputLabel id="demo-simple-select-autowidth-label">
            Je souhaite*
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            onChange={handleChange2}
            autoWidth
            label="Je souhaite*"
          >
            <MenuItem value="contacter">
              Contacter le service client concernant une visite
            </MenuItem>
            <MenuItem value="demander">
              Demander des informations sur un lieu de la ville
            </MenuItem>
            <MenuItem value="aide1">De l'aide concernant mon séjour</MenuItem>
            <MenuItem value="aide2">
              De l'aide sur le fonctionnement du site
            </MenuItem>
            <MenuItem value="aide3">Autre demande</MenuItem>
          </Select>
        </FormControl>
      </div>

      <br />

      <div id="message" style={{ textAlign: "center", visibility: "hidden" }}>
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
      </div>
      <br />
      <div
        id="coordonnee"
        style={{ textAlign: "center", visibility: "hidden" }}
      >
        <FormControl id="civilité" sx={{ m: 1, width: 600 }}>
          <TextField id="nom" label="Nom*" />

          <br />

          <TextField id="prenom" label="Prénom*" />

          <br />

          <TextField
            id="datedenaissance"
            label="Date de naisssance"
            InputLabelProps={{ shrink: true, required: true }}
            type="date"
          />

          <br />

          <TextField id="adresse" label="Adresse*" />

          <br />

          <TextField id="codepostal" label="Code postal*" />

          <br />

          <TextField id="telephone" label="Téléphone*" />

          <br />

          <TextField id="email" label="E-mail*" />

          <br />
        </FormControl>

        <br />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextareaAutosize
              id="textmessage"
              placeholder="Votre message"
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

        <br />

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
                    window.location.reload();
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              Message envoyé!
            </Alert>
          </Collapse>
        </div>
      </div>
    </>
  );
}
