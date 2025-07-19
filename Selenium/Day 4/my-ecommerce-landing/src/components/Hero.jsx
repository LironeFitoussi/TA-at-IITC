import { Box, Typography, Button, TextField } from "@mui/material";
import { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  // Intentionally buggy subscription logic
  const handleSubscribe = () => {
    if (!email.includes("@")) {
      setError(true);
      console.error("Email format error (Intentional Bug).");
      return;
    }
    alert(`Subscribed with ${email}! (But not really, it's just a mock.)`);
    setEmail("");
    setError(false);
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "40px 20px",
        backgroundColor: "#F3E5F5",
        color: "#4A148C",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Welcome to MyEcommerce
      </Typography>
      <Typography variant="subtitle1">
        Find the best deals on your favorite items.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <TextField
          label="Enter your email"
          variant="outlined"
          sx={{ mr: 2 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={error}
          helperText={error ? "Invalid email address" : ""}
        />
        <Button variant="contained" onClick={handleSubscribe}>
          Subscribe
        </Button>
      </Box>
    </Box>
  );
}
