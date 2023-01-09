import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import Moment from "react-moment";
import React from "react";
import { useDispatch } from "react-redux";
import { addMoviesToWatchList } from "../features/addMovie/moviesSlice";

const MovieSearchResult = ({ movie }) => {

  const dispatch = useDispatch();
  return (
    <Card sx={{ display: "flex", height: 170, m: 1 }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={`https://image.tmdb.org/t/p/w200${movie?.poster_path}`}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
      {/* <CardContent sx={{ flex: "1 0 auto" }}> */}
      <CardContent >
          <Typography component="div" variant="h5">
            {movie?.title.substring(0, 25)}
          </Typography>
          <Typography color="text.secondary" component="div">
            <Moment format="YYYY">{movie?.release_date}</Moment>
          </Typography>
          <Stack spacing={2} direction="row" sx={{ mt: 6 }}>
            <Button variant="contained" onClick={( )=>dispatch(addMoviesToWatchList(movie)) }> Añadir a la lista para mirar</Button>
          </Stack>
        </CardContent>
      </Box>
    </Card>
  );
};

export default MovieSearchResult;