import React from "react";
import { ThemeProvider, CSSReset, Box } from "@chakra-ui/core";
import LineChart from "./components/LineChart/LineChart";
import AppHeader from "./components/Header/AppHeader";
import Cards from "./components/Cards";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Box overflowX="hidden">
        {/* I am going to replace this parent with chakra */}
        <AppHeader />

        <Cards />

        <LineChart />
      </Box>
    </ThemeProvider>
  );
}

export default App;
