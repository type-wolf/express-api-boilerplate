module.exports = {
	transform: {
		globals: ["ts-jest"],
		".(ts|tsx)": "ts-jest",
	},
	testMatch: ["**/__tests__/**/*.test.(ts|tsx)"],
	// globalSetup: "./__tests__/setup.ts",
	// globalTeardown: "./__tests__/teardown.ts",
};
