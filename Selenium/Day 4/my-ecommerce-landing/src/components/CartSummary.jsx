import { useState } from "react";
import {
  Box,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";

export default function CartSummary() {
  const [showCart, setShowCart] = useState(false);

  // Hard-coded items
  const cartItems = [
    { id: 1, name: "Purple T-Shirt", quantity: 1, price: 29.99 },
    { id: 2, name: "Black Sneakers", quantity: 2, price: 59.99 },
  ];

  // Intentional mismatch of total
  const total = 9999; // obviously incorrect total for testing

  return (
    <Box sx={{ mb: 4, textAlign: "center" }}>
      <Button variant="contained" onClick={() => setShowCart(!showCart)}>
        {showCart ? "Hide Cart" : "Show Cart"}
      </Button>
      {showCart && (
        <Box sx={{ mt: 2, mx: "auto", width: "80%" }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Cart Summary
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Price (each)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>${item.price}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={2} align="right">
                  <strong>Total:</strong>
                </TableCell>
                <TableCell>${total}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      )}
    </Box>
  );
}
