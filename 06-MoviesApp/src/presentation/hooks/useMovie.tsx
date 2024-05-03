import { useEffect, useState } from 'react'

export const useMovie = (movieId: number) => {

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        loadlMovie();
    }, [])


    const loadlMovie = () => {

    }

}
