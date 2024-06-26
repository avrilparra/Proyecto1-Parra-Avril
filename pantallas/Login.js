import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Boton from "../componente/Boton";

export default function Login() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Inicia sesión</Text>
            <Text style={styles.subtitulo}>ingresa a tu cuenta</Text>
            <TextInput
                placeholder="email o usuario"
                style={styles.TextInput}
            />
            <TextInput
                style={styles.TextInput}
                placeholder="contraseña"
            />
            <Text style={styles.olvidarcont}>¿Olvidaste tu contraseña?</Text>
            <Boton></Boton>
            <Text style={styles.olvidarcont}>No tengo una cuenta</Text>
            <StatusBar style="auto" />
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
    olvidarcont: {
        marginTop: 10,
    }
});