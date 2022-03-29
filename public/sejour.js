import * as React from 'react';
import ReactDOM from 'react-dom';


import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import MoreVertIcon from '@mui/icons-material/MoreVert';


const container = document.getElementById('root');
//peut etre changer en plusieur card avec "learn more" pour chaque image??




function Test(){
  
  
  
  return (
    
    <Box sx={{ flexGrow: 1 }}>

<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>

        <Card sx={{ maxWidth: 760 }}>
          <CardHeader
            
            title="Cathédrale d'albi"
           
          />
          <CardMedia
            component="img"
            height="194"
            image="./images/ALBI.jpg"
            alt="cathédrale "
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            La cathédrale Saint Cécile est la plus grande cathédrale de briques au monde. 
            Majestueuse et imposante elle est visible de partout quand on arrive à Albi.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>

            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>learn more</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
            
           
          </CardActions>
          
        </Card>
        </Grid>

        <Grid item xs={6}>
        <Card sx={{ maxWidth: 760 }}>
          <CardHeader
            
            title="Musée Toulouse-Lautrec"
          />
          <CardMedia
            component="img"
            height="194"
            image="./images/museeT.jpg"
            alt="Musée Toulouse-Lautrec"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            Le musée Toulouse-Lautrec est situé dans le Palais de la Berbie,
             au coeur de la Cité épiscopale albigeoise classée au Patrimoine Mondial de l'Humanité. 
             Il abrite la plus importante collection publique au monde consacrée à Henri de Toulouse-Lautrec. 
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>

            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>learn more</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
            
           
          </CardActions>
          
        </Card>
        </Grid>

        <Grid item xs={6}>

        <Card sx={{ maxWidth: 760 }}>
          <CardHeader
            
            title="Musée de la mode"
           
          />
          <CardMedia
            component="img"
            height="194"
            image="./images/museeM.jpg"
            alt="musee de la mode "
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            Riche de quelques milliers de pièces, la collection est présentée selon des thèmes différents 
            tous les deux ans.
            Chaque exposition propose de découvrir une centaine de pièces.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>

            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>learn more</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
            
           
          </CardActions>
          
        </Card>
        </Grid>


        </Grid>
        </Box>

        
      );
    }


  



//ATTENTION : SI SUR MUI VOUS AVEZ document.querySelector('#app') MODIFIEZ AVEC ROOT
ReactDOM.render(<Test />, document.querySelector('#root'));
