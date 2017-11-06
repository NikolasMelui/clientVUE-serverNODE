module.exports = {
  extends: 'standard',
  'rules': {
    'indent': ["error", 2, { "VariableDeclarator": { "var": 2, "let": 2, "const": 3 } }],
    'no-unused-vars': 1,
    'one-var': 0,
    'semi': ['error', 'always'],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
};