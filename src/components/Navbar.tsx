import React from 'react';
import { AppBar, Toolbar, Button, Box, Avatar, Stack } from '@mui/material';
import { Link } from 'gatsby';

const pages = [
    {
      name: 'My Portfolio',
      link: '/',
    },
    {
      name: 'My CV',
      link: '/cv',
    },
    // {
    //   name: 'My Contact',
    //   link: '/contact',
    // }
  ];

const Navbar: React.FC<{ name: string }> = ({ name }) => {
  return (
    <AppBar 
        position="fixed"
        elevation={0}
        sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            color: 'white'
        }}
    >
      <Toolbar disableGutters>
        <img src={"/favicon.png"} alt={"logo"}
          width={40}
          height={40}
          style={{ marginInline: '16px' }}
        />
        <Stack spacing={0} direction="row">
          {pages.map((item, index) => (
            <Button
              key={item.name}
              component={Link}
              to={item.link}
              variant={name === item.name ? 'outlined' : 'text'}
              sx={{ 
                color: 'black', 
                fontWeight: 'bold',
                marginRight: '8px'
              }}
            >
              {item.name}
            </Button>
          ))}
        </Stack>
        <Box sx={{ flexGrow: 1 }} />
        <Avatar
          alt="Rizky"
          src="/avatar.jpg"
          style={{ marginInline: '16px' }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;