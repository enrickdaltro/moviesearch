import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
  },

  content: {
    marginHorizontal: 20,
    marginVertical: 10,
  },

  // Header

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

export default styles;
