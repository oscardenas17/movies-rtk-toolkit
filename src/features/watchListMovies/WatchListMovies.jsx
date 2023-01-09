import React from "react";
import { useSelector } from "react-redux";
import { selectAllWatchListMovies } from "../addMovie/moviesSlice";
import { Container, Typography } from "@mui/material";
import MovieGrid from "../../components/MovieGrid";

const WatchListMovies = () => {
  // const watchListMovies = useSelector(state => state.movies.watchListMovies);
  const watchListMovies = useSelector(selectAllWatchListMovies);

  return (
    <Container fixed>
      <Typography variant="h4" style={{ fontWeight: "600" }} mt={4}>
        Mi lista para mirar
      </Typography>
      {watchListMovies.length > 0 ?(<MovieGrid movies={watchListMovies} type="watchList" /> ):(<><h2>Añade tus peliculas a ver mas tarde</h2></>)}
    </Container>
  );
};

export default WatchListMovies;
