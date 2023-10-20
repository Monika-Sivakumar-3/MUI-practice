import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import { Mail, Notifications, Tapas } from "@mui/icons-material";
import { useState } from "react";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Searchbar = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  //   borderRadius: theme.shape.borderRadius,
  borderRadius: "10px",
  width: "40%",
}));

const Icons = styled(Box)({
  display: "flex",
  gap: "24px",
  alignItems: "center",
});

// const UserBox = styled(Box)(({ theme }) => ({
//   display: "none",
//   gap: "10px",
//   alignItems: "center",
//   [theme.breakpoint.up("sm")]: {
//     display: "flex",
//   },
// }));

export const Navbar = () => {
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography
          variant="h6"
          component="h1"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Food
        </Typography>
        <Tapas sx={{ display: { xs: "block", sm: "none" } }} />
        <Searchbar>
          <InputBase
            sx={{ color: "text.primary" }}
            color="text.primary"
            placeholder="Search..."
          />
        </Searchbar>
        <Icons>
          <Badge badgeContent={1} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ height: 30, width: 30 }}
            alt="profile-image"
            src="https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={() => {
              setOpenProfileMenu(!openProfileMenu);
            }}
          />
        </Icons>
        {/* <UserBox>
          <Avatar
            sx={{ height: 30, width: 30 }}
            alt="profile-image"
            src="https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Typography component={"span"}>Baby</Typography>
        </UserBox> */}
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={openProfileMenu}
        onClose={() => setOpenProfileMenu(!openProfileMenu)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={() => setOpenProfileMenu(!openProfileMenu)}>
          Profile
        </MenuItem>
        <MenuItem onClick={() => setOpenProfileMenu(!openProfileMenu)}>
          My account
        </MenuItem>
        <MenuItem onClick={() => setOpenProfileMenu(!openProfileMenu)}>
          Logout
        </MenuItem>
      </Menu>
    </AppBar>
  );
};
