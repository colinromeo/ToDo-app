import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCategoryDetails} from '../../store/slices/movieSlice';
import PopularCard from './PopularCard';

const List = ({category, navigation}) => {
  const dispatch = useDispatch({});
  const {movieDetail} = useSelector(state => state.movie);

  const [movieCategory, setMovieCategory] = useState([]);
//   console.log('products==', category, movieCategory);
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const payload = {
      api_key: 'c232583a145f7b36e8e9e470b9be9c84',
      with_genres: category?.id,
    };
    const resultAction = await dispatch(fetchCategoryDetails(payload));
    if (fetchCategoryDetails.fulfilled.match(resultAction)) {
      //    console.log("resultaction===",resultAction)
      setMovieCategory(resultAction?.payload?.data?.results?.slice(0, 5));
    } else {
      console.log('resultaction failed');
    }
  };

  const Popular = ({item, index}) => {
    //   console.log('popular item===',item)
    return <PopularCard navigation={navigation} item={item} />;
  };

  //   const getDetails = async(data) => {
  //     const resultAction =  await dispatch(fetchCategoryDetails({id:data}))
  //     if(fetchCategoryDetails.fulfilled.match(resultAction)){
  //       navigation.navigate('MovieDetails')
  //     }else{
  //         console.log("error in api")
  //     }
  //   }

  return (
    <View>
      <Text style={styles.heading2}>{category?.name}</Text>
      <FlatList horizontal={true} data={movieCategory} renderItem={Popular} />
    </View>
  );
};

const styles = StyleSheet.create({
  heading2: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 20,
    color: '#000',
  },
});

export default List;
