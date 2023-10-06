import React from 'react';
import {
  Box,
  Typography,
  Link,
  ThemeProvider,
  createTheme,
  Grid,
  IconButton,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF0000', // Red color
    },
    secondary: {
      main: '#FFFFFF', // White color
    },
  },
});

const Footer = () => (
  <ThemeProvider theme={theme}>
    <Box mt="80px" bgcolor={theme.palette.secondary.main} p="20px" color={theme.palette.primary.main}>
      <Typography variant="h6" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box display="flex" alignItems="center" mb="10px">
            <PhoneIcon />
            <Typography variant="body1" ml="5px">
              Call us: <Link href="tel:+91">9667581490</Link>
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <EmailIcon />
            <Typography variant="body1" ml="5px">
              Email us: <Link href="mailto:ashokkandpal845@gmail.com">ashokkandpal845</Link>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" color="black">
            Follow Us
          </Typography>
          <Box display="flex" alignItems="center" mb="5px">
            <IconButton href="https://twitter.com/AshokKandpal7" target="_blank">
              <TwitterIcon />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/ashok-kandpal/" target="_blank">
              <LinkedInIcon />
            </IconButton>
            {/* Add more social media icons as needed */}
          </Box>
          <Typography variant="h6" color="textSecondary" fontSize="20px" sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>
            Stay connected with us on social media for the latest updates, promotions, and fitness tips!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </ThemeProvider>
);

export default Footer;
