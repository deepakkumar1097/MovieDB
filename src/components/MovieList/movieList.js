import React, { useState, useEffect } from "react";
import Movies from "../Movie/movies";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useHistory } from "react-router";
import "./movieList.css";

export function MovieList({ movies, setMovies }) {
  const history = useHistory();

  // const getMovies = () => {
  // 	async function Allmovies() {
  // 		const data = await fetch(`${API_URL}`);
  // 		const movies = await data.json();
  // 		setMovies(movies)

  // 	}
  // 	Allmovies()
  // 	// fetch("https://616d506937f997001745d992.mockapi.io/martinscorses")
  // 	//   .then((data) => data.json())
  // 	//   .then((movies) => setMovies(movies));
  // }
  // useEffect(getMovies, [])

  const deleteMovie = (_id) => {
    setMovies(movies.filter((mv, ind) => ind !== _id));
    // fetch(`${API_URL}/${_id}`, { method: 'DELETE' })
    // 	.then(() => getMovies())
  };

  return (
    <section className="movielist-section">
      {movies.map(({ id, name, pic, summary, rating, year, _id }) => (
        <Movies
          id={id}
          key={id}
          name={name}
          pic={pic}
          summary={summary}
          rating={rating}
          year={year}
          editButton={
            <EditIcon
              onClick={() => {
                history.push("./movie-edit/" + id);
              }}
              className="likes-dislikes"
            ></EditIcon>
          }
          deleteButton={
            <DeleteIcon
              className="likes-dislikes"
              onClick={() => deleteMovie(id)}
            ></DeleteIcon>
          }
        />
      ))}
    </section>
  );
}
