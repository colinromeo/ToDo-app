import React, {useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  fetchMovieCategories,
  fetchNowPlayingMovies,
} from '../../store/slices/movieSlice';
import {useDispatch, useSelector} from 'react-redux';
import List from '../components/List';
import MovieCard from '../components/MovieCard';

const Movies = ({navigation}) => {
  const dispatch = useDispatch({});
  const {movieCategories, nowPlaying} = useSelector(state => state.movie);
  // console.log('products==', nowPlaying);
  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    const payload = {api_key: 'c232583a145f7b36e8e9e470b9be9c84'};
    await dispatch(fetchNowPlayingMovies(payload));
    await dispatch(fetchMovieCategories(payload));
  };

  const renderItem = ({item}) => (
    <MovieCard item={item} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/moonlight.jpg')}
        resizeMode="cover"
        blurRadius={5}
        style={styles.image}>
        <View style={styles.searchbar}>
          <TextInput
            placeholder="Search"
            style={styles.search}
            inlineImageRight="search_icon"
          />
          <Pressable style={styles.searchbtn}>
            <Icon name="search" size={30} color="#ccc" />
          </Pressable>
        </View>
        <ScrollView style={styles.select} showsVerticalScrollIndicator={false}>
          <Text style={styles.heading}>Now Playing</Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={nowPlaying}
            renderItem={renderItem}
          />
          <View style={{marginBottom: 30}}>
            <FlatList
              data={movieCategories?.slice(0, 5)}
              renderItem={({item, index}) => {
                //   console.log("item===",item)
                return <List navigation={navigation} category={item} />;
              }}
            />
            {/* <List navigation={navigation} category="Action"/>  */}
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  select: {
    flex: 1,
    padding: 20,
    marginTop: 10,
    height: '100%',
  },
  image: {
    width: '100%',
    height: '55%',

    flex: 1,
  },
  searchbar: {
    flexDirection: 'row',
    borderWidth: 1,
    width: '90%',
    borderColor: '#96969680',
    backgroundColor: '#96969680',
    borderRadius: 25,
    alignSelf: 'center',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  search: {
    width: '90%',
    paddingHorizontal: 10,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  searchbtn: {
    flex: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 15,
    color: '#fff',
  },
});

export default Movies;
