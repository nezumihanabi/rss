import React from "react";
import "../App.css";

import {
  Box,
  TextField
} from "@material-ui/core";

function RssFeed() {
  return (
    <div className="App">
      <Box
        style={{ backgroundColor: "#D7CCC8", width: "100%", height: "100px" }}
      ></Box>
      <Box
        style={{ backgroundColor: "#f7eeeb", width: "100%", height: "200px" }}
      >
        URL
        <TextField
          id="url"
          style={{
            backgroundColor: "#ffffff",
          }}
        />
      </Box>
      <hr/>>
      <Box
        style={{ backgroundColor: "#f7eeeb", width: "100%", height: "500px" }}
      >
        <TextField
          id="url"
          style={{
            backgroundColor: "#ffffff",
          }}
        />
      </Box>
    </div>
  );
}

export default RssFeed;
