import { Button,  CardActions,  Box, Card, CardContent, Typography, Link} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Cards() {

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
        <Box sx={{ display: "flex", gap: "15px", flexWrap: "wrap", justifyContent: 'center' }}>
            {campanhas.map((data) => (
                <Card key={data.attributes.id}>
                    <CardContent sx={{ maxWidth: 400, display: "flex", flexDirection: "column" }}>
                        <img src={`https://strapi-production-c201.up.railway.app${data.attributes.imagem.data.attributes.formats.medium.url}`} />
                        <Typography gutterBottom variant="h6" component="div">{data.attributes.titulo}</Typography>
                        <Typography variant="body1" >{data.attributes.descricao}</Typography>
                    </CardContent>
                    <CardActions sx={{ display: "flex", justifyContent: 'space-between' }}>
                        <Button variant="contained" size="small" color="primary">
                            <Link href={data.attributes.link_pagamento} color="inherit" underline="none" >Doar</Link>
                        </Button>
                    </CardActions>
                </Card>
            ))}


        </Box>
    )
}

export default Cards;