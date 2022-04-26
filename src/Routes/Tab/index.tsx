import React from 'react';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeInteligence from '../../Pages/Home/index';
import ProfileInteligence from '../../Pages/Profile/index';
import TransferInteligence from '../../Pages/Transfer/index';

import { TabBar } from '../../Components';
const { Navigator, Screen } = createBottomTabNavigator();

export default function () {
    return (
        <Navigator
            tabBar={() => (<TabBar />)}
        >
            <Screen
                name='HomeInteligence'
                component={HomeInteligence}
                options={{
                    headerShown: false
                }}
            />
            <Screen
                name='TransferInteligence'
                component={TransferInteligence}
                options={{
                    headerShown: false
                }}
            />
            <Screen
                name='ProfileInteligence'
                component={ProfileInteligence}
                options={{
                    headerShown: false
                }}
            />
        </Navigator>
    )
}