import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";

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

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const rowsTwo = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
];

const rowsThree = [{ id: 1, lastName: "Snow", firstName: "Jon", age: 35 }];

export default function ResultWindow(props) {
  const [value, setValue] = React.useState(props.tabNum);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 10,
    editable: true,
  });

  return (
    <div>
      <Box className="result-wrapper-inner">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
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
            {...a11yProps(1)}
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
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div
          className="result-table"
          style={
            props.viewHorizontal
              ? { height: "calc(100vh - 100px - 3rem)" }
              : { height: "calc(50vh - 100px)" }
          }
        >
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
            components={{ Toolbar: GridToolbar }}
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div
          className="result-table"
          style={
            props.viewHorizontal
              ? { height: "calc(100vh - 100px - 3rem)" }
              : { height: "calc(50vh - 100px)" }
          }
        >
          <DataGrid
            rows={rowsTwo}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            components={{ Toolbar: GridToolbar }}
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div
          className="result-table"
          style={
            props.viewHorizontal
              ? { height: "calc(100vh - 100px - 3rem)" }
              : { height: "calc(50vh - 100px)" }
          }
        >
          <DataGrid
            rows={rowsThree}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            components={{ Toolbar: GridToolbar }}
          />
        </div>
      </TabPanel>
    </div>
  );
}
