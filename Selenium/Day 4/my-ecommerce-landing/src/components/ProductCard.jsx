import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
    Rating,
    TextField,
    List,
    ListItem,
    ListItemText,
  } from "@mui/material";
  import { useState } from "react";
  
  export default function ProductCard({ product }) {
    const [reviews, setReviews] = useState(product.reviews || []);
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState(product.rating);
    const [showReviewForm, setShowReviewForm] = useState(false);
  
    // Intentional bug: sometimes it doesn’t update rating properly
    const handleAddReview = () => {
      if (!reviewText.trim()) {
        console.error("Review text cannot be empty (Bug).");
        return;
      }
      // Update reviews
      setReviews([...reviews, reviewText]);
      // Suppose we forget to clear the input sometimes
      // setReviewText("");
      setReviewText(reviewText); // bug: doesn't clear it
      // Randomly messing up rating
      setRating((prev) => prev + 1); // bug: always increments rating
    };
  
    return (
      <Card sx={{ width: 300, margin: "1rem", position: "relative" }}>
        <CardMedia
          component="img"
          height="200"
          image={product.img}
          alt={product.name}
          // Potential onError for broken images
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/300?text=Image+Not+Found";
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Price: ${product.price}
          </Typography>
  
          <Rating name="product-rating" value={rating} readOnly />
  
          <List sx={{ mt: 1, maxHeight: 100, overflow: "auto" }}>
            {reviews.map((r, idx) => (
              <ListItem key={idx}>
                <ListItemText primary={r} />
              </ListItem>
            ))}
          </List>
        </CardContent>
        <CardActions>
          {/* Label is "Add to Cart" but doesn't do anything */}
          <Button size="small" variant="outlined">
            Add to Cart
          </Button>
          <Button size="small" onClick={() => setShowReviewForm(!showReviewForm)}>
            {showReviewForm ? "Close" : "Review"}
          </Button>
        </CardActions>
  
        {showReviewForm && (
          <CardContent sx={{ pt: 0 }}>
            <TextField
              label="Add a review"
              variant="outlined"
              size="small"
              fullWidth
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              sx={{ mb: 1 }}
            />
            <Button variant="contained" size="small" onClick={handleAddReview}>
              Submit
            </Button>
          </CardContent>
        )}
      </Card>
    );
  }
  