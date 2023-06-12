import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import UserContext from '../../components/Context';
import { Box, Card } from '@mui/material';


export function Home() {
  const { user } = useContext(UserContext);

  const [campanhas, setCampanhas] = useState([]);
  
  useEffect(() => {
      try {
        axios.get('https://strapi-production-c201.up.railway.app/api/campanhas?populate=*').then((response) => {
        setCampanhas(response.data.data)
        console.log(response.data.data)
      })
      } catch (error) {
        console.log(error);
      }

  }, []);


  return (
    <Box sx={{diplay: "flex", gap: "50px", flexWrap: "Wrap"}}>
      <p>Olá {user}</p>
      <p>Home</p>

      {campanhas.map((data) => (
        <Card sx={{ maxWidth: 600, display: "flex", flexDirection: "column" }} key={data.attributes.id}>
          <h1>{data.attributes.titulo}</h1>
          <p>{data.attributes.descricao}</p>          
        </Card>
      ))}


    </Box>
  );
}
