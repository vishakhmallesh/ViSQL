import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import IconButton from "@mui/material/IconButton";
import { CardActionArea } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import Drawer from "@mui/material/Drawer";

import NotPresentText from "../NotPresentText";
import QueryCard from "./QueryCard";

import StorageIcon from "@mui/icons-material/Storage";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HistoryIcon from "@mui/icons-material/History";
import CachedIcon from "@mui/icons-material/Cached";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import PushPinIcon from "@mui/icons-material/PushPin";
import CloseIcon from "@mui/icons-material/Close";

// TABPANEL
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

// ACCORDION
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.8rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 1)"
      : "rgba(0, 0, 0, 0)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(0.5),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: "0 0 0 30px",
  borderTop: "none",
}));

const history = function (cards){
 return <QueryCard name={cards.name} code={cards.code} />
}

export default function ExplorerWindow(props) {
  // FOR TABS
  const [value, setValue] = useState(0);

  //PIN
  const [pinned, setPinned] = useState(false);

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };

  const handlePinClick = () => {
    pinned ? setPinned(false) : setPinned(true);
  };

  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100000,
    editable: true,
  });

  const [state, setState] = useState({ right: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div className="table-viewer">
      <IconButton onClick={toggleDrawer(anchor, false)}>
        <CloseIcon />
      </IconButton>

      <DataGrid
        {...data}
        loading={data.rows.length === 0}
        rowHeight={38}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        sx={{ backgroundColor: "#fff" }}
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  );

  //COMPONENTS

  const Entities = function (props) {
    return (
      <div className="files d-f ai-c jc-sb">
        <CardActionArea
          sx={{
            borderRadius: "2px",
            transform: "translateX(-10px)",
            padding: "10px 10px 10px 10px",
          }}
          onClick={toggleDrawer("right", true)}
        >
          <div className="file-name d-f ai-c">
            <CalendarViewMonthIcon />
            <span>{props.name}</span>
          </div>
        </CardActionArea>
        {props.icon === "pin" ? (
          <div className="pin">
            <IconButton onClick={handlePinClick} aria-label="pin query">
              {pinned ? (
                <PushPinIcon sx={{ color: "#2026d2" }} />
              ) : (
                <PushPinOutlinedIcon />
              )}
            </IconButton>
          </div>
        ) : (
          <div className="un-pin">
            <IconButton aria-label="delete" onClick={handlePinClick}>
              <CloseIcon />
            </IconButton>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="">
      <div className="explorer-header d-f jc-sb">
        <div className="database-name d-f ai-c">ONLINE_RETAIL</div>
        <div>
          <CreateNewFolderIcon sx={{ fontSize: "20px" }} />
          <CachedIcon sx={{ fontSize: "20px", marginLeft: "10px" }} />
        </div>
        <div className="explorer-search">
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            size="small"
          />
        </div>
      </div>

      <div className="explorer-tab-wrapper d-f ai-s">
        <div className="tabs">
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChangeTabs}
            aria-label="explorer tabs"
            // sx={{ color: "#2026D2" }}
          >
            <Tab icon={<StorageIcon />} {...a11yProps(0)} aria-label="explorer" />
            <Tab icon={<BookmarkIcon />} {...a11yProps(1)} aria-label="saved queries" />
            <Tab icon={<HistoryIcon />} {...a11yProps(2)} aria-label="run history" />
          </Tabs>
        </div>

        <div className="tabs-content">
          <TabPanel value={value} index={0}>
            <Accordion defaultExpanded={false}>
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <span className="acc-heading">PINNED</span>
              </AccordionSummary>
              <AccordionDetails>
                {pinned ? (
                  <Entities name="categories" icon="close" />
                ) : (
                  <NotPresentText text="No pinned entities." />
                )}
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded={true}>
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <span className="acc-heading">ENTITIES</span>
              </AccordionSummary>
              <AccordionDetails>
                <Entities name="categories" icon="pin" />
                <Drawer
                  anchor="right"
                  open={state["right"]}
                  onClose={toggleDrawer("right", false)}
                >
                  {list("right")}
                </Drawer>
              </AccordionDetails>
            </Accordion>
          </TabPanel>
          <TabPanel value={value} index={1}>
            {props.bookmark ? (
              <QueryCard name="Untitled-1" code="SELECT * FROM Customers;" />
            ) : (
              <NotPresentText text="No bookmarked queries" />
            )}
            <hr className="hr" />
            <NotPresentText text="Sample queries" />
            <QueryCard name="Example-1" code="SELECT * from data_name WHERE ID < 5;" />
            <QueryCard name="Example-2" code="SELECT * from data_name WHERE ID < 2;" />
          </TabPanel>
          <TabPanel value={value} index={2}>
          <div className="history-wrapper d-f">
            {props.runHistory.length !==0 ? (
              props.runHistory.map(history)
              
            ) : (
              <NotPresentText text="No queries have been excecuted" />
            )}
            </div>
          </TabPanel>
          
        </div>
      </div>
    </div>
  );
}
