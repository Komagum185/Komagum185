

// import React, { useState } from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SignInPage from '../screens/SigninPage';
// import MainNavigator from './MainNavigator';

// const AuthStack = createNativeStackNavigator();

// const AppNavigator = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <AuthStack.Navigator>
//       {isLoggedIn ? (
//         <AuthStack.Screen name="Main" component={MainNavigator} />
//       ) : (
//         <AuthStack.Screen
//           name="SignIn"
//           component={SignInPage}
//           options={{
//             headerShown: false, // If you don't want to show the header on the SignInPage
//           }}
//           initialParams={{ onSignIn: () => setIsLoggedIn(true) }}
//         />
//       )}
//     </AuthStack.Navigator>
//   );
// };

// export default AppNavigator;


import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInPage from '../screens/SigninPage';
import MainNavigator from './MainNavigator';

type AppNavigatorProps = {};

const Stack = createNativeStackNavigator();

const AppStackNavigator: React.FC<AppNavigatorProps> = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <Stack.Screen name="Main" component={SignInPage} />
      ) : (
        <Stack.Screen
          name="SignIn"
          component={MainNavigator}
          options={{
            headerShown: false,
          }}
          // initialParams={{ onSignIn: () => setIsLoggedIn(true) }}
        />
      )}
    </Stack.Navigator>
  );
};

export default AppStackNavigator;


