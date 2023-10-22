import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { click } from '@testing-library/user-event/dist/click';

type def={
    subject?:string,
    number?:string,
    description?:string
    
}
export default function Cards(props:def) {
  return (
    <Card style={{boxShadow:"2px 2px 3px darkmagenta"}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h2 className='text-bold py-2 px-3' style={{color:"blueviolet"}}>{props.subject}</h2>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <h6 className='text-bold py-2 px-3'>{props.number}</h6>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <h6 className='text-bold py-2 px-3'>description = {props.description}</h6>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
}