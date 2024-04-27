import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movie } from "../../models/movie.model";

export const moviesTopRatedUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const topRated = await fetcher.get<MovieDBResponse>('/top_rated');
        return topRated.results.map(MovieMapper.fromMovieDBResultToMovie);
    } catch (error) {
        console.log("🚀 ~ moviesTopRatedUseCase ~ error:", error)
        throw new Error('Error fetching top rated movies');
    }
}
