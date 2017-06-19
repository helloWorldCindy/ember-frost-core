module.exports = {
  extends: ['frost-standard'],
  globals: {
    CSS: true
  },
  rules: {
    'ocd/sort-import-declarations': [
      2,
      {
        localPrefixes: [
          '../',
          './',
          'dummy/',
          'ember-frost-core'
        ]
      }
    ]
  }
}
