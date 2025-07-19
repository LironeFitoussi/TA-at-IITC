// src/components/QuestionCard.jsx

import React from "react";
import { Card, CardContent, Typography, Radio, RadioGroup, FormControlLabel } from "@mui/material";

export default function QuestionCard({ questionItem, selectedOption, onOptionSelect }) {
  const { id, question, options } = questionItem;

  // Handle selection change
  const handleChange = (event) => {
    onOptionSelect(id, event.target.value);
  };

  return (
    <Card variant="outlined" sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {`Question ${id}: ${question}`}
        </Typography>

        <RadioGroup value={selectedOption || ""} onChange={handleChange}>
          {options.map((opt, idx) => {
            // Example: "A. Some text" — we can separate letter from text if we want
            // or just store the entire text and map it.
            const letter = opt.charAt(0); // 'A', 'B', etc.
            return (
              <FormControlLabel
                key={idx}
                value={letter} // 'A', 'B', 'C', ...
                control={<Radio />}
                label={opt}
              />
            );
          })}
        </RadioGroup>
      </CardContent>
    </Card>
  );
}
