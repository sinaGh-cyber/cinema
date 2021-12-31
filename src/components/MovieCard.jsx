import React from 'react';
import { Link } from 'react-router-dom';
function MovieCard({ movie }) {
  return (
    <>
      <div className="movie-card">
        <Link to={`/movies/${String(movie.id)}`}>
          <img className="card-img" src={movie.imageUrl} alt="" />
          <div className="card-body">
            <h2 className="card-title">{movie.title}</h2>
            <p className="card-description">{movie.short_description}</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default MovieCard;
