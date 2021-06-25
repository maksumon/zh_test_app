import React from 'react'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Button,
  Linking
} from 'react-native'

const onButtonTap = () => {
    Linking.canOpenURL('https://www.vita.net.my').then(supported => {
        if (supported) {
            Linking.openURL('https://www.vita.net.my')
        } else {
            console.log('Cannot open URL: https://www.vita.net.my')
        }
    })
}

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar/>
            <View style={styles.centerButton}>
                <Button
                    onPress={onButtonTap}
                    title="Tap Here"
                    color="#007500"
                    accessibilityLabel="Tap to open https://www.vita.net.my URL"
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16
    },
    centerButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default HomeScreen