import React ,{ useState, useEffect }from 'react';
import { Appbar, TextInput, Button } from 'react-native-paper';
import firebase from '../Firebase';
import { FlatList, } from 'react-native-gesture-handler';
import MedTeams from './medTeam';
import { View } from 'react-native';

function medTeams () {
    const [ todo, setTodo ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ todos, setTodos ] = useState([]);
    const db = firebase.database().ref('todos/')

    async function addTodo(){
        await db.push({
            title: todo,
            description: description,
            complete: false,
        });
        setTodo('')
        setDescription('')
    }
        
    useEffect(() => {
        return db.on('value',(snapshot) => {
          const list = [];

          snapshot.forEach(doc => {
            console.log("doc", doc.val())
            list.push({
             doc,
            });
            console.log("list", list)
          });
    
          setTodos(list);
    
         
        });
    }, [] );
       

    return(
        <View style={{flex:1, width:'100%'}} >
        <FlatList 
            style={{flex:1, width:'100%'}}
            data={todos}
            keyExtractor={(item) => item.key} renderItem={({item}) =><MedTeams {...item}  /> }
            
        />

        <TextInput label={'New TODO'} value={todo} onChangeText={setTodo} />
        <TextInput label={'Description'} value={description} onChangeText={setDescription} />
        <Button onPress={() => addTodo()}> Add TODO </Button>
        
        </View>
    )
}
  

export default medTeams;