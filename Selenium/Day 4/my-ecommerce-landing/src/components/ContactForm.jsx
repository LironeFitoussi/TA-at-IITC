import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Intentionally broken validation
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 3 || !email.includes("@") || message.length < 10) {
      console.error("Validation Error (intentional).");
      // Still sets submitted to true even if there's an error
      setSubmitted(true);
      return;
    }
    // Instead of a real submission, just pretend
    alert(`Form submitted by ${name}, email: ${email}`);
    setSubmitted(true);
  };

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 400,
          margin: "0 auto",
        }}
      >
        <TextField
          label="Name"
          variant="outlined"
          sx={{ mb: 2 }}
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={submitted && name.length < 3}
          helperText={
            submitted && name.length < 3 ? "Name must be at least 3 characters" : ""
          }
        />

        <TextField
          label="Email"
          variant="outlined"
          sx={{ mb: 2 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={submitted && !email.includes("@")}
          helperText={submitted && !email.includes("@") ? "Invalid email address" : ""}
        />

        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          sx={{ mb: 2 }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          error={submitted && message.length < 10}
          helperText={
            submitted && message.length < 10
              ? "Message must be at least 10 characters"
              : ""
          }
        />

        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </Box>
  );
}
