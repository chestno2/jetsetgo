import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import FlightCard from "./FlightCard";
import Searchgif from "./Searchgif";

function TravelRequest() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchFlight = async () => {
    setLoading(true);
    const response = await axios.get(
      "https://api.npoint.io/378e02e8e732bb1ac55b"
    );
    const filteredResult = response.data.filter(
      (flight) =>
        flight.origin.toLowerCase() === origin.toLowerCase() &&
        flight.destination.toLowerCase() === destination.toLowerCase()
    );

    setSearchResult(filteredResult);

    setLoading(false);
  };
  const filteronPrice = () => {
    const sortedFlights = searchResult
      .slice()
      .sort((a, b) => a.price - b.price);
    setSearchResult(sortedFlights);
  };
  const sortonSeats = () => {
    const sortedSeats = searchResult
      .slice()
      .sort((a, b) => a.seatsAvailable - b.seatsAvailable);
    setSearchResult(sortedSeats);
  };
  return (
    <Box>
      <Typography variant="h3" textAlign={"center"}>
        JetSetGo{" "}
      </Typography>
      <Typography variant="subtitle2" textAlign={"center"}>
        Only in metro Cities{" "}
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          my: 4,
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <TextField
          id="outlined-controlled"
          label="Origin"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          sx={{ mb: { xs: 2, sm: 0 }, mr: { xs: 0, sm: 2 } }}
        />

        <TextField
          id="outlined-controlled"
          label="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          sx={{ mb: { xs: 2, sm: 0 }, mr: { xs: 0, sm: 2 } }}
        />

        <input
          type="date"
          id="datePicker"
          name="datePicker"
          value={"2024-03-15"}
          disabled
          sx={{
            mb: { xs: 2, sm: 0 },
            mr: { xs: 0, sm: 2 },
            width: { xs: "100%", sm: "auto" },
          
          }}
        />

        <Button
          size="medium"
          color="info"
          variant="outlined"
          disabled={origin && destination ? false : true}
          onClick={searchFlight}
          sx={{
            mt:{xs:2,sm:0}
          }}
        >
          Search
        </Button>
      </Box>

      <Box>
        {loading ? (
          <Searchgif />
        ) : (
          <>
            {searchResult.length > 0 ? (
              <Box>
                <Box sx={{ my: 4 }}>
                  <Button
                    sx={{ mx: 3 }}
                    onClick={sortonSeats}
                    variant="outlined"
                    color="info"
                  >
                    Sort By Seats
                  </Button>
                  <Button
                    onClick={filteronPrice}
                    variant="outlined"
                    color="success"
                  >
                    {" "}
                    Sort By Price
                  </Button>
                </Box>
                <FlightCard flight={searchResult} />
              </Box>
            ) : (
              <Typography>No flights available.</Typography>
            )}
          </>
        )}
      </Box>
    </Box>
  );
}

export default TravelRequest;
