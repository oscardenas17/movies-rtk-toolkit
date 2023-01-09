import React from 'react'
import { useSelector } from "react-redux";
import { selectAllWatchedMovies } from '../addMovie/moviesSlice';
import { Container, Typography } from '@mui/material';
import MovieGrid from '../../components/MovieGrid';


const WatchedMovies = () => {
  const watchedMovies = useSelector(selectAllWatchedMovies);
  return (
    <Container fixed>
      <Typography variant="h4" style={{ fontWeight: "600" }} mt={4}>
       Tu peliculas ya vistas
      </Typography>
      {watchedMovies.length > 0 ?(<MovieGrid movies={watchedMovies} type="watched" /> ):(<><h2>Añade tus peliculas a ver mas tarde</h2></>)}
    </Container>
  );
};

export default WatchedMovies