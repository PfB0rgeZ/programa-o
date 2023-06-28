

import * as React from 'react';
import { View, Text, Image, Button,TextInput,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function IndexScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>animals</Text>
      <Image source={require("./assets/mareco.png")}></Image>
      <Text>
        pato pato ganso
        {"\n"}
        pato pato ganso
        {"\n"}
        pato pato ganso
        {"\n"}
        pato pato ganso
      </Text>
      <Button
        title="sobre"
        onPress={() => navigation.navigate('sobre')}
      />
    </View>
  );
}
function sobrescreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>animals</Text>
      <Image source={require("./assets/mareco.png")}></Image>
      <Text>
        pato pato ganso
        {"\n"}
        pato pato ganso
        {"\n"}
        pato pato ganso
        {"\n"}
        pato pato ganso
      </Text>
      <Button
        title="cadastro"
        onPress={() => navigation.navigate('cadastro')}
      />
    </View>
  );
}

function cadastroscreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

<Image source={require("./assets/mareco.png")}></Image>
<Text>Animals</Text>


       <TextInput placeholder='Nome' style={{
      height: 45,
      width: 360,
      backgroundColor:'#ffff',
      borderWidth:0.5,
      margin: 10,
      }}></TextInput>
      
      <TextInput placeholder='email' style={{
      height: 45,
      width: 360,
      backgroundColor:'#ffff',
      borderWidth:0.5,
      margin: 10,
      }}></TextInput>
      
      <TextInput placeholder='data de nacimento' style={{
      height: 45,
      width: 360,
      backgroundColor:'#ffff',
      borderWidth:0.5,
      margin: 10,
      }}></TextInput>
      
      <TextInput placeholder='CPF' style={{
      height: 45,
      width: 360,
      backgroundColor:'#ffff',
      borderWidth:0.5,
      margin: 10,
      }}></TextInput>
      

<Button
        title="continuar"
        onPress={() => navigation.navigate('home')}
      />

    </View>
  );
}


function homeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <Image style={{width: 66,
    height: 58}} source={require("./assets/mareco.png")}></Image>
      <Text>animals</Text>




      <Image  style={{   width: 66,
    height: 58,right:35}}  source={require("./assets/panda.png")}></Image>

      <Image style={{   width: 66,
    height: 58,bottom:58,left:35}} source={require("./assets/arara.png")}></Image>

<Text style={{bottom:50}}>panda    arara</Text>

<Image  style={{   width: 66,
    height: 58,right:35}}  source={require("./assets/raposa.png")}></Image>

      <Image style={{   width: 66,
    height: 58,bottom:58,left:35}} source={require("./assets/tartaruga.png")}></Image>

<Text style={{bottom:50}}>raposa    tartaruga</Text>

<Image  style={{   width: 66,
    height: 58,right:35}}  source={require("./assets/zebras.png")}></Image>

      <Image style={{   width: 66,
    height: 58,bottom:58,left:35}} source={require("./assets/tigre.png")}></Image>

<Text style={{bottom:50}}>zebra    tigre</Text>

    <Image  style={{   width: 66,
    height: 58,right:35}}  source={require("./assets/urangotango.png")}></Image>

      <Image style={{   width: 66,
    height: 58,bottom:58,left:35}} source={require("./assets/zorelhudo.png")}></Image>
        <Text style={{bottom:50}}>orangotango   Feneco</Text>
      <Button
        title="voltar para o index"
        onPress={() => navigation.navigate('index')}
      />
    </View>
  );
}





const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="index" component={IndexScreen} />
        <Stack.Screen name="sobre" component={sobrescreen} />
        <Stack.Screen name="cadastro" component={cadastroscreen} />
        <Stack.Screen name="home" component={homeScreen} />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;