import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/Avatar.jpg"
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import theme from "../../../../theme";
import { AnimatedBackground } from "../../../../components/AnimetadBackground/AnimatedBackground";




const Hero =() => {
    
    const StyledHero = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display:"flex",
        alignItems: "center",
    }))

    const StyledImage = styled("img")(() => ({
        width: "80%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}` ,
    }))


    return (
      <>
        <StyledHero>
            <Container maxWidth="lg">
            <Grid container spacing={2}>
            <   Grid item xs={12} md={4}>
                <Box position="relative">
                    <Box position="absolute" width={"150%"} top={-100} right={0}>
                        <AnimatedBackground />
                    </Box>
                    <Box position="relative" textAlign="center">
                    <StyledImage src={Avatar} />
                    </Box>
                </Box>
                
                </Grid>
                <Grid item xs={12} md={7}>
                    <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Miguel Soares</Typography>
                    <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm a junior developer</Typography>
                    <Grid container display='flex' justifyContent='center' spacing={3} pt={3}>
                        <Grid item xs={12} md={4} display="flex" justifyContent="center" >
                            <StyledButton>
                            <DownloadOutlinedIcon/>
                            <Typography> Download CV</Typography>
                            </StyledButton>
                        </Grid>
                        <Grid item xs={12} md={4} display="flex" justifyContent="center">
                            <StyledButton>
                                <EmailOutlinedIcon/>
                                <Typography>Contact me</Typography>
                            </StyledButton>
                        </Grid>
                    </Grid>
                </Grid>      
            </Grid>

            </Container>
        </StyledHero>
      </>
    )
  }
  
  export default Hero
  