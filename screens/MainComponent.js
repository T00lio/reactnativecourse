import DirectoryScreen from './DirectoryScreen';
import { Platform, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Constants } from 'expo-constants';

const DirectoryNavigator = () => {
    const Stack = createStackNavigator();
        return(
            <StackNavigator
                initialRouteName='Directory'
                screenOptions={{
                    headerStyle:{
                        backgroundColor: '#5637DD'
                    },
                    headerTintColor: '#fff'
                }}
            >
                <StackScreen
                name='Directory'
                component={DirectoryScreen}
                options={{ title: 'Campsite Directory'}}
                
                />
                <StackScreen
                name='CampsiteInfo'
                component={CampsiteInfoScreen}
                options={({ route }) => ({
                   title: route.params.campsite.name       
                })}
                />

            </StackNavigator>
        );
};


const Main = () => {
    return (
        <View 
            style={{ 
                flex: 1, 
                paddingTop: 
                    Platform.OS === 'ios' ? 0 : Constants.statusBarHeight 
            }}
        >
            <DirectoryNavigator /> 
        </View>
    );
};

export default Main;