import React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  card: {
    width: 262,
    height: 72,
    background: theme.palette.common.white,
    borderRadius: "22px",
    marginBottom: theme.spacing(4),
  },
}));

export default function CasinoSoftwareCard(props) {
  const classes = useStyles();
  const { imageProp, description, mb } = props;

  return (
    <Box display="flex" flexDirection="column" maxWidth="100%">
      <Box>
        <Box display="flex" justifyContent="center">
          <Box className={classes.card}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
              mt={mb ? -1.5 : 0}
            >
              <Image
                width={imageProp.width}
                src={imageProp.src}
                height={imageProp.height}
                objectFit="cover"
              />
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography
            variant="body1"
            component="p"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </Box>
      </Box>
    </Box>
  );
}
