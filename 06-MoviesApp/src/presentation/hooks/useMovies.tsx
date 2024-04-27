import {useEffect, useState} from 'react';
import * as UsesCases from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';
import {Movie} from '../../core/models/movie.model';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [uncoming, setUncoming] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);

  useEffect(() => {
    initLoad();
  }, []);

  const initLoad = async () => {
    setIsLoading(true);

    const nowPlayingPromise = await UsesCases.moviesNowPlayingUseCase(
      movieDBFetcher,
    );
    const popularPromise = await UsesCases.moviesPopularUseCase(
      movieDBFetcher,
    );
    const topRatedPromise = await UsesCases.moviesTopRatedUseCase(
      movieDBFetcher,
    );
    const upcomingPromise = await UsesCases.moviesUpcomingUseCase(
      movieDBFetcher,
    );

    const [nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies] =
      await Promise.all([
        nowPlayingPromise,
        popularPromise,
        topRatedPromise,
        upcomingPromise,
      ]);

    setNowPlaying(nowPlayingMovies);
    setPopular(popularMovies);
    setTopRated(topRatedMovies);
    setUncoming(upcomingMovies);

    setIsLoading(false);
  };

  return {
    isLoading,
    nowPlaying,
    popular,
    uncoming,
    topRated,
  };
};
