import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {
  constructor(props) {
    super(props);

    const movieData = [];

    for (let i = 0; i < 10; i++) {
        movieData.push({
            ,
            country: chance.country({ full: true })
        });
    }

    this.state = { people };
}

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
