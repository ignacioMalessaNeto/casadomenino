import { Box, Button, Link } from "@mui/material"
import ModalPagamento from '../ModalPagamento';
import { useState } from 'react';
import iconFacebook from '../../assets/facebook.svg';
import iconInstagram from '../../assets/instagram.svg';
import iconTelegram from '../../assets/telegrama.svg';
import iconTwitter from '../../assets/twitter.svg';
import iconWhatsapp from '../../assets/whatsapp.svg';
import iconYoutube from '../../assets/youtube.svg';
import iconHOme from '../../assets/IconHome.png'


function HeaderFixed() {
    const [openModal, setOpenModal] = useState(false);
    

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <Box sx={{ width: "100%", height: "100px", background: "white", display: "flex", justifyContent: "space-between",alignItems: "center",  }}>
         
            <Link to="/" sx={{ marginLeft: "20px"}}>
                <Button>
                <a href=""><img src={iconHOme} alt="Botão para o início" /></a>
                </Button>
            </Link>
            

            <Box sx={{ display: "flex", gap: "20px", height: "50px"}}>
            <Link>
                <Button>
                <a href="https://www.facebook.com/CasadoMeninoJesusdePraga" target="_blank"><img src={iconFacebook} alt="botão do facebook" /></a>
                </Button>
            </Link>
            <Link>
                <Button>
                <a href="https://www.instagram.com/casadomeninojesusdepraga/" target="_blank"><img src={iconInstagram} alt="botão do instagram" /></a>
                </Button>
            </Link>
            <Link>
                <Button>
                <a href="https://t.me/CasadoMeninoJesusdePraga#" target="_blank"><img src={iconTelegram} alt="botão do telegram " /></a>
                </Button>
            </Link>
            <Link>
                <Button>
                <a href="https://twitter.com/casadomenino" target="_blank"><img src={iconTwitter} alt="botão do twitter" /></a>
                </Button>
            </Link>
            <Link>
                <Button>
                <a href="https://api.whatsapp.com/send/?phone=5551995728124&text&type=phone_number&app_absent=0" target="_blank"><img src={iconWhatsapp} alt="botão do whatsapp" /></a>
                </Button>
            </Link>
            <Link>
                <Button>
                <a href="https://www.youtube.com/@CMJP2010" ><img src={iconYoutube} alt="botão do Youtube" /></a>
                </Button>
            </Link>


            
            <Button sx={{ padding: "10px" }} variant="contained" size="small" color="primary" onClick={handleOpenModal}>
                Doar
            </Button>
            <Button sx={{ padding: "10px", marginRight: "80px" }} variant="contained" size="small" color="primary" onClick={handleOpenModal}>
                Doar por boleto
            </Button>
            <ModalPagamento open={openModal} onClose={handleCloseModal} />

            </Box>
        </Box>
    )
}

export default HeaderFixed