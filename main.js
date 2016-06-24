const React = require('react-native');
const {
	AppRegistry,
	Component,
} = React;
import TaskList from './TaskList';

class PluralTodo extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			todos: [
				{
					task: 'Baba',
				},
				{
					task: 'Dedo',
				},
			],
		};
	}

	onAddStarted() {
		console.log('On add started!');
	}

	render() {
		return (
			<TaskList
				onAddStarted={this.onAddStarted.bind(this)}
				todos={this.state.todos}
			/>
		);
	}
}

AppRegistry.registerComponent('main', () => PluralTodo);
