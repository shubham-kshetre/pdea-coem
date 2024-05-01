import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import { Box } from "@mui/material";

function CardComponent() {
  // Define an array of objects with names and other relevant information
  const items = [
    { name: 'Animal', description: 'Description for Animal' },
    { name: 'Birds', description: 'Description for Birds' }
  ];

  return (
    <Box
      sx={{
        background: "white",
        color: "white",
        padding: "24px",
        display: "flex",
        justifyContent:"space-evenly",
      }}
    >
      {/* Map over the array of items */}
      {items.map((item, index) => (
        <Card sx={{ display: 'flex', maxWidth: 550, maxHeight:450,backgroundColor:"#FFBB70",alignItems:"center"}} key={index}>
          <CardContent style={{ flex: 2}}>
            <Typography gutterBottom variant="h5" component="div" style={{fontSize:"40px"}}>
              {item.name} {/* Display the name of the item */}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
            <CardActions>
              <Button size="small" color="primary">
                Explore
              </Button>
            </CardActions>
          </CardContent>
          <CardMedia
            component="img"
            height="250"
            image="card.jpeg"
            alt="green iguana"
            style={{ width: "45%" ,margin:"15px", borderRadius:8}}
          />
        </Card>
      ))}
    </Box>
  );
}

export default CardComponent;
