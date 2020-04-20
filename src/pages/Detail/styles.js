import { StyleSheet } from 'react-native';

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

export default styles;
