import {useEffect, useState} from 'react';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';
import * as UsesCases from '../../core/use-cases';
import { FullMovie } from '../../core/models/movie.model';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState<FullMovie>();

  useEffect(() => {
    loadlMovie();
  }, []);

  const loadlMovie = async (): Promise<FullMovie> => {

    setIsLoading(true);

    const movie = await UsesCases.getMovieByIdUseCase(movieDBFetcher, movieId);
    setMovie(movie);  
    
    setIsLoading(false);

    return movie
  };

  return {
    movie,
    isLoading,
  };
};
