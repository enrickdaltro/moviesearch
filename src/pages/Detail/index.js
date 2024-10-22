import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import { format, parseISO } from 'date-fns';

import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';

import styles from './styles';

import api from '../../services/api';

/**
 * Setting Skeleton Layout
 */

const detailSkeleton = [
  {
    width: 350,
    height: 40,
    marginBottom: 10,
  },
  {
    width: 350,
    height: 200,
    marginBottom: 10,
  },
  {
    width: 350,
    height: 300,
    marginBottom: 10,
  },
];

export default function Detail({ route, navigation }) {
  // getting movie id to api call
  const { id } = route.params.item;

  // State
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  const [formattedDate, setFormattedDate] = useState([]);

  // Animation State
  const [opacityScreen] = useState(new Animated.Value(0));

  useEffect(() => {
    async function loadMovieDetails() {
      setLoading(true);
      const response = await api.get(
        `/movie/${id}?api_key=20d57af72e0527307662f7b20543ca1e`,
      );

      setTimeout(() => {
        setMovie(response.data);
        setLoading(false);
        setFormattedDate(
          format(parseISO(response.data.release_date), 'MM/dd/yyyy'),
        );
      }, 1000);
    }
    loadMovieDetails();
  }, [id]);

  /**
   * Setting animation
   */

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(opacityScreen, {
        duration: 1000,
        toValue: 1,
        useNativeDriver: false,
      }).start();
    }, 1000);
  }, [opacityScreen]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContent}>
        <Animated.View style={[styles.header, { opacity: opacityScreen }]}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Icon name="arrow-back" size={26} color="#1b0241" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{movie.original_title}</Text>
          <Icon name="search" size={26} color="#FFF" />
        </Animated.View>
      </View>

      <SkeletonContent
        containerStyle={{
          flex: 1,
          alignItems: 'center',
          useNativeDriver: false,
        }}
        isLoading={loading}
        layout={detailSkeleton}>
        <Animated.View
          style={[
            { marginHorizontal: 20 },
            { flex: 1 },
            { opacity: opacityScreen },
          ]}>
          <View>
            <Text style={styles.tagline}>
              {movie.tagline ? movie.tagline : movie.original_title}
            </Text>
            <Text style={styles.date}>Released at {formattedDate}</Text>
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
        </Animated.View>
      </SkeletonContent>
    </SafeAreaView>
  );
}
