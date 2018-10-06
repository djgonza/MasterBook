import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import Home from './../screens/home';
import Login from './../screens/login';
import Init from './../screens/init';
import Registry from './../screens/registry';

import AddService from './../screens/add-service';
import ServicesList from './../screens/services-list';

import ShowService from './../screens/show-service';

import Settings from './../screens/settings';


// const Modal = createStackNavigator(
// {
// 	ShowService
// },
// {
// 	//mode: 'modal',
// 	//headerMode: 'none',
// 	cardStyle: {
// 		backgroundColor: 'white'
// 	},
// 	navigationOptions: {
// 		gesturesEnabled: true,
// 	}
// }
// )

const ServicesNavigator = createStackNavigator({
	ServicesList,
	AddService,
	ShowService,
	Settings
},
{
	//headerMode: 'screen',
});

const AppNavigator = createSwitchNavigator({
	Login,
	Registry,
	Init,
	App: ServicesNavigator
},{
	initialRouteName: 'Init',
})



export default AppNavigator;