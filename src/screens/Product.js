import React,{useEffect} from 'react'
import { View, Text, StyleSheet, FlatList, Pressable, } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsList } from '../../store/slices/productsSlice';
import ProductItems from '../components/ProductItems';

const Product = ({navigation}) => {
    const dispatch = useDispatch({});
    const { products } = useSelector((state) => state.product);
    console.log("products==",products)
    useEffect(() => {
        fetchProduct()
    },[])

    const fetchProduct = async() => {
        await dispatch(fetchProductsList())
    }

    return (
        <View style={styles.container}>

            <FlatList 
                data={products}
                keyExtractor={(item, index) => index.toString}
                renderItem={({ item, index }) => <ProductItems navigation={navigation} item={item} index={index} 
                
                />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    
})

export default Product
