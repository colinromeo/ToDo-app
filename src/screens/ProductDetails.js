import React,{useEffect} from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import { fetchSingleProduct } from '../../store/slices/productsSlice';
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = ({item}) => {
    const dispatch = useDispatch({});
    const { singleProduct } = useSelector((state) => state.product);
    console.log("singleProduct==",singleProduct)
    

    return (
        <View style={styles.container}>
            <Image 
                style={styles.productImage}  
                source={{uri:singleProduct?.image}}
                resizeMode={"cover"}
            />
            <Text style={styles.caption}>{singleProduct?.title}</Text>
            <Text>{singleProduct?.category}</Text>
            <Text style={styles.price}>$ {singleProduct?.price}</Text>
            <Text style={styles.des}>Description</Text>
            <Text>{singleProduct?.description}</Text>
            <Pressable style={styles.btn}><Text style={styles.btntext}>Add To Cart</Text></Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    productImage: {
        height: '45%',
        width: '100%'
    },
    caption: {
        fontWeight: '600',
        color: '#000',
        marginTop: 25,
        fontSize: 18
    },
    price: {
        fontSize: 20,
        marginVertical: 25,
        color: '#ff5555'
    },
    des: {
        fontWeight: '600',
        color: '#000'
    },
    btn: {
        backgroundColor: '#ff7777',
        margin: 20,
        height: 35,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btntext: {
        color: '#fff',
        fontWeight: '600',
    }
})

export default ProductDetails
