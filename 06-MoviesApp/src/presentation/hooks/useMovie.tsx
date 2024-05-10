import {useEffect, useState} from 'react';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';
import * as UsesCases from '../../core/use-cases';
import {FullMovie} from '../../core/models/movie.model';
import {Cast} from '../../core/models/cast.mode';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState<FullMovie>();
  const [cast, setCast] = useState<Cast[]>();

  useEffect(() => {
    loadlMovie();
  }, []);

  const loadlMovie = async (): Promise<FullMovie> => {
    setIsLoading(true);

    const fullMoviePromise = UsesCases.getMovieByIdUseCase(
      movieDBFetcher,
      movieId,
    );
    const castPromise = UsesCases.getMovieCastUseCase(movieDBFetcher, movieId);

    const [movie, cast] = await Promise.all([fullMoviePromise, castPromise]);

    setMovie(movie);
    setCast(cast);

    setIsLoading(false);

    return movie;
  };

  return {
    isLoading,
    movie,
    cast,
  };
};
