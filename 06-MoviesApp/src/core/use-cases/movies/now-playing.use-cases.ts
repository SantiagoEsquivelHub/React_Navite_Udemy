import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movie } from "../../models/movie.model";

export const moviesNowPlayingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');
        return nowPlaying.results.map(MovieMapper.fromMovieDBResultToMovie);
    } catch (error) {
        console.log("🚀 ~ moviesNowPlayingUseCase ~ error:", error)
        throw new Error('Error fetching now playing movies');
    }
}
