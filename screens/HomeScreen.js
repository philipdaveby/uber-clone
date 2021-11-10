import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';

import NavOptions from '../components/NavOptions';
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={tw `bg-white h-full`}>
            <View style={tw `p-5`}>
                <Image 
                style={{width: 100, height: 100, resizeMode: 'contain'}}
                source={{
                    uri: 'https://links.papareact.com/gzs'
                    }}/>

                    <GooglePlacesAutocomplete 
                        styles={{
                            container: {
                                flex: 0
                            },
                            textInput: {
                                fontSize: 18
                            }
                        }}
                        onPress={(data, details = null) => {
                            dispatch(setOrigin({
                                location: details.geometry.location,
                                description: details.description
                            }))

                            dispatch(setDestination(null))
                        }}
                        fetchDetails={true}
                        returnKeyType={'search'}
                        enablePoweredByContainer={false}
                        minLength={2}
                        query={{
                            key: GOOGLE_MAPS_APIKEY,
                            language:'en'
                        }}
                        placeholder='Where From?'
                        nearbyPlacesAPI='GooglePlacesSearch'
                        debounce={400}
                    />

                <NavOptions />
                <NavFavourites />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
    }, 
    textInput: {
        fontSize: 18,
    },
    text: {
        color: 'blue'
    }
})

export default HomeScreen
