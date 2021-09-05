// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

const tsConfig = require('./tsconfig.json');

// -----------------------------------------------------------------------------
// Jest config
// -----------------------------------------------------------------------------

module.exports = {
	clearMocks: true,
	collectCoverage: true,
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	snapshotSerializers: ['<rootDir>/node_modules/enzyme-to-json/serializer'],
	cacheDirectory: '<rootDir>/.cache/jest',
	coverageReporters: ['json-summary', 'lcov'],
	displayName: 'tsc',
	testEnvironment: 'node',
	moduleDirectories: ['node_modules', 'src'],
	moduleFileExtensions: ['tsx', 'ts', 'js', 'node'],
	transform: {
		'.(ts|tsx)': ['ts-jest']
	},
	globals: {
		'ts-jest': {
			tsconfig: {
				...tsConfig.compilerOptions,
				jsx: 'react-jsx'
			}
		}
	}
};
