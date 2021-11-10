import React from 'react';
import {Image, StyleSheet, Pressable} from 'react-native';
import {useDispatch} from 'react-redux';
import {fetchMovieDetails} from '../../store/slices/movieSlice';

let img_url = 'https://image.tmdb.org/t/p/w200';

const MovieCard = ({navigation, item}) => {
  const dispatch = useDispatch({});

  const gotoDetails = async data => {
    // console.log("item data======", data)
    const resultAction = await dispatch(fetchMovieDetails({id: data}));
    if (fetchMovieDetails.fulfilled.match(resultAction)) {
      // console.log('movieDetails===',resultAction)
      navigation.navigate('MovieDetails');
    } else {
      console.log('error in api======', resultAction);
    }
  };
  // console.log("item===",item)
  return (
    <Pressable style={styles.card} onPress={() => gotoDetails(item?.id)}>
      <Image
        style={styles.cardImage}
        source={{uri: img_url + item?.poster_path}}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 240,
    height: 380,
    elevation: 5,
    borderRadius: 20,
    marginRight: 25,
  },
  cardImage: {
    width: 240,
    height: 380,
    borderRadius: 20,
  },
});

export default MovieCard;
