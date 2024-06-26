import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Boton from "../componente/Boton";

export default function Register() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registrarse</Text>
      <Text style={styles.subtitulo}>Crea una cuenta</Text>
      <TextInput 
        placeholder="tu nombre de usuario"  
        style={styles.TextInput}    
      />
      <TextInput 

        placeholder="email@gmail.com"  
        style={styles.TextInput}    
      />
      <TextInput 
        style={styles.TextInput}   
        placeholder="contraseña"      
      />
      <TextInput 
        style={styles.TextInput}   
        placeholder="confirmar contraseña"      
      />
      <Boton></Boton>
      <Text style={styles.olvidarcont}>Ya tengo una cuenta</Text>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 60,
    color: '#000',
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 30,
    color: 'pink',
  },
  TextInput: {
    borderWidth: 1,
    borderColor: 'pink',
    width: '70%',
    height: 50,
    padding: 10,
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  olvidarcont:{
    marginTop: 10,
  }
});
