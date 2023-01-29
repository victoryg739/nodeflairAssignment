import React, { useState } from 'react'
import Card from '@mui/material/Card';
function JobDescription({name}) {


  return (
    <Card sx={{height:"100%"}} >{name}</Card>
  )
}

export default JobDescription