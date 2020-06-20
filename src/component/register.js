import React, {ReactHTML as classes, useEffect, useState} from "react";
import "../App.css";
import AddIcon from '@material-ui/icons/Add';
import {
  Box,
  TextField
} from "@material-ui/core";
import {rssCreateAction, rssGetAction} from '../action/rss';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

const mapStateToProps = state => ({
  rssList: state.rssList
});

const mapDispatchToProps = dispatch => ({
  getRss(url) {
    dispatch(rssGetAction());
  },
  createRss(url) {
    dispatch(rssCreateAction({url:url}));
  }
});

function RssFeed(props) {
  const [url, setUrl] = useState('');
  const list = props.rssList || [];
  useEffect(()=>{
    props.getRss(url);
  });
  return (
    <div className="App">
      <Box
        style={{ backgroundColor: "#D7CCC8", width: "100%", height: "100px" }}
      ></Box>
      <Box
        style={{ backgroundColor: "#f7eeeb", width: "100%", height: "200px" }}
      >
        <br/>
        登録済みURL
        <TextField
          id="url"
          style={{
            width:"300px",
            backgroundColor: "#ffffff",
          }}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button variant="fab" color="primary" aria-label="add" onClick={() => props.createRss(url)}>
          <AddIcon />
        </Button>
      </Box>
      <Box
        style={{ backgroundColor: "#f7eeeb", width: "100%", height: "500px" }}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>URL</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((rss,idx) => (
                <TableRow key={idx}>
                  <TableCell align="right">{rss.url}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}

export default  connect(mapStateToProps, mapDispatchToProps)(RssFeed);
