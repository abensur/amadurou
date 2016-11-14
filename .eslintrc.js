module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'airbnb-base',
  plugins: [
    'html'
  ],
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  'rules': {
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-new': 0,
    'no-console': 0,
    'no-cond-assign': 0,
    'no-unused-vars': 1,
    'no-multi-spaces': 0,
    'object-shorthand': 0,
    'array-callback-return': 0,
    'quote-props': 0,
    'func-names': 0,
    'semi': 1
  },
  'globals': {
    'window': true,
    'document': true
  }
}
