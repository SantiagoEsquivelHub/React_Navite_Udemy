import { useEffect, useState } from "react"
import * as UsesCases from "../../core/use-cases"
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter";

export const useMovies = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    initLoad();
  }, [])

  const initLoad = async () => {
    const nowPlayingMovies = await UsesCases.moviesNowPlayingUseCase(movieDBFetcher);
  }


  return {

  }
}
