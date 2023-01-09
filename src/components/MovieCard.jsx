import { Card, CardMedia } from "@mui/material";
import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Card sx={{ display: "flex", m: 1 }}>
        <CardMedia
          component="img"
          sx={{ width: 220 }}
          image={`https://image.tmdb.org/t/p/w200${movie?.poster_path}`}
          alt={movie?.title}
        ></CardMedia>
      </Card>
    </div>
  );
};

export default MovieCard;
