import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import api from '../../services/api';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  // Header

  headerContent: {
    margin: 20,
  },

  header: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  headerTitle: {
    color: '#1b0241',
    fontSize: 20,
  },

  // Section

  genres: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  genre: {
    color: '#DE4424',
    fontWeight: 'bold',
    fontSize: 12,
    marginRight: 5,
  },

  tagline: {
    color: '#1b0241',
    fontSize: 26,
    marginBottom: 10,
  },

  date: {
    color: '#999',
    marginBottom: 10,
  },

  cover: {
    width: '100%',
    height: 220,
    resizeMode: 'cover',
    borderRadius: 20,
    marginBottom: 10,
  },

  rating: {
    fontSize: 28,
    fontWeight: '500',
    color: '#1b0241',
    marginBottom: 5,
  },

  overview: {
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'justify',
    color: '#1b0241',
    fontWeight: '500',
  },

  vote: {
    color: '#999',
    marginBottom: 15,
  },
});

export default function Detail({ route, navigation }) {
  // getting movie id to api call
  const { id } = route.params.item;

  // State
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function loadMovieDetails() {
      const response = await api.get(
        `/movie/${id}?api_key=20d57af72e0527307662f7b20543ca1e`,
      );
      setMovie(response.data);
      console.tron.log(response.data);
    }
    loadMovieDetails();
  }, [id]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Icon name="arrow-back" size={26} color="#1b0241" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{movie.original_title}</Text>
          <Icon name="search" size={26} color="#FFF" />
        </View>

        <View>
          <View style={styles.genres}>
            {movie !== undefined
              ? movie.genres.map(genre => (
                  <Text style={styles.genre}>{genre.name}</Text>
                ))
              : 'Title'}
          </View>
          <Text style={styles.tagline}>
            {movie.tagline ? movie.tagline : movie.original_title}
          </Text>
          <Text style={styles.date}>Released at {movie.release_date}</Text>
        </View>

        <View>
          <Image
            style={styles.cover}
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={styles.rating}>
            <Icon name="star" size={22} color="#feb221" />
            {movie.vote_average}/10
          </Text>
        </View>

        <Text style={styles.vote}>{movie.vote_count} votes on IMDb</Text>

        <Text style={styles.overview}>{movie.overview}</Text>
      </View>
    </SafeAreaView>
  );
}
