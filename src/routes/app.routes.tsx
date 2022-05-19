import React from 'react'

import { Lessons } from '../screens/Lessons'
import { NewLesson } from '../screens/NewLesson'
import { UpdateLesson } from '../screens/UpdateLesson'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { useTheme } from 'styled-components'
import { Platform } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function StackRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen 
                name='Lessons'
                component={Lessons}
            />
            <Stack.Screen 
                name='Update'
                component={UpdateLesson}
            />
        </Stack.Navigator>
    )
}

export function AppRoutes() {
    const theme = useTheme()

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.pink,
                tabBarInactiveTintColor: theme.colors.gray,
                tabBarLabelPosition: 'beside-icon',
                tabBarStyle: {
                    backgroundColor: theme.colors.nightBlack,
                    height: 70,
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                },
                tabBarLabelStyle: {
                    fontFamily: theme.fonts.bold,
                    fontSize: RFValue(16)
                }
            }}
        >
            <Tab.Screen 
                name='Matérias'
                component={StackRoutes}
                options={{
                    tabBarIcon: (({ size, color }) => 
                        <FontAwesome 
                            name='book'
                            size={size}
                            color={color}
                        />
                    )
                }}
            />

            <Tab.Screen 
                name='Cadastrar'
                component={NewLesson}
                options={{
                    tabBarIcon: (({ size, color }) => 
                        <FontAwesome 
                            name='plus-square'
                            size={size}
                            color={color}
                        />
                    )                    
                }}
            />
        </Tab.Navigator>
    )
}