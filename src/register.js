import React from "react";
import "./App.css";
import { firestore } from "./plugins/firebase.js";

import {
  Box,
  TextField
} from "@material-ui/core";

function RssFeed() {
  return (
    <div className="App">
      <Box
        style={{ backgroundColor: "#D7CCC8", width: "800px", height: "100px" }}
      ></Box>
      <Box
        style={{ backgroundColor: "#f7eeeb", width: "800px", height: "700px" }}
      >
        URL
        <TextField
          id="url"
          multiLine={true}
          rows={5}
          style={{
            backgroundColor: "#ffffff",
          }}
        />
      </Box>
    </div>
  );
}

export default RssFeed;
