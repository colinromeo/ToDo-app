import React from 'react'
import { View, FlatList,StyleSheet } from 'react-native'
import { useSelector } from 'react-redux';
import ProductItems from '../components/ProductItems';



const Cart = ({navigation}) => {
    const { singleProduct, cart } = useSelector((state) => state.product);
    return (
        <View style={styles.container}>

            <FlatList 
                data={cart}
                keyExtractor={(item, index) => index.toString}
                renderItem={({ item, index }) => <ProductItems navigation={navigation} cartFlag={true} item={item} index={index}
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

export default Cart
