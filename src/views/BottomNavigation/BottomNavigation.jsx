import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Box from "@mui/material/Box";

import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import Icon from "@mui/material/Icon";
import { Container } from "reactstrap";

function HomeIcon(props) {
  return (
    <SvgIcon>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
export default function LabelBottomNavigation(props) {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container style={{ marginTop: "42%" }}>
      <BottomNavigation
        sx={{ width: 500, margin: "0px auto" }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="Home"
          value="Home"
          onClick={() => {window.location="/"}}
          icon={<HomeIcon sx={{ fontSize: 40 }} />}
        />
        <BottomNavigationAction
          label="Upload"
          onClick={() => {window.location="/upload"}}
          value="Upload"
          icon={
            <Icon
              baseClassName="fas"
              className="fa-plus-circle"
              style={{ color: "#404040" }}
              sx={{ fontSize: 20 }}
            />
          }
        />
        <BottomNavigationAction
          label="likes"
          value="likes"
          onClick={() => {window.location="/notification"}}
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="User"
          onClick={() => {window.location="/users"}}
          value="User"
          icon={<i class="fas fa-user"></i>}
        />
      </BottomNavigation>
    </Container>
  );
}
