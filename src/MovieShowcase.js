import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {
  constructor(props) {
    super(props);

    const movieData = [];

    for (let i = 0; i < 9; i++) {
        movieData.push({
          Title: chance.title(),
          Rating: chance.IMDBRating(),
          Genres: chance.genres(),
          
            
            
        });
    }

    this.state = { movieData };
}

  render() {
    return (
      <div className="CardBack">
    {this.state.movieData.map((movie, index) => (
        <h2 mTitle={this.props.titleSrc} alt={this.props.title} />
        <h2 movie.title}</h2>
         <p IMDBRating1={this.props.Rating} alt={this.props.ratingList} />
        <p movie.IMDBRating}</p>
         <p listGenres={this.props.genres} alt={this.props.allGenres} />
        <p movie.genres}</p>
    ))}
    </div>);
}

 render() {
    return (
      <div className="CardFront">
    {this.state.movieData.map((movie, index) => (
        <img src={this.props.posterSrc} alt={this.props.poster} />
        <h2>{movie.poster}</h2>
       
    ))}
    </div>);
}

CardFront.defaultProps = {
  posterSrc: 'https://i2.wp.com/www.filmywapzone.com/wp-content/uploads/2021/04/Best-Hollywood-Movies-of-All-Times.jpg'
}
cardBack.defaultProps = {
  titleSrc: "Unknown",
  Rating: null,
  genres: 'No Genres Found'
}
  
  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
