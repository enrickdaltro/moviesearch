import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';

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
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 4,
  },

  cardText: {
    fontSize: 50,
  },
});

/**
 * Setting initial data
 */

const data = [
  { key: '1' },
  { key: '2' },
  { key: '3' },
  { key: '4' },
  { key: '5' },
  { key: '6' },
  { key: '7' },
  { key: '8' },
  { key: '9' },
  { key: '10' },
];

/**
 * Rendered Screen
 */

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Icon name="dehaze" size={24} color="#1b0241" />
          <Text style={styles.headerTitle}>All Items</Text>
          <Icon name="search" size={24} color="#1b0241" />
        </View>
      </View>

      <FlatList
        style={styles.list}
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => String(item.key)}
        numColumns={numColumns}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardText}>{item.key}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
