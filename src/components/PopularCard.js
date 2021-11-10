import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {fetchMovieDetails} from '../../store/slices/movieSlice';

let img_url = 'https://image.tmdb.org/t/p/w200';

const PopularCard = ({navigation, item}) => {
  // console.log('popular===',item)
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

  return (
    <Pressable onPress={() => gotoDetails(item?.id)}>
      <Image
        resizeMode="contain"
        style={styles.poster}
        source={{uri: img_url + item?.poster_path}}
      />
      {/* <Image style={styles.poster} source={require('../assets/images/moonlight.jpg')} /> */}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  poster: {
    width: 120,
    height: 170,
    marginRight: 20,
    borderRadius: 10,
    elevation: 3,
  },
});

export default PopularCard;
