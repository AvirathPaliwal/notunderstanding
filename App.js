
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity ,Image } from 'react-native';
import dictionary from './localdb';
import {Header}  from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {TextInput} from 'react-native'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      word: '',
      lexicalCategory: '',
      meaning: '',
    };
  return (
    <SafeAreaProvider>
    <View style={styles.container}>
    <Header
     backgroundColor={'#542E71'}
         leftComponent={{ icon: 'menu',size:30, color: '#FB3640' }}
          centerComponent={{text:'DICTIONARY',style:{color:'#FB3640',fontSize:30}}}
         rightComponent={{ icon: 'home', size:30,color: '#FB3640'}}
         />
         <Text style={styles.enter}>ENTER A WORD </Text>
         <TextInput
          style={styles.inputBox}
          autoCorrect="true"
          onChangeText={(text) => {
            this.setState({ word: text });
          }}
          value={this.state.word}
          />
    </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  enter:{
    flex: 0.5,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: 'blue',
  },
  inputBox:{
    marginTop: -500,
    width: '80%',
    textAlign: 'center',
    height: 40,
    alignSelf: 'center',
    borderWidth: 4,
    borderRadius:50,
    backgroundColor:'#FDCA40',
    color:'#542E71',
    fontSize:30,
  }
});
