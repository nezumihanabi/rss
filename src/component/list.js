import React, {useEffect, useState} from "react";
import "../App.css";
import {
  Box,
  TextField
} from "@material-ui/core";
import {rssCreateAction, rssGetAction} from '../action/rss';
import {connect} from 'react-redux';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import * as xml2js from 'react-native-xml2js';

const mapStateToProps = state => ({
  rssList: state.rssList
});

const mapDispatchToProps = dispatch => ({
  getRss() {
    dispatch(rssGetAction());
  }
});

function RssFeedList(props) {
  const [rss, setRss] = useState([]);
  let list = props.rssList || [];
  useEffect(()=>{
    list.forEach((rss)=>
      fetch(rss.url)
        .then(res => res.text())
        .then((xml) => {
          const parser = xml2js.Parser();
          parser.parseString(xml, (err, result) => {
            setRss(rss.concat(result));
          });
        })
    )
  }, []);
  return (
    <div className="App">
      <Box
        style={{ backgroundColor: "#f7eeeb", width: "100%", height: "500px" }}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>タイトル</TableCell>
                <TableCell>リンク</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rss.map((rss,idx) => (
                <TableRow key={idx}>
                  <TableCell align="right">{rss.item.title[idx]}</TableCell>
                  <TableCell align="right">{rss.item.link[idx]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(RssFeedList);