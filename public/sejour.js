import * as React from 'react';
import ReactDOM from 'react-dom';

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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
//import test from './images/albi.jpg';

const container = document.getElementById('root');
//peut etre changer en plusieur card avec "learn more" pour chaque image??




function Test(){
  return (
    
      <React.Fragment>
       
        <CardHeader
         title=" Cathédrale d'albi"
         />
        <CardMedia
        component="img"
        height="194"
        image="./images/ALBI.jpg"
        alt="Paella dish"
        />
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Cathédrale d'albi text
          </Typography>
          <Typography >
           test
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </React.Fragment>
  );
}

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}




//ATTENTION : SI SUR MUI VOUS AVEZ document.querySelector('#app') MODIFIEZ AVEC ROOT
ReactDOM.render(<Test />, document.querySelector('#root'));
