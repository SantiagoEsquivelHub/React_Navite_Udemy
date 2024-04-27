import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movie } from "../../models/movie.model";

export const moviesPopularUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const popular = await fetcher.get<MovieDBResponse>('/popular');
        return popular.results.map(MovieMapper.fromMovieDBResultToMovie);
    } catch (error) {
        console.log("🚀 ~ moviesPopularUseCase ~ error:", error)
        throw new Error('Error fetching popular movies');
    }
}
