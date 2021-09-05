const { configure } = require('enzyme');
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');

configure({ adapter: new Adapter() });

// Fail tests on any warning
console.error = (message) => {
	throw new Error(message);
};
