import React from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';

const Input = styled(MuiInput)`
  width: 48px;
`;

export function Formulaire() {

    const [value, setValue] = React.useState(18);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 18) {
        setValue(18);
        } else if (value > 100) {
        setValue(100);
        }
    };

    return(
        <>
        <h1 style={{textAlign: 'center'}}>Contactez-nous</h1>
        <TextField 
            id="Nom"
            label="Nom"
            variant="outlined"
            inputProps={{ style: {fontFamily: 'nunito', color: 'black'}}}
        />
        <br /><br />
        <TextField 
            id="Prénom"
            label="Prénom"
            variant="outlined"
            inputProps={{ style: {fontFamily: 'nunito', color: 'black'}}}
        />
        <br /><br />
        <Box sx={{ width: 250 }}>
            <Grid container spacing={3} alignItems="center">
                <Grid item>
                    <Typography>Âge</Typography>
                </Grid>
                <Grid item xs>
                <Slider
                    value={typeof value === 'number' ? value : 18}
                    onChange={handleSliderChange}
                    aria-labelledby="input-slider"
                    min={18}
                />
                </Grid>
                <Grid item>
                <Input
                    value={value}
                    size="small"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    inputProps={{
                    step: 1,
                    min: 18,
                    max: 100,
                    type: 'number',
                    'aria-labelledby': 'input-slider',
                    }}
                />
                </Grid>
            </Grid>
        </Box>
        </>
    );
}4