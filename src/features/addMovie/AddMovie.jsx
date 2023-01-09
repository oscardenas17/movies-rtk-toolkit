import { IconButton, InputBase, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useGetMoviesMutation } from "../../services/movieApi";
import MovieSearchResult from "../../components/MovieSearchResult";

const AddMovie = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };
  //1
  const [getMovies, { data: movies }] = useGetMoviesMutation();
  //2
  useEffect(() => {
    if (query) {
      fetchMovie();
    }
  }, [query]);
  //3
  const fetchMovie = async () => {
    await getMovies({ query });
  };
  return (
    <div
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "570px",
        alignContent: "center",
        marginTop: "50px",
      }}
    >
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "540",
        }}
      >
        {" "}
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Busca tu pelìcula"
          value={query}
          onChange={handleSearch}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <div className="result">
        {movies?.results?.length > 0 &&
          movies?.results?.map((movie) => (
            <MovieSearchResult key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default AddMovie;
