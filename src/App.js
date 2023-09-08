import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Container, CssBaseline, Button, ThemeProvider } from "@mui/material";
import theme from './theme'; // Assurez-vous que le chemin est correct

const mapStyles = {
  height: "50vh",
  width: "100%"
};

const defaultCenter = {
  lat: 48.8566, 
  lng: 2.3522
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={13}
              center={defaultCenter}
            />
          </LoadScript>
          <Button variant="contained" color="primary">
            Mon Bouton
          </Button>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
