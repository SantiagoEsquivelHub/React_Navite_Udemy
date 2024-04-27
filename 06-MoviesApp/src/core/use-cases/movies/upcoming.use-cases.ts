import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movie } from "../../models/movie.model";

export const moviesUpcomingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const upcoming = await fetcher.get<MovieDBResponse>('/upcoming');
        return upcoming.results.map(MovieMapper.fromMovieDBResultToMovie);
    } catch (error) {
        console.log("🚀 ~ moviesUpcomingUseCase ~ error:", error)
        throw new Error('Error fetching upcoming movies');
    }
}
