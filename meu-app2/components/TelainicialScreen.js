import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";

function TelainicialScreen({ route, navigation }) {
    const { email } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.mensagem}>Bem-vindo, {email}!</Text>
            <Button
                title="Voltar"
                onPress={() => navigation.navigate("Login")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    mensagem: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 20,
        textAlign: 'center'
    }
})

export default TelainicialScreen;
