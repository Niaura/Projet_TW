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

export function Formulaire() {
  const handleChange = (event) => {
    document.getElementById("jesouhaite").style.visibility = "visible";
  };
  const handleChange2 = (event) => {
    document.getElementById("message").style.visibility = "visible";
  };
  const handleChange3 = (event) => {
    if (event.target.value === 100) {
      setOpen(true);
    }
  };
  const [open, setOpen] = React.useState(false);
  const [slidevalue, setSlidevalue] = React.useState(0);

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
      <h1 style={{ textAlign: "center" }}>Contactez-nous</h1>
      <Grid container spacing={2}>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <div
            style={{
              border: "2px solid black",
              padding: "7px",
              borderRadius: "10px",
              margin: "10px"
            }}
          >
            <Grid container spacing={10} columns={{ xs: 4 }}>
              <Grid item xs={1}>
                <TextField
                  id="Nom"
                  label="Nom"
                  variant="outlined"
                  required="true"
                  inputProps={{
                    style: { fontFamily: "nunito", color: "black" }
                  }}
                />
              </Grid>
              <Grid item xs={1}>
                <TextField
                  id="Prénom"
                  label="Prénom"
                  variant="outlined"
                  required="true"
                  inputProps={{
                    style: { fontFamily: "nunito", color: "black" }
                  }}
                />
              </Grid>
              <Grid item xs={1}>
                <TextField
                  id="E-mail"
                  label="E-mail"
                  variant="outlined"
                  required="true"
                  inputProps={{
                    style: {
                      fontFamily: "nunito",
                      color: "black"
                    }
                  }}
                />
              </Grid>
              <Grid item xs={1}>
                <TextField
                  id="Téléphone"
                  label="Téléphone"
                  variant="outlined"
                  required="true"
                  inputProps={{
                    style: { fontFamily: "nunito", color: "black" }
                  }}
                />
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={2} />
      </Grid>
      <br />

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
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextareaAutosize
              placeholder="Votre message"
              style={{ resize: "none", width: 600 }}
              minRows={15}
            ></TextareaAutosize>
          </Grid>

          <Grid item xs={12}>
            <ThemeProvider theme={theme} id="themeprovider">
              <Slider
                id="slideenvoyer"
                defaultValue={slidevalue}
                color="primary"
                onChange={handleChange3}
                sx={{
                  width: 125,
                  color: "success.dark",
                  "& .MuiSlider-thumb": {
                    borderRadius: "1px"
                  }
                }}
              />
            </ThemeProvider>
          </Grid>
        </Grid>
      </div>
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
    </>
  );
}
