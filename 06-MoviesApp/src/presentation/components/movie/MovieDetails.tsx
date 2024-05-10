import React from 'react';
import { Text, View } from 'react-native';
import { FullMovie } from '../../../core/models/movie.model';
import { Formatter } from '../../../config/helpers/formatter';
import { Cast } from '../../../core/models/cast.mode';
import { FlatList } from 'react-native-gesture-handler';
import { CastActor } from '../cast/CastActor';

interface Props {
  movie: FullMovie;
  cast: Cast[];
}

export const MovieDetails = ({ movie, cast }: Props) => {
  return (
    <>
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text>{movie.rating} </Text>
          <Text> - {movie.genres.join(', ')}</Text>
        </View>

        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
          History
        </Text>
        <Text style={{ fontSize: 16 }}>{movie.description}</Text>

        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
          Budget
        </Text>
        <Text style={{ fontSize: 18 }}>{Formatter.currency(movie.budget)}</Text>
      </View>

      {/* Casting */}
      <View style={{ marginTop: 10, marginBottom: 50 }}>
        <Text
          style={{
            fontSize: 23,
            marginVertical: 10,
            fontWeight: 'bold',
            marginHorizontal: 20,
          }}>
          Actors
        </Text>

        <FlatList
          data={cast}
          horizontal
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <CastActor cast={item}/>}
        />

      </View>
    </>
  );
};
