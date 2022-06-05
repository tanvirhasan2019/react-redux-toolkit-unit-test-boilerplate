
import Counter from "./component/Counter"
import Users from "./component/Users";
import Header from "./component/header/Header"
import Box from "@mui/material/Box"
import StickyFooter from "./component/footer/StickyFooter";
import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const PaperCom = styled(Paper)({
  padding: '16px',
  variant: 'outlined',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor : '#fafafa'
});

function App() {
  return (
    <div>
      <Header />
      <CssBaseline />
      <Container maxWidth="md">
      <Box sx={{ flexGrow: 1, mt: 2 }}>
          <Grid justifyContent="center"
            alignItems="flex-start" container spacing={2}>
            <Grid item md={12}>
              <PaperCom><Counter /></PaperCom>
            </Grid>
            <Grid item md={12}>
              <PaperCom><Users /></PaperCom>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <StickyFooter />
    </div>
  );
}

export default App;
