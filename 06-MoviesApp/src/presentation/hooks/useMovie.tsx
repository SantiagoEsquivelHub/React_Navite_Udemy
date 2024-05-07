import {useEffect, useState} from 'react';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';
import * as UsesCases from '../../core/use-cases';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    loadlMovie();
  }, []);

  const loadlMovie = async () => {

    setIsLoading(true);

    const movie = await UsesCases.getMovieByIdUseCase(movieDBFetcher, movieId);
    setMovie(movie);  
    console.log("🚀 ~ loadlMovie ~ movie:", movie)

    setIsLoading(false);

    return movie
  };

  return {
    movie,
  };
};
