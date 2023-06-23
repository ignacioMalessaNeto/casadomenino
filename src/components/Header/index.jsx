import HeaderFixed from '../HeaderFixed';
import React, { useState, useEffect } from 'react';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import { MenuItem, Button, Container, Menu, Typography, IconButton, Toolbar, Box, AppBar } from '@mui/material';
import { Link } from 'react-router-dom';


function Header() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setIsFixed(currentPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  }; 

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <>
      <HeaderFixed />
      <AppBar
        position="sticky"
        top={isFixed ? '0' : 'auto'}
        sx={{ zIndex: 10 }}
        className={isFixed ? 'fixed-appbar' : ''}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              CMJP
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
             <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <Link to="/">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography sx={{color: "blue"}} textAlign="center" fontWeight={"400"}>Home</Typography>
                </MenuItem>
                </Link>
                <Link to="/gerar-cobranca">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Gerar Boleto</Typography>
                </MenuItem>
                </Link>
                <Link to="/gerar-cobranca-em-lote">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Gerar boleto em lote</Typography>
                </MenuItem>
                </Link>
                <Link to="/gerenciar-cobranca">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Gerenciar cobrança</Typography>
                </MenuItem>
                </Link>
              
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CMJP
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to="/">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
            >                
              Home
            </Button>
            </Link>
            <Link to="/gerar-cobranca">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Gerar boleto
              </Button>
            </Link>
            <Link to="/gerar-cobranca-em-lote">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Gerar boleto em lote
              </Button>
            </Link>
            <Link to="/gerenciar-cobranca">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Gerenciar cobrança
              </Button>
            </Link>
          </Box>          
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
}

export default Header;