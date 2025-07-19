import * as React from "react";
import { Avatar } from "@mui/material";
import Stack from "@mui/material/Stack";
import AvatarGroup from "@mui/material/AvatarGroup";

const DUMMY_USERS = [
  {
    name: "Remy Sharp",
    url: "https://cloudcommercepro.com/wp-content/uploads/2022/06/dummy-customer.jpg",
  },
  {
    name: "Travis Howard",
    url: "https://cibs.lu/wp-content/uploads/2014/02/client-11.jpg",
  },
  {
    name: "Cindy Baker",
    url: "https://haamc.com/wp-content/uploads/2023/09/client-dummy-Google-Search-1.png",
  },
];

export default function ImageAvatars() {
  const getIntials = (fullname) => {
    const splittedName = fullname.split(" ");

    let shortName = "";
    splittedName.forEach((str) => {
      shortName += str[0];
    });

    return shortName;
  };

  return (
    <AvatarGroup max={2}>
      {DUMMY_USERS.map((user) => (
        <Avatar
          sx={{
            width: "20vw",
            height: "20vw",
          }}
          key={user.name}
          alt={user.name}
          src={user.url}
          variant="square"
        >
          {getIntials(user.name)}
        </Avatar>
      ))}
    </AvatarGroup>
  );
}
