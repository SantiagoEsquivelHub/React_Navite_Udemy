import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movie } from "../../models/movie.model";

interface Options {
    page?: number;
    limit?: number;
}

export const moviesPopularUseCase = async (fetcher: HttpAdapter, options?: Options): Promise<Movie[]> => {
    try {
        const popular = await fetcher.get<MovieDBResponse>('/popular', {
            params: {
                page: options?.page || 1,
                limit: options?.limit || 20
            }
        });
        return popular.results.map(MovieMapper.fromMovieDBResultToMovie);
    } catch (error) {
        console.log("🚀 ~ moviesPopularUseCase ~ error:", error)
        throw new Error('Error fetching popular movies');
    }
}
