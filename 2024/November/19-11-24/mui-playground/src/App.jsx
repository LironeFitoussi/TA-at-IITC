import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

// MUI Imports
import { TextField, Avatar } from "@mui/material";

const DUMMY_USERS = [
  { id: 2352345, fullName: "Yossef Sabag", url: "https://friendsmerchandise.com/wp-content/uploads/2021/09/friends-smelly-cat-enamel-pin-1.png" },
  { id: 3452354345, fullName: "Elchanan Chen", url: ""},
  { id: 23475468, fullName: "Eden Shabi", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s" }
]

const getInitial = (fullName) => {
  const nameArray = fullName.split(" ")
  return nameArray[0][0].toUpperCase() + nameArray[1][0].toUpperCase()
}

function App() {
  return (
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

        <div>
            {DUMMY_USERS.map((user) => {
              return <div key={user.id}>
                <Avatar src={user.url} sx={{ width: "5vw", height: "5vw" }}>
                  {/* {getInitial(user.fullName)} */}
                </Avatar>
                <p>{user.fullName}</p>
              </div>
            })}
        </div>
        {/* <TextField
          sx={{
            backgroundColor: "#0d8c66",
            margin: "3rem",
            placeholder: '#d11111',
            input: {
              color: "#d11111",
            }
          }}
          label="ביבי המלך"
          variant="filled"
        /> */}
      </div>
  );
}

export default App;
