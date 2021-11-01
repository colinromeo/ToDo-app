import React from 'react';
import { View, Text, TouchableOpacity, TextInput,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headertxt}>ToDo</Text>
      </View>
      <View style={styles.input} >
        <TextInput style={styles.addText} placeholder='Enter todo' />
        <TouchableOpacity style={styles.btn}><Icon name="plus-circle" size={20} color="#444444" /></TouchableOpacity>
      </View>
      <View style={{marginTop: 10}}>
      <View style={styles.card} >
        <Text>Item 3</Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={styles.btn2}><Icon name="pencil" size={20} color="#008867" /></TouchableOpacity>
          <TouchableOpacity style={styles.btn2}><Icon name="trash-o" size={20} color="#aa3333" /></TouchableOpacity>
        </View>
      </View>
      <View style={styles.card} >
        <Text>Item 2</Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={styles.btn2}><Icon name="pencil" size={20} color="#008867" /></TouchableOpacity>
          <TouchableOpacity style={styles.btn2}><Icon name="trash-o" size={20} color="#aa3333" /></TouchableOpacity>
        </View>
      </View>
      <View style={styles.card} >
        <Text>Item 1</Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={styles.btn2}><Icon name="pencil" size={20} color="#008867" /></TouchableOpacity>
          <TouchableOpacity style={styles.btn2}><Icon name="trash-o" size={20} color="#aa3333" /></TouchableOpacity>
        </View>
      </View>
      </View>
     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  header: {
    width: '100%',
    height: 40,
    backgroundColor: '#4588cc',
    justifyContent: 'center'
  },
  headertxt: {
    fontSize: 18,
    marginLeft: 15,
    color: '#fff'
  },
  input: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  addText: {
    width: '70%',
    height: 30,
    borderWidth: 1,
    padding: 5,
    borderColor: '#a1a1a1',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 30,
    borderWidth: 1,
    borderColor: '#a1a1a1',
    backgroundColor: '#dcdcdc'
  },
  card: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    width: '78%',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    height: 30,
    borderWidth: 1,
    borderColor: '#a1a1a1'
  },
  btn2: {
    paddingLeft: 5
  }
})

export default App;