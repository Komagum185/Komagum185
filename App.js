import { NavigationContainer } from '@react-navigation/native';
import AppStackNavigator from './navigation/AppStackNavigator'

const App = () => {
  return (
    <NavigationContainer>
  
      <AppStackNavigator />
  
    </NavigationContainer>
  );
};


export default App;

