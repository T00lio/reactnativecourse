import DirectoryScreen from './DirectoryScreen';
import { Platform, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Constants as Constants } from 'expo-constants';
import CampsiteInfoScreen from './CampsiteInfoScreen';

const DirectoryNavigator = () => {
    const Stack = createStackNavigator();
        return(
            <Stack.Navigator
                initialRouteName='Directory'
                screenOptions={{
                    headerStyle:{
                        backgroundColor: '#5637DD'
                    },
                    headerTintColor: '#fff'
                }}
            >
                <Stack.Screen
                    name='Directory'
                    component={DirectoryScreen}
                    options={{ title: 'Campsite Directory'}}
                
                />
                <Stack.Screen
                    name='CampsiteInfo'
                    component={CampsiteInfoScreen}
                    options={({ route }) => ({
                    title: route.params.campsite.name       
                    })}
                />

            </Stack.Navigator> 
        );
};


const Main = () => {
    return (
        <View 
            style={{ 
                flex: 1, 
                paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBar.Height
            }}
        >
            <DirectoryNavigator /> 
        </View>
    );
};

export default Main;