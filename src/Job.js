import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar} from '@mui/material';
import img1 from './assets/appleIcon.jpg';
import {Grid} from '@mui/material';
import {Divider} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';



function Job(props) {

  const onClick = () => {
    props.setName(props.job)
  }

return ( 
<Card  onClick={onClick} sx={{marginBottom:5}}>
      <CardContent>
          <Grid container spacing={0}>
            <Grid item xs={1.5}>
              <Avatar src={props.icon} />
            </Grid>
            <Grid item xs={7}>
              <Typography color="textSecondary" >
                  {props.company}
              </Typography>
            </Grid >
              <Grid item xs={3}>
                <Button variant="contained"  color="success">
                  {props.role}
                </Button>
              </Grid>
        <Grid item xs={1.5}>
          </Grid>
          <Grid rowSpacing={11} item xs={10}>
            <Typography variant="h5" >
              {props.job}
            </Typography>
          </Grid>
          <Grid item xs={1.5}></Grid>
          <Grid item xs={4}>
            <Typography color="green">
              {props.posted}
            </Typography>
          </Grid>
          <Grid >
            <LocationOnIcon></LocationOnIcon>
          </Grid>
              <Grid item xs={5}>
            <Typography color="grey">
              {props.location}
            </Typography>
          </Grid>

          <Grid item xs={1.5}></Grid>
          <Grid item xs={6}>
            <Typography color="grey">
             {props.salary}
            </Typography>
          </Grid>
        
        </Grid>

     
      </CardContent>
      <Divider variant="middle" />

      <CardActions>
    
      {props.skills.map(skill=>(
           <Button variant="contained" disabled>
           {skill}
       </Button>
      ))}
      </CardActions>
   
    </Card>
  )
}

export default Job