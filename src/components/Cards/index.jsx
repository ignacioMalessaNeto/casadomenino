import { useEffect, useState } from 'react';
import { Button, CardActions, Box, Card, CardContent, Typography } from '@mui/material';
import ModalPagamento from '../ModalPagamento';
import axios from 'axios';

function Cards() {
    const [openModal, setOpenModal] = useState(false);
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

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <Box sx={{ width: "100%",display: "flex", gap: "15px", flexWrap: "wrap", justifyContent: 'center' }}>
            {campanhas.map((data) => (
                <Card elevation={0} key={data.attributes.id}>
                    <CardContent sx={{ maxWidth: "350px", display: "flex", flexDirection: "column" }}>
                        <button onClick={handleOpenModal} style={{ border: 'none', padding: 0, background: 'none' }}>
                            <img src={`https://strapi-production-c201.up.railway.app${data.attributes.imagem.data.attributes.formats.medium.url}`} style={{ width: '100%', height: 'auto' }} />
                        </button>
                        <Typography variant="h5" >{data.attributes.titulo}</Typography>
                        <Typography variant="body1" >{data.attributes.descricao}</Typography>
                    </CardContent>
                    <CardActions sx={{ display: "flex" }}>
                        <Button sx={{ padding: "10px"}} variant="contained" size="small" color="primary" onClick={handleOpenModal}>
                            Doar
                        </Button>
                        <Button sx={{ padding: "10px"}} variant="contained" size="small" color="primary" onClick={handleOpenModal}>
                            Doar por boleto
                        </Button>
                    </CardActions>
                </Card>
            ))}
            

            <ModalPagamento open={openModal} onClose={handleCloseModal} />
        </Box>
    )
}

export default Cards;
