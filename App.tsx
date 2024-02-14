
import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    useColorScheme,
} from 'react-native';
import config from 'react-native-config';

const iStyles = StyleSheet.create({
    screenContainer: {
        flex: 1,
    },
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    greetingContainer: {
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
    },
    font: {
        fontWeight: '700',
    },
    greetingText: {
        color: 'black',
        marginTop: 5,
    },
});

function App(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundColor = isDarkMode ? 'black' : 'white';

    console.log(config)

    const isFrom = config.APP_CONFIG ?? '';



    return (
        <SafeAreaView style={[iStyles.screenContainer, { backgroundColor }]}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundColor}
            />
            <View style={iStyles.container}>
                <View style={iStyles.greetingContainer}>
                    <Text style={[iStyles.greetingText, iStyles.font]}>
                        Hi Ammar Abid,
                    </Text>
                    <Text style={[iStyles.greetingText, iStyles.font]}>
                        {`I am from ${isFrom}`}
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default App;