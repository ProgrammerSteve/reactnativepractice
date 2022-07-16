import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, Image, TouchableWithoutFeedback, FlatList } from 'react-native';

export default function App() {
  const [enteredGoalText,setEnteredGoalText]=useState('');
  const [courseGoals,setCourseGoals]=useState([]);

  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText);
  };
  function addGoalHandler(){
    setCourseGoals(currentCourseGoals=>[...currentCourseGoals,{
      text: enteredGoalText,
      id: Math.random().toString(),
    }]);
  };

  return (   
      <View style={styles.appcontainer}>

          {/* <View style={{flex:1,backgroundColor:'blue', paddingTop:10, paddingBottom:10, display:'flex', justifyContent:'space-around', flexDirection:'row', alignContent:'center'}}>
            <Image source={require('./assets/favicon.png')}/>
            <Text style={{color:'white', textAlign:'center',textAlignVertical:'center', fontSize:24}}>React Native App</Text>
          </View> */}

          <View style={styles.inputContainer}>
              <TextInput 
                style={styles.textInput} 
                placeholder='your course goal!' 
                onChangeText={goalInputHandler}
              />
              <Button 
                title='add goal'
                onPress={addGoalHandler}
              /> 
          </View>

          <View style={styles.goalsContainer}>
              <FlatList data={courseGoals} renderItem={itemData=>{
                return (              
                    <View style={styles.goalItem}>
                      <Text style={styles.goalText}>- {itemData.item.text}</Text>
                    </View>
                ) 
              }}
              keyExtractor={(item,index)=> {
                return item.id;
              }}
              alwaysBounceVertical={false}/>
          </View>

      </View>

  );
}

const styles = StyleSheet.create({
  appcontainer:{
    paddingTop:50,
    paddingHorizontal:16,
    flex:1,

  },
  inputContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:24,
    borderBottomWidth:1,
    borderBottomColor: '#cccccc',
  },
  textInput:{
    borderWidth:1,
    borderColor:'#cccccc',
    width:'70%',
    marginRight:8,
    paddingLeft:8,
  },
  goalsContainer:{
    flex:7,
  },
  goalItem:{
    margin:8,
    borderRadius:6,
    backgroundColor:'#5e0acc',
    padding:8,
  },
  goalText:{
    color:'white',
  },
});
