import React,{useEffect} from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsList } from '../../store/slices/productsSlice';

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
            <Pressable onPress={() => navigation.navigate('Details')} style={styles.card}>
                <Image 
                    style={styles.productImage}  
                    source={require('../assets/images/homedecorationpot.jpg')}
                />
                <View style= {styles.cardtxt}>
                    <Text>Categories</Text>
                    <Text numberOfLines={2} style={styles.productCaption}>Home Decoration Pot</Text>
                    <Text>Rating 4/5</Text>
                    <Text style={styles.price}>$ 15.00</Text>
                </View>
                
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        elevation: 5,
        margin: 10,
        backgroundColor: 'white',
        borderRadius:5,
        padding: 5
    },
    productImage: {
        height: 140,
        width: 140
    },
    cardtxt: {
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        paddingRight: 30,
        width: '70%'
    },
    productCaption: {
        color: '#333',
        fontSize: 18,
        width: '90%',
        fontWeight: '600'
    },
    price: {
        fontWeight: '700',
        color: '#444',
        fontSize: 16
    }
})

export default Product
