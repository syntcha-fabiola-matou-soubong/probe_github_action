exports.config = {
  directConnect: true,
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
  browserName: 'firefox',
  },
  specs: ['todo-spec.js']
};