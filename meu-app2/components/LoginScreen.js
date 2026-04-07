import React, { useState } from "react";
import { Button, Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";

function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = () => {
        if (email.trim()) {
            navigation.navigate("TelainicialScreen", { email: email });
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.hero}>Login</Text>
                <Text style={styles.subtitle}>Acesse sua conta</Text>
                
                <View style={styles.inputGroup}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="rgba(255, 255, 255, 0.5)"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                    
                    <TextInput
                        style={[styles.input, styles.inputMargin]}
                        placeholder="Senha"
                        placeholderTextColor="rgba(255, 255, 255, 0.5)"
                        value={senha}
                        onChangeText={setSenha}
                        secureTextEntry={true}
                    />
                </View>
                
                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleLogin}
                    activeOpacity={0.8}
                >
                    <Text style={styles.buttonText}>Login</Text>
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
        maxWidth: 400
    },
    hero: {
        fontSize: 56,
        fontWeight: '600',
        color: '#ffffff',
        marginBottom: 8,
        letterSpacing: -0.5
    },
    subtitle: {
        fontSize: 17,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.7)',
        marginBottom: 40,
        lineHeight: 24
    },
    inputGroup: {
        marginBottom: 32
    },
    input: {
        backgroundColor: '#272729',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        color: '#ffffff',
        padding: 12,
        borderRadius: 8,
        fontSize: 17,
        fontWeight: '400'
    },
    inputMargin: {
        marginTop: 12
    },
    button: {
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

export default LoginScreen;
