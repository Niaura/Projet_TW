import React from 'react';

import ReactDOM from 'react-dom';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import test from './images/albi.jpg';

const container = document.getElementById('root');
//peut etre changer en plusieur card avec "learn more" pour chaque image??

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function Test(){
  return (
    <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Les endroit à visiter
      </Typography>

    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
    {itemData.map((item) => (
      <ImageListItem key={item.img}>
        <img
          src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
          srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          alt={item.title}
          loading="lazy"
        />
      </ImageListItem>
    ))}
  </ImageList>
);
</CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
    </React.Fragment>
);
}

const itemData = [
//{
 // img: './images/albi.jpg',
 // title: 'Albi',
//},
{
  img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
  title: 'Burger',
},
{
  img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
  title: 'Camera',
},
{
  img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
  title: 'Coffee',
},
{
  img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
  title: 'Hats',
},
{
  img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
  title: 'Honey',
},
{
  img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
  title: 'Basketball',
},
{
  img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
  title: 'Fern',
},
{
  img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
  title: 'Mushrooms',
},
{
  img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
  title: 'Tomato basil',
},
{
  img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
  title: 'Sea star',
},
{
  img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
  title: 'Bike',
},
];




//ATTENTION : SI SUR MUI VOUS AVEZ document.querySelector('#app') MODIFIEZ AVEC ROOT
ReactDOM.render(<Test />, document.querySelector('#root'));