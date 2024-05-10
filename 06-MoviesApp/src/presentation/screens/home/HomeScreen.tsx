import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useMovies } from '../../hooks/useMovies';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PosterCarrousel } from '../../components/movies/PosterCarrousel';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isLoading, nowPlaying, popular, uncoming, topRated, popularNextPage } = useMovies();

  if (isLoading) {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20, paddingBottom: 30 }}>
        {/* Now Playing */}
        <PosterCarrousel movies={nowPlaying} />

        {/* Popular */}
        <HorizontalCarousel
          movies={popular}
          title="Popular"
          loadNextPage={popularNextPage}
        />

        {/* Top Rated */}
        <HorizontalCarousel
          movies={topRated}
          title="Top Rated"
          loadNextPage={() => console.log('Top Rated')}
        />

        {/* Soon */}
        <HorizontalCarousel
          movies={uncoming}
          title="Soon"
          loadNextPage={() => console.log('Soon')}
        />
      </View>
    </ScrollView>
  );
};
