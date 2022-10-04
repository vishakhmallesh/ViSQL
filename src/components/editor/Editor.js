import React, { useState, Suspense, lazy } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const CodeEditorWindow = lazy(() => import("./CodeEditorWindow"));

import AddIcon from "@mui/icons-material/Add";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Editor(props) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.getTabNumber(newValue);
  };

  return (
    <div>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="editor tabs"
        >
          <Tab
            label="Untitled-1"
            icon={
              <CloseIcon
                fontSize="small"
                sx={{ height: "15px", width: "15px", visibility: "hidden" }}
              />
            }
            iconPosition="end"
            {...a11yProps(0)}
            id="tab-1"
          />
          <Tab
            label="Example-1"
            icon={
              <CloseIcon
                fontSize="small"
                sx={{ height: "15px", width: "15px", visibility: "hidden" }}
              />
            }
            iconPosition="end"
            {...a11yProps(0)}
            id="tab-2"
          />
          <Tab
            label="Example-2"
            icon={
              <CloseIcon
                fontSize="small"
                sx={{ height: "15px", width: "15px", visibility: "hidden" }}
              />
            }
            iconPosition="end"
            {...a11yProps(0)}
            id="tab-3"
          />
          <IconButton className="add-tab">
            <AddIcon fontSize="small" />
          </IconButton>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Suspense fallback={<div>Loading</div>}>
          <CodeEditorWindow
            language="sql"
            viewHorizontal={props.viewHorizontal}
            code={`/*Enter your query here*/ \n\nSELECT * from data_name;`}
          />
        </Suspense>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Suspense fallback={<div>Loading</div>}>
          <CodeEditorWindow
            language="sql"
            viewHorizontal={props.viewHorizontal}
            code="SELECT * from data_name WHERE ID < 5;"
          />
        </Suspense>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Suspense fallback={<div>Loading</div>}>
          <CodeEditorWindow
            language="sql"
            viewHorizontal={props.viewHorizontal}
            code="SELECT * from data_name WHERE ID < 2;"
          />
        </Suspense>
      </TabPanel>
    </div>
  );
}
