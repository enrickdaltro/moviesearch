import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';

import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import api from '../../services/api';

// Setting number of columns that Flatlist will have
const numColumns = 2;

/**
 * Styles
 */

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
  },

  content: {
    margin: 20,
  },

  // Header

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

  // FlatList

  list: {
    marginHorizontal: 10,
  },

  card: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 280,
    flex: 1,
    shadowColor: '#999',
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 5,
      width: 4,
    },
    shadowRadius: 4,
    elevation: 1,
  },

  cardImage: {
    flex: 1,
    width: '90%',
    resizeMode: 'contain',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
});

/**
 * Setting Skeleton Layout
 */

const flatlistLayout = [
  {
    width: 170,
    height: 280,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  {
    width: 170,
    height: 280,
    marginVertical: 10,
    marginHorizontal: 10,
  },
];

/**
 * Rendered Screen
 */

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState(false);

  /**
   * Setting initial data
   */

  useEffect(() => {
    async function loadMovies() {
      setLoading(true);
      const response = await api.get(
        'movie/popular?api_key=20d57af72e0527307662f7b20543ca1e&language=en-US&page=1',
      );
      setTimeout(() => {
        setMovies(response.data.results);
        setLoading(false);
      }, 1800);
    }
    loadMovies();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Icon name="dehaze" size={24} color="#1b0241" />
          <Text style={styles.headerTitle}>Popular Movies</Text>
          <Icon name="search" size={24} color="#1b0241" />
        </View>
      </View>

      <SkeletonContent
        containerStyle={{
          flex: 1,

          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
        isLoading={loading}
        animationDirection="horizontalLeft"
        layout={flatlistLayout}>
        <FlatList
          style={styles.list}
          data={movies}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => String(item.id)}
          numColumns={numColumns}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                }}
                style={styles.cardImage}
              />
            </TouchableOpacity>
          )}
        />
      </SkeletonContent>
    </SafeAreaView>
  );
}
