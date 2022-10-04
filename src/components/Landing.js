// LANDING.js

import React, { useState } from "react";
import Editor from "./editor/Editor";
import ExplorerWindow from "./explorer/ExplorerWindow";
import ResultWindow from "./ResultWindow";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import SettingsIcon from "@mui/icons-material/Settings";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Tooltip from '@mui/material/Tooltip';

const Landing = () => {
  const [horizontal, setHorizontal] = useState(true);

  const [bookmark, setBookmark] = useState(false);

  const [isRunning, setIsRunning] = useState(false);

  const [tabNum, setTabNum] = useState(0);

  const [runHistory, setRunHistory] = useState([]);

  const handleViewModeHorizontal = () => setHorizontal(true);

  const handleViewModeVertical = () => setHorizontal(false);

  const handleBookmark = () =>
    bookmark ? setBookmark(false) : setBookmark(true);

  const getTabNumber = function (num) {
    setTabNum(num);
  };

  const pushHistory = function () {
    if(runHistory.length === 5){
      runHistory.shift();
    }
    switch (tabNum) {
      case 0:
        setRunHistory(runHistory.concat({name: "Untitled-1", code:"SELECT * FROM Customers;"}));
        break;
      case 1:
        setRunHistory(runHistory.concat({name: "Example-1", code:"SELECT * from data_name WHERE ID < 5;"}));
        break;
      case 2:
        setRunHistory(runHistory.concat({name: "Example-2", code:"SELECT * from data_name WHERE ID < 2;"}));
        break;
    }
  };

  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
    }, 2000);
    pushHistory();
  };

  return (
    <>
      <div className="landing-wrapper">
        <div className="explorer-wrapper">
          <ExplorerWindow bookmark={bookmark} runHistory={runHistory} />
        </div>
        <div className="editor-result-wrapper">
          <div className="editor-result-header">
            <div className="view-mode">
              <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: "4px",
                  width: "36px",
                  height: "36px",
                }}
                icon={<SettingsIcon fontSize="small" />}
                direction="down"
              >
                <SpeedDialAction
                  key="horizontal"
                  icon={<ImportContactsIcon fontSize="small" />}
                  tooltipTitle="Horizontal"
                  onClick={handleViewModeHorizontal}
                />
                <SpeedDialAction
                  key="Vertical"
                  icon={
                    <ImportContactsIcon
                      fontSize="small"
                      sx={{ transform: "rotate(90deg)" }}
                    />
                  }
                  tooltipTitle="Vertical"
                  onClick={handleViewModeVertical}
                />
              </SpeedDial>
            </div>
            <div className="controls">
              {tabNum === 0 ? (
                <Button
                  variant={bookmark ? "contained" : "outlined"}
                  startIcon={
                    bookmark ? <BookmarkIcon /> : <BookmarkBorderIcon />
                  }
                  onClick={handleBookmark}
                  size="small"
                  sx={{ marginRight: "5px" }}
                >
                  {bookmark ? "Bookmarked" : "Bookmark"}
                </Button>
              ) : (
                <Tooltip title="Bookmarking disabled for sample queries">
                <Button
                  variant="contained"
                  startIcon={<BookmarkIcon />}
                  size="small"
                  sx={{ marginRight: "5px" }}
                  
                >
                  Bookmarked
                </Button>
                </Tooltip>
              )}
              <LoadingButton
                size="small"
                color="secondary"
                onClick={handleRun}
                loading={isRunning}
                loadingPosition="start"
                startIcon={<PlayArrowIcon />}
                variant="contained"
              >
                Run Query
              </LoadingButton>
            </div>
          </div>
          <div
            className="editor-wrapper"
            style={horizontal ? { width: "49.8%" } : { width: "100%" }}
          >
            <Editor viewHorizontal={horizontal} getTabNumber={getTabNumber} />
          </div>
          <div
            className="result-wrapper"
            style={
              horizontal
                ? { width: "49.8%", height: "calc(100vh - 100px - 3rem)" }
                : { width: "100%", height: "calc(50vh - 50px)" }
            }
          >
            {isRunning ? (
              <div className="loading-result">
                <LoadingButton
                  size="small"
                  color="secondary"
                  loading={true}
                  loadingPosition="start"
                  startIcon={<PlayArrowIcon />}
                  variant="contained"
                >
                  Loading
                </LoadingButton>
              </div>
            ) : (
              <ResultWindow
                viewHorizontal={horizontal}
                tabNum={tabNum}
                isRunning={isRunning}
              />
            )}
          </div>
          <div className="footer">
              <span>Time:</span> {isRunning ? <LoadingButton
                  size="small"
                  color="secondary"
                  loading={true}
                  loadingPosition="start"
                  startIcon={<PlayArrowIcon />}
                  variant="contained"
                />:
              " 2.56s"}
                  
               
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
