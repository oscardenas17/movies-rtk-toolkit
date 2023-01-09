import { Card, CardMedia } from "@mui/material";
import React from "react";
import MovieControl from "./MovieControl";

const MovieCard = ({ movie , type}) => {
  return (
    <div className="movie-card">
      <Card sx={{ display: "flex", m: 1 }}>
        <CardMedia
          component="img"
          sx={{ width: 220 }}
          image={`https://image.tmdb.org/t/p/w200${movie?.poster_path}`}
          alt={movie?.title}
        />
        <MovieControl type={type} movie={movie} display/>
      </Card>
    </div>
  );
};

export default MovieCard;
