import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import UserContext from '../../components/Context';
import { Box, Card, CardContent } from '@mui/material';


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
    <Box sx={{display: "flex", gap: "15px", flexWrap: "wrap", justifyContent: 'center'}}>
      {campanhas.map((data) => (
        <Card key={data.attributes.id}>
          <CardContent sx={{ maxWidth: 400, display: "flex", flexDirection: "column" }} >
          <img src={`https://strapi-production-c201.up.railway.app${data.attributes.imagem.data.attributes.formats.medium.url}`} alt="" />
          <h1>{data.attributes.titulo}</h1>
          <p>{data.attributes.descricao}</p>
          </CardContent>        
        </Card>
      ))}


    </Box>
  );
}
