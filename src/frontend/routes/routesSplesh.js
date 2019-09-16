import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SpleshScreen from '../pages/spleshScreen';
import Main from './routesPrincipal';

export default createAppContainer(
    createSwitchNavigator({
        SpleshScreen,
        Main,
    })
)