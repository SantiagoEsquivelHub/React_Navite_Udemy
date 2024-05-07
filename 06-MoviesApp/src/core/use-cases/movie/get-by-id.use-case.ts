import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { FullMovie } from '../../models/movie.model';
import { MovieDBMovie } from '../../../infrastructure/interfaces/movie-db.responses';


export const getMovieByIdUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<FullMovie> => {

    try {
        const movie = await fetcher.get<MovieDBMovie>(`/${movieId}`);
        const fullMovie = MovieMapper.fromMovieDBToEntity(movie);
        return fullMovie;

    } catch (error) {
        throw new Error(`Cannot get movie by id: ${movieId}`);
    }
}
