import React from "react";
import { useSelector } from "react-redux";
import { selectAllWatchedMovies } from "../addMovie/moviesSlice";
import { Container, Typography } from "@mui/material";
import MovieGrid from "../../components/MovieGrid";
import Message from "../../components/Message";

const WatchedMovies = () => {
  const watchedMovies = useSelector(selectAllWatchedMovies);
  return (
    <Container fixed>
      <Typography variant="h4" style={{ fontWeight: "600" }} mt={4}>
        Tu peliculas ya vistas
      </Typography>
      {watchedMovies.length > 0 ? (
        <MovieGrid movies={watchedMovies} type="watched" />
      ) : (
        <>
          <Message title={"Añade tus peliculas a ver mas tarde"} />
        </>
      )}
    </Container>
  );
};

export default WatchedMovies;
