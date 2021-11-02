import React from 'react';
import { View, Text, TouchableOpacity, TextInput,StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { deleteTodo } from '../../store/slices/todoSlice';
import { useDispatch, useSelector } from "react-redux";

const Card = ({ item, index, onPress }) => {
    const dispatch = useDispatch({});

    const showAlert=()=> {  
        Alert.alert(  
            'Warning',  
            'Do want to Delete?',  
            [  
                {  
                    text: 'Cancel',  
                    onPress: () => console.log('Cancel Pressed'),  
                    style: 'cancel',  
                },  
                {text: 'OK', onPress: ()=>{dispatch(deleteTodo(index))}},  
            ]  
        );  
    }  
    
    return(
        <View style={styles.card} >
            <Text style={{paddingHorizontal: 5}}>{item}</Text>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity
                    onPress={()=>{
                        onPress(item, index)
                    }}
                style={styles.btn2}><Icon name="pencil" size={20} color="#008867" /></TouchableOpacity>
                <TouchableOpacity 
                onPress= {showAlert}
                style={styles.btn2}><Icon name="trash-o" size={20} color="#aa3333" /></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        marginTop: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        height: 45,
        borderWidth: 1,
        borderColor: '#a1a1a1',
        borderRadius: 10,
      },
      btn2: {
        paddingLeft: 5,
        marginHorizontal: 5
      }
})

export default Card;