module.exports = {
  env:{
    es6:true,
    browser:true,
  }
 rules: {
   'jest/consistent-test-it': ['error', { fn: 'test' }],
   'no-await-in-loop': 'off',
   'no-restricted-syntax': 'off',
 },
};
