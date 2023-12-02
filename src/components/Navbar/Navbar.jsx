
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';

const pages = [
    {
        item: 'Home',
        link: '/'
    },
    {
        item: 'Services',
        link: '/services'
    },
    {
        item: 'Tutorials',
        link: '#'
    },
    {
        item: 'About us',
        link: '#'
    },
    {
        item: 'Sign In',
        link: '/sign-in'
    },
    {
        item: 'All Service',
        link: '/all-services'
    },
    {
        item: 'Purchase Service',
        link: '/purchase-services'
    },
];
const settings = [
    {
        name: 'Dashboard',
        link: "/dashboard"
    },
    {
        name: 'Logout',
        link: ""
    }
];

function ResponsiveAppBar() {
    // const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    // const handleOpenNavMenu = (event) => {
    //     setAnchorElNav(event.currentTarget);
    // };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    // const handleCloseNavMenu = () => {
    //     setAnchorElNav(null);
    // };

    const handleCloseUserMenu = (name) => {
        if (name === "Logout") {
            {
                localStorage.removeItem('loginData')
            }
        }
        console.log("logout");
        setAnchorElUser(null);

    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters className='mx-24'>
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    <Link className='w-16 mr-2'>
                        <img src="https://i.ibb.co/qrBzkns/58641c06-a125-415c-aac1-bdc5525065fe-removebg-preview.png" alt="logo" />
                    </Link>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 5,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        UiCommercial
                    </Typography>

                    {/* mobile menu icon */}
                    {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box> */}
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    {/* mobile logo */}
                    {/* <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
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
                        LOGO
                    </Typography> */}

                    {/* menu items */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page, index) => (
                            <Link
                                key={index}
                                to={page.link}
                            >
                                <Button
                                    // onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page.item}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    {/* User icon */}
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting, index) => (
                                <MenuItem key={index} onClick={() => handleCloseUserMenu(setting.name)} >
                                    <Typography
                                        
                                        textAlign="center"
                                    >
                                        {setting.name}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;

