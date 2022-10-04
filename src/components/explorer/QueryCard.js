import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";

import CodeIcon from "@mui/icons-material/Code";

export default function QueryCard(props) {
  return (
    <Card sx={{ maxWidth: "100%", marginLeft: "5px", marginBottom: "10px" }}>
      <CardActionArea>
        <CardContent sx={{ padding: "7px 10px 5px" }}>
          <Typography
            gutterBottom
            sx={{
              fontSize: "14px",
              margin: 0,
              height: "24px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
            }}
            component="div"
          >
            <CodeIcon />
            {props.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              overflow: "hidden",
              height: "21px",
              fontSize: "12px",
            }}
          >
            {props.code}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
