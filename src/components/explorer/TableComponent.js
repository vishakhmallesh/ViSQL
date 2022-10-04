import React from "react";

import { CardActionArea } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import PushPinIcon from "@mui/icons-material/PushPin";
import CloseIcon from "@mui/icons-material/Close";

const TableComponent = function(props) {
  //PIN
  const [pinned, setPinned] = React.useState(false);
  const handlePinClick = () => {
    pinned ? setPinned(false) : setPinned(true);
  };
  return (
    <CardActionArea sx={{ borderRadius: "2px", transform: "translateX(-5px)" }}>
      <div className="files">
        <div className="file-name">
          <CalendarViewMonthIcon />
          <span>{props.name}</span>
        </div>
        {props.icon === "pin" ? (
          <div className="pin">
            <Checkbox
              defaultChecked={false}
              icon={<PushPinOutlinedIcon />}
              checkedIcon={<PushPinIcon />}
              onClick={handlePinClick}
            />
          </div>
        ) : (
          <div className="un-pin">
            <IconButton aria-label="delete" onClick={handlePinClick}>
              <CloseIcon />
            </IconButton>
          </div>
        )}
      </div>
    </CardActionArea>
  );
}

export default TableComponent;
