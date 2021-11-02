import React,{useState, useEffect} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity, TextInput,StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Card from '../components/Card';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from '../../store/slices/todoSlice';


function todo() {
    const dispatch = useDispatch({});
    const { todoData } = useSelector((state) => state.todo);
    //console.log(todoData)

    const [isEdit, setIsEdit] = useState(false)
    const [editValue, setEditValue] = useState('')
    const [indexValue, setIndexValue] = useState('')
    console.log(isEdit,editValue)

    const validationSchema = yup.object({
        todoList: yup.string().required("This field is required"),
    });
    
    const formik = useFormik({
        initialValues: {
            todoList:isEdit? editValue: ''
        },
        validationSchema,
        enableReinitialize:true,
        onSubmit: values => {
            // console.log("onsubmit====",values)
           
            addTodoList(values)
            
        }
    })

    const addTodoList = async(data) => {
        if(isEdit){
            const params = {
                index:indexValue, 
                data: data
            }
            await dispatch(updateTodo(params))
            setIsEdit(false)
            formik.resetForm()
        }else{
            // console.log("array====", data)
            await dispatch(addTodo(data))
            formik.resetForm()
        }
        }
        

    const editTodoList = (data, index) => {
        // console.log("passed",data,index)
        setEditValue(data)
        setIndexValue(index)
        setIsEdit(true)
    }

    return(
        <View style={styles.container}>
            <View style={styles.input} >
                <TextInput style={styles.addText} placeholder= "Enter ToDo"
                value={formik.values.todoList}
                onChangeText={formik.handleChange('todoList')}
                />
                <TouchableOpacity
                    onPress={formik.handleSubmit}
                    style={styles.btn}>
                    {isEdit?<Icon name="pencil" size={20} color="#008867" />:<Icon name="plus-circle" size={20} color="#444444" />}
                    
                </TouchableOpacity>
                
            </View>
            <View style={styles.error}>
            {formik.errors.todoList && <Text style={styles.errortxt} >{formik.errors.todoList}</Text>}
            </View>
            <FlatList 
                data={todoData}
                keyExtractor={(item, index) => item+index.toString}
                renderItem={({ item, index }) => <Card item={item} index={index} 
                    onPress={editTodoList}
                />}
            />
        </View>
    )
}

const Stack = createNativeStackNavigator();

const MainStack = () => {

    return(
        <Stack.Navigator>
            <Stack.Screen name="Todo" component={todo} 
                options={{headerStyle: {
                    backgroundColor: "#4588cc"
                }}}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1
    },
    input: {
      marginTop: 30,
      flexDirection: 'row',
      justifyContent: 'center',
      alignSelf: 'center'
    },
    addText: {
      width: '70%',
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      height: 40,
      borderWidth: 1,
      padding: 5,
      borderColor: '#a1a1a1',
      justifyContent: 'center',
      alignItems: 'center'
    },
    btn: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      width: 40,
      borderWidth: 1,
      borderColor: '#a1a1a1',
      backgroundColor: '#dcdcdc',
      borderBottomRightRadius: 10,
      borderTopRightRadius: 10,
    },
    error: {
        alignSelf: 'center',
        width: '80%',
    },
    errortxt: { 
        color: "#880000"
    },
    
  })

  export default MainStack;