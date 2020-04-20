import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Animated,
  ActivityIndicator,
} from 'react-native';

import styles from './styles';

import api from '../../services/api';

// Setting number of columns that Flatlist will have
const numColumns = 2;
/**
 * Rendered Screen
 */

export default function Home({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState(false);

  // Animation State
  const [ListY] = useState(new Animated.Value(200));
  const [OpacityListY] = useState(new Animated.Value(0));

  const [HeaderY] = useState(new Animated.Value(-100));
  const [OpacityHeaderY] = useState(new Animated.Value(0));

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
      }, 1000);
    }
    loadMovies();
  }, []);

  /**
   * Setting Animation
   */

  useEffect(() => {
    // HEADER
    setTimeout(() => {
      Animated.timing(HeaderY, {
        duration: 800,
        toValue: 0,
        useNativeDriver: false,
      }).start();
    }, 1000);

    setTimeout(() => {
      Animated.timing(OpacityHeaderY, {
        duration: 800,
        toValue: 1,
        useNativeDriver: false,
      }).start();
    }, 1000);
    // LIST
    setTimeout(() => {
      Animated.timing(ListY, {
        duration: 800,
        toValue: 0,
        useNativeDriver: false,
      }).start();
    }, 1000);

    setTimeout(() => {
      Animated.timing(OpacityListY, {
        duration: 800,
        toValue: 1,
        useNativeDriver: false,
      }).start();
    }, 1000);
  }, [ListY, OpacityListY, OpacityHeaderY, HeaderY]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Animated.View
          style={[
            styles.header,
            { top: HeaderY },
            { opacity: OpacityHeaderY },
          ]}>
          <Icon name="dehaze" size={24} color="#1b0241" />
          <Text style={styles.headerTitle}>Search Movies</Text>
          <Icon name="search" size={24} color="#1b0241" />
        </Animated.View>
      </View>

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Animated.View
          style={[{ flex: 1 }, { top: ListY }, { opacity: OpacityListY }]}>
          <FlatList
            style={styles.list}
            data={movies}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => String(item.id)}
            numColumns={numColumns}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('Detail', { item })}>
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                  }}
                  style={styles.cardImage}
                />
              </TouchableOpacity>
            )}
          />
        </Animated.View>
      )}
    </SafeAreaView>
  );
}
