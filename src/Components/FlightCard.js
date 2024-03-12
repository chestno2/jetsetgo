import React from "react";
import {  Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";


function FlightCard({ flight }) {
  return (
    <Grid container spacing={3}>
      {flight.map((data) => (
        <Grid item xs={12} sm={6} md={4} key={data.flightNumber}>
          <Card sx={{ minWidth: 250, boxShadow: 2 }}>
            <CardHeader
              title={`${data.origin} to ${data?.destination}`}
              subheader={`Flight Number: ${data?.flightNumber}`}
              titleTypographyProps={{ variant: "subtitle1" }}
              subheaderTypographyProps={{ variant: "caption" }}
            />
            <CardContent>
              <Typography variant="body2">Airline: {data?.airline}</Typography>
              <Typography variant="body2">Aircraft: {data?.aircraft}</Typography>
              <Typography variant="body2">Duration: {data?.duration}</Typography>
              <Typography variant="body2">Departure Time: {new Date(data?.departureTime).toLocaleString()}</Typography>
              <Typography variant="body2">Arrival Time: {new Date(data?.arrivalTime).toLocaleString()}</Typography>
              <Typography variant="body2">Gate: {data?.gate}</Typography>
              <Typography variant="body2">Price: Rs{data?.price}</Typography>
              <Typography variant="body2">Seats Available: {data?.seatsAvailable}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default FlightCard;
