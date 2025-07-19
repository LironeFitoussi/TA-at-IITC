import { useEffect, useState, createContext } from "react";
import { Container, Box, Typography, Button, Alert, CircularProgress } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import FaqSection from "./components/FaqSection";
import CartSummary from "./components/CartSummary";
import ContactForm from "./components/ContactForm";
import { fetchProducts } from "./mockApi";

// Optional: create a context to share theme data
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Light or dark theme
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#4A148C",
      },
      secondary: {
        main: "#9c27b0",
      },
    },
  });

  useEffect(() => {
    setLoading(true);
    setFetchError("");
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Mock API error:", err);
        setFetchError(err.message);
        setLoading(false);
      });
  }, []);

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  // Filter products by search
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ColorModeContext.Provider value={{ toggleColorMode: handleThemeToggle }}>
      <ThemeProvider theme={theme}>
        <Box sx={{ backgroundColor: darkMode ? "#121212" : "#fff", minHeight: "100vh" }}>
          <Header
            onSearch={setSearchQuery}
            onThemeToggle={handleThemeToggle}
            darkMode={darkMode}
          />
          <Hero />

          <Container sx={{ py: 4 }}>
            <Box sx={{ textAlign: "center", mb: 3 }}>
              <Typography variant="h4">Featured Products</Typography>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                (Loaded via mock API, sometimes fails)
              </Typography>
            </Box>

            {loading && (
              <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
                <CircularProgress />
              </Box>
            )}

            {fetchError && (
              <Alert severity="error" sx={{ mb: 2 }}>
                Failed to load products: {fetchError}
              </Alert>
            )}

            <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
              {!loading &&
                !fetchError &&
                filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </Box>

            {/* Button that triggers an Alert */}
            <Box sx={{ textAlign: "center", mt: 4 }}>
              <Button variant="contained" color="secondary" onClick={handleShowAlert}>
                Show Special Alert
              </Button>
            </Box>

            {/* MUI Alert triggered by user interaction */}
            {showAlert && (
              <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
                <Alert severity="success" onClose={() => setShowAlert(false)} sx={{ width: "50%" }}>
                  Congratulations! You found a special offer!
                </Alert>
              </Box>
            )}

            {/* FAQ Section */}
            <FaqSection />

            {/* Cart Summary */}
            <CartSummary />

            {/* Contact Form */}
            <ContactForm />
          </Container>

          {/* Footer Section */}
          <Box
            sx={{
              backgroundColor: darkMode ? "#333" : "#4A148C",
              color: "#fff",
              py: 3,
              mt: 5,
              textAlign: "center",
            }}
          >
            <Typography variant="body1">
              &copy; {new Date().getFullYear()} MyEcommerce - All rights reserved.
            </Typography>
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
