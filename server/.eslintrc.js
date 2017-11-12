module.exports = {
  extends: 'standard',
 'env': {
   'node': true
  },
  'rules': {
    'indent': ['error', 2, { 'VariableDeclarator': { 'var': 2, 'let': 2, 'const': 3 } }],
    'no-unused-vars': 1,
    'handle-callback-err': 1,
    'one-var': 0,
    'semi': ['error', 'always']
  }
};