import React from 'react';
import {Text, View} from 'react-native';
import {FullMovie} from '../../../core/models/movie.model';
import {Formatter} from '../../../config/helpers/formatter';

interface Props {
  movie: FullMovie;
}

export const MovieDetails = ({movie}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text>{movie.rating} </Text>
          <Text> - {movie.genres.join(', ')}</Text>
        </View>

        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          History
        </Text>
        <Text style={{fontSize: 16}}>{movie.description}</Text>

        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Budget
        </Text>
        <Text style={{fontSize: 18}}>{Formatter.currency(movie.budget)}</Text>
      </View>

      {/* Casting */}
      <View style={{marginTop: 10, marginBottom: 100}}>
        <Text
          style={{
            fontSize: 23,
            marginVertical: 10,
            fontWeight: 'bold',
            marginHorizontal: 20,
          }}>
          Actors
        </Text>
      </View>
    </>
  );
};