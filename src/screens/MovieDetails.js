import React, {useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Pressable,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMovieDetails} from '../../store/slices/movieSlice';
import Cast from '../components/Cast';

let img_url = 'https://image.tmdb.org/t/p/w200';
let img_back_url = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = ({navigation}) => {
  const dispatch = useDispatch({});
  const {movieDetails} = useSelector(state => state.movie);
  console.log('movieDetails===', movieDetails);

  useEffect(() => {
    fetchSingleMovie();
  }, []);

  const fetchSingleMovie = async () => {
    await dispatch(fetchMovieDetails(payload));
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image
        style={styles.wallpaper}
        source={{uri: img_back_url + movieDetails?.backdrop_path}}
      />
      <Pressable
        onPress={() => navigation.goBack()}
        style={styles.iconcontainer}>
        <Icon name="chevron-back" size={25} />
      </Pressable>
      <View style={styles.head}>
        {/* <Image style={styles.cardImage} source={require('../assets/images/moonlight.jpg')} /> */}
        <Image
          style={styles.cardImage}
          source={{uri: img_url + movieDetails?.poster_path}}
        />
        <View>
          <Text style={styles.title} numberOfLines={2}>
            {movieDetails?.original_title}
          </Text>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginLeft: 5}}>
            <Icon name="calendar" size={25} />
            <Text style={{marginLeft: 5}}>{movieDetails?.release_date}</Text>
          </View>
        </View>
      </View>
      <View style={styles.details}>
        <Text style={styles.heading}>OverView</Text>
        <Text>{movieDetails?.overview}</Text>

        <View>
          <Text style={styles.heading}>Production Companies</Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={movieDetails?.production_companies}
            renderItem={({item, index}) => <Cast item={item} />}
          />
        </View>
        <View>
          <Text style={styles.heading}>Production Countries</Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={movieDetails?.production_countries}
            renderItem={({item, index}) => (
              <Text style={{paddingRight: 20}}>{item?.name}</Text>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wallpaper: {
    width: '100%',
    height: 340,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    width: 250,
    padding: 10,
    color: '#000',
  },
  details: {
    marginTop: 90,
    padding: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  head: {
    flexDirection: 'row',
    position: 'absolute',
    width: '100%',
    marginTop: 280,
    padding: 10,
    alignItems: 'flex-end',
  },
  cardImage: {
    width: 100,
    height: 150,
    borderRadius: 10,
    elevation: 5,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 15,
    color: '#000',
  },
  iconcontainer: {
    backgroundColor: '#ffffff50',
    height: 30,
    width: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    margin: 20,
  },
});

export default MovieDetails;
