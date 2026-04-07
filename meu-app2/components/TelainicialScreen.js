import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

function TelainicialScreen({ route, navigation }) {
    const { email } = route.params;
    const userName = email.split('@')[0];

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.hero}>Bem-vindo</Text>
                <Text style={styles.welcome}>
                    {userName.charAt(0).toUpperCase() + userName.slice(1)}
                </Text>
                <Text style={styles.subtitle}>
                    Sua conta {email} foi autenticada com sucesso
                </Text>
                
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate("Login")}
                    activeOpacity={0.8}
                >
                    <Text style={styles.buttonText}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24
    },
    content: {
        width: '100%',
        maxWidth: 400,
        alignItems: 'center'
    },
    hero: {
        fontSize: 56,
        fontWeight: '600',
        color: '#ffffff',
        marginBottom: 8,
        letterSpacing: -0.5,
        textAlign: 'center'
    },
    welcome: {
        fontSize: 28,
        fontWeight: '400',
        color: '#0071e3',
        marginBottom: 16,
        textAlign: 'center',
        letterSpacing: 0.196
    },
    subtitle: {
        fontSize: 17,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.7)',
        marginBottom: 40,
        lineHeight: 24,
        textAlign: 'center'
    },
    button: {
        width: '100%',
        backgroundColor: '#0071e3',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center'
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 17,
        fontWeight: '400'
    }
})

export default TelainicialScreen;
