
import {StyleSheet, View, TextInput, Button, Modal, Image} from 'react-native'
import {useState} from 'react'


function GoalInput(props){
    const [enteredGoalText,setEnteredGoalText]=useState('');

    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText);
      };

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('')
    };
    return (    
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <Image source={require('../assets/favicon.png')} style={styles.image}/>
            <TextInput 
            style={styles.textInput} 
            placeholder='your course goal!' 
            onChangeText={goalInputHandler}
            value={enteredGoalText}
            />
            <View style={styles.buttonContainer}>

                <View style={styles.button}>
                    <Button 
                        title="cancel"
                        onPress={props.onCancel}
                        color="#f31282"
                    />
                </View>
                <View style={styles.button}>
                    <Button 
                        title='add goal'
                        onPress={addGoalHandler}
                        color="#b180f0"
                    />
                </View> 
            </View>

        </View> 
        </Modal>       

    ) 
};
export default GoalInput;

const styles=StyleSheet.create({
    inputContainer:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding:16,
        // marginBottom:24,
        // borderBottomWidth:1,
        // borderBottomColor: '#cccccc',
        backgroundColor:'#311b6b',
      },
      textInput:{
        borderWidth:1,
        borderColor:'#e4d0ff',
        backgroundColor:'#e4d0ff',
        borderRadius:6,
        width:'100%',
        padding:16,
        color:'#120438',
      },
      buttonContainer:{
        flexDirection:'row',
        marginTop:16,
      },
      button:{
        width:100,
        marginHorizontal:8,
      },
      image:{
        width:100,
        height:100,
        margin:20,
      },
})