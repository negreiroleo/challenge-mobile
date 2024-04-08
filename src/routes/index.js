import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Wellcome from '../pages/Wellcome';
import Signin from '../pages/Signin';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Wellcome" component={Wellcome} options={{headerShown: false}} />
      <Stack.Screen name="Signin" component={Signin} options={{headerShown: false}} />
      <Stack.Screen name="Homepage" component={Homepage} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}
