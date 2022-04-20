import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './Tab/index';

export default function () {
    return (
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    )
}