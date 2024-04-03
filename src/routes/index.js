import { createNativeStackNavigation } from '@react-navigation/native'

import Wellcome from '../pages/Wellcome';
import Signin from '../pages/Signin';

const Stack = createNativeStackNavigation();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Wellcome" component={Wellcome} />
      <Stack.Screen name="Signin" component={Signin} />
    </Stack.Navigator>
  );
}