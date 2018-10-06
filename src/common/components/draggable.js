import React, { Component } from "react";
import {
	StyleSheet,
	View,
	PanResponder,
	Animated,
	Dimensions
} from "react-native";

export default class Draggable extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			showDraggable: true,
			dropAreaValues: null,
			pan: new Animated.ValueXY(),
			opacity: new Animated.Value(1)
		};
	}

	onLayout = (e) => {
		/*console.log(e.nativeEvent)
		console.log(e.nativeEvent.layout.width)
		console.log(e.nativeEvent.layout.height)
		console.log(e.nativeEvent.layout.x)
		console.log(e.nativeEvent.layout.y)*/
	}

	onPanResponderStart = (e, gestureState) => {
		this.props.isMoving(true);
	}

	componentDidMount () {
		//console.log(this.props);
	}

	componentWillMount() {

		//console.log(Dimensions.get('window').width, Dimensions.get('window').height);
		
		//onPanResponderMove -> Calcular cuando se entra en zona de drop para hacer el boton de basura mas grande
		//onPanResponderRelease -> Mandar evento para eliminar item


		this._val = { x:0, y:0 }
		this.state.pan.addListener((value) => this._val = value);
		this.panResponder = PanResponder.create({
			onStartShouldSetPanResponder: (e, gesture) => true,
			onPanResponderMove: Animated.event([null, { dx: this.state.pan.x, dy: this.state.pan.y }]),
			onPanResponderStart: this.onPanResponderStart,
			/*onPanResponderRelease: (e, gesture) => {
				console.log('release', e, gesture);
				Animated.spring(this.state.pan, {
					toValue: { x: 0, y: 0 },
					friction: 5
				}).start();
			},*/
			onPanResponderRelease: (e, gesture) => {
				
				this.props.isMoving(false);

				if (this.isDropArea(e, gesture)) {
					/*Animated.timing(this.state.opacity, {
						toValue: 0,
						duration: 1000
					}).start(() =>
					this.setState({
						showDraggable: false
					})
					);*/
					console.log('si');
				} else {
					console.log('no');
				}
				Animated.spring(this.state.pan, {
					toValue: { x: 0, y: 0 },
					friction: 5
				}).start();
			}
		});
		this.state.pan.setValue({ x:0, y:0})
	}

	isDropArea(e, gesture) {
		console.log(gesture);
		//Revisar zona dropable

		console.log(this.props.dropZone);
		console.log(gesture.dx, this.props.dropZone.x, this.props.dropZone.width)
		console.log(gesture.dy, this.props.dropZone.y, this.props.dropZone.height)

		let dropZoneIncreasedWidth = this.props.dropZone.width * 1;
		let dropZoneIncreasedHeight = this.props.dropZone.height * 1;

		if (gesture.dx > this.props.dropZone.x &&
			gesture.dx < this.props.dropZone.x + dropZoneIncreasedWidth &&
			gesture.dy > this.props.dropZone.y &&
			gesture.dy < this.props.dropZone.y + dropZoneIncreasedHeight) 
		{
			return true;
		}

		return false;

	}

	render() {
		const panStyle = {
			transform: this.state.pan.getTranslateTransform(),
		}
		return (
			<Animated.View
			{...this.panResponder.panHandlers}
			style = { panStyle }
			onLayout = {this.onLayout}
			>
			{this.props.children}
			</Animated.View>
			);
	}
}

let CIRCLE_RADIUS = 30;
let styles = StyleSheet.create({
	circle: {
		backgroundColor: "skyblue",
		width: CIRCLE_RADIUS * 2,
		height: CIRCLE_RADIUS * 2,
		borderRadius: CIRCLE_RADIUS
	}
});