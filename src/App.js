import { Box, createTheme, ThemeProvider } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { Addpost } from "./components/Addpost";
import { Feeds } from "./components/Feeds";
import { Leftbar } from "./components/Leftbar";
import { Navbar } from "./components/Navbar";
import { Rightbar } from "./components/Rightbar";

function App() {
  const [mode, setMode] = useState(true);

  const darkTheme = createTheme({
    palette: {
      mode: mode ? "light" : "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        {/* Stack is a grid system with one dimensions */}
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Leftbar setMode={setMode} mode={mode} />
          <Feeds />
          <Rightbar />
        </Stack>
        <Addpost />
      </Box>
    </ThemeProvider>
  );
}

export default App;
