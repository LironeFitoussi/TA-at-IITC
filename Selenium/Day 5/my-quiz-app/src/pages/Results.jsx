// src/pages/Results.jsx

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Typography, Card, CardContent } from "@mui/material";
import { QUIZ_QUESTIONS } from "../data/quizData";

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();

  // userAnswers: { 1: "A", 2: "B", ... }
  const { userAnswers } = location.state || { userAnswers: {} };

  // Calculate the score
  let score = 0;
  QUIZ_QUESTIONS.forEach((q) => {
    if (userAnswers[q.id] === q.answer) {
      score++;
    }
  });

  // If userAnswers is not provided (e.g. direct access), navigate back
  if (!userAnswers || Object.keys(userAnswers).length === 0) {
    return (
      <Box sx={{ textAlign: "center", marginTop: 4 }}>
        <Typography variant="h5">No answers found. Please take the quiz first.</Typography>
        <Button 
          variant="contained" 
          onClick={() => navigate("/")}
          sx={{ marginTop: 2 }}
        >
          Go to Quiz
        </Button>
      </Box>
    );
  }

  // Show each question with correct/incorrect
  return (
    <Box sx={{ maxWidth: 800, margin: "0 auto", padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Quiz Results
      </Typography>

      <Typography variant="h6" gutterBottom>
        Your Score: {score} / {QUIZ_QUESTIONS.length}
      </Typography>

      {QUIZ_QUESTIONS.map((item) => {
        const userAnswer = userAnswers[item.id] || "";
        const isCorrect = userAnswer === item.answer;
        return (
          <Card 
            key={item.id} 
            sx={{ marginBottom: 2, borderColor: isCorrect ? "success.light" : "error.light" }} 
            variant="outlined"
          >
            <CardContent>
              <Typography variant="subtitle1" gutterBottom>
                {`Question ${item.id}: ${item.question}`}
              </Typography>
              <Typography variant="body2" color={isCorrect ? "green" : "red"}>
                Your answer: {userAnswer || "No Selection"}
              </Typography>
              {!isCorrect && (
                <Typography variant="body2" color="textPrimary">
                  Correct answer: {item.answer}
                </Typography>
              )}
            </CardContent>
          </Card>
        );
      })}

      <Button 
        variant="contained" 
        onClick={() => navigate("/")}
      >
        Retake Quiz
      </Button>
    </Box>
  );
}
