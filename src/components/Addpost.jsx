import styled from "@emotion/styled";
import {
  Add,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 15,
  paddingBlock: 15,
});

export const Addpost = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Tooltip
        onClick={() => setOpenModal(true)}
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50%)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>
      <StyledModal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          bgcolor="background.default"
          padding={2}
          width="30%"
          borderRadius="10px"
        >
          <Typography
            variant="h5"
            component="h2"
            color="gray"
            textAlign={"center"}
          >
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              sx={{ bgcolor: "red" }}
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800"
            ></Avatar>
            <Typography
              variant="h6"
              component="span"
              textAlign={"center"}
              fontSize={"18px"}
              display={"block"}
              color={"text.primary"}
            >
              Monika Sivakumar
            </Typography>
          </UserBox>
          <TextField
            variant="standard"
            sx={{ width: "100%" }}
            placeholder="What did you cook/eat today?"
            rows={4}
            multiline
          />
          <Stack direction={"row"} gap={1} marginTop={2} marginBottom={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup variant="contained" fullWidth>
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};
