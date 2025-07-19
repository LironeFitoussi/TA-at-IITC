// src/pages/Quiz.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import QuestionCard from "../components/QuestionCard";
import { QUIZ_QUESTIONS } from "../data/quizData";

export default function Quiz() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({}); 
  // answers = { 1: "A", 2: "B", ... } keyed by question id

  // Handler for when a user selects an option
  const handleOptionSelect = (questionId, chosenOption) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: chosenOption,
    }));
  };

  // On submission, navigate to /results with the answers
  const handleSubmit = () => {
    navigate("/results", { state: { userAnswers: answers } });
  };

  return (
    <Box sx={{ maxWidth: 800, margin: "0 auto", padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Selenium Quiz
      </Typography>

      {QUIZ_QUESTIONS.map((item) => (
        <QuestionCard
          key={item.id}
          questionItem={item}
          selectedOption={answers[item.id]}
          onOptionSelect={handleOptionSelect}
        />
      ))}

      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleSubmit} 
        sx={{ marginTop: 2 }}
      >
        Submit Answers
      </Button>
    </Box>
  );
}
