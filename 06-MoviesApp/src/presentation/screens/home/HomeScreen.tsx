import React from 'react';
import { Text, View } from 'react-native';
import { useMovies } from '../../hooks/useMovies';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PosterCarrousel } from '../../components/movies/PosterCarrousel';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isLoading, nowPlaying, popular, uncoming, topRated } = useMovies();

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20, paddingBottom: 30 }}>
        
        {/* Now Playing */}
        <PosterCarrousel movies={nowPlaying} />

        {/* Popular */}
        <HorizontalCarousel movies={popular} title="Popular" />

        {/* Top Rated */}
        <HorizontalCarousel movies={topRated} title="Top Rated" />

        {/* Soon */}
        <HorizontalCarousel movies={uncoming} title="Soon" />

      </View>
    </ScrollView>
  );
};
