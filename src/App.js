import React, { useState } from 'react';
import Job from './Job';
import datas from './assets/data.js';
import JobDescription from './JobDescription';
import { Grid } from '@mui/material';
// Create state: name, setName
// OnClick -> update name
// If name change -> automatically render component


function App() {


  const [name, setName] = useState(datas[0].job)
  console.log(name);
  // onClick function
  // onClick -> update name 
    return (
      <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          {datas.map( (data) => 
           <Job
           company= {data.company}
           job= {data.job}
           role= {data.role}
           posted= {data.posted}
           location= {data.location}
           salary= {data.salary}
           icon = {data.icon}
           setName={setName}
           skills={data.skills}
         />
      
          )}
        </Grid>
        <Grid item xs={6} 	sx={{ display: { xs: 'none', md: 'block' } }}>
          <JobDescription name={name}/>
        </Grid>
      </Grid>            

      </div>
  )
}

export default App;