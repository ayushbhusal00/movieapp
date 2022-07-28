import React from "react";

function MovieList(props) {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <>
      {props.movies.map((movie, index) => {
        return (
          <div className="image-container d-flex justify-content m3">
            <img src={movie.Poster} alt={movie.Type} />
            <div
              onClick={() => PaymentResponse.handleFavouritesClick(movie)}
              className="overlay d-flex align-items-center justify-content-center"
            >
              <FavouriteComponent></FavouriteComponent>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default MovieList;
