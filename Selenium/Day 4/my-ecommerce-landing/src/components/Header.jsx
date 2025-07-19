import { AppBar, Toolbar, Typography, Button, Box, TextField, Switch } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

// Custom styled switch (optional)
const ThemeSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#fff",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.2)",
    },
  },
  "& .MuiSwitch-track": {
    backgroundColor: "#ccc",
  },
}));

export default function Header({ onSearch, onThemeToggle, darkMode }) {
  const [searchValue, setSearchValue] = useState("");

  // Intentionally mislabeled button + console error
  const handleBrokenButton = () => {
    // This will fail because notDefinedVar is undefined
    console.log(notDefinedVar);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: darkMode ? "#212121" : "#4A148C" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          MyEcommerce
        </Typography>

        {/* Search field */}
        <Box sx={{ mr: 2 }}>
          <TextField
            size="small"
            placeholder="Search items..."
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
              onSearch(e.target.value);
            }}
            sx={{ backgroundColor: "#fff", borderRadius: 1 }}
          />
        </Box>

        {/* Theme Toggle */}
        <ThemeSwitch checked={darkMode} onChange={onThemeToggle} />

        {/* Notice the label says "Cart" but it actually logs "Search clicked!" */}
        <Button color="inherit" onClick={() => console.log("Search clicked!")}>
          Cart
        </Button>

        {/* Broken Button */}
        <Button color="inherit" onClick={handleBrokenButton}>
          Broken Action
        </Button>
      </Toolbar>
    </AppBar>
  );
}
