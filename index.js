/* eslint-env node */
'use strict';

var filterInitializers = require('fastboot-filter-initializers');

module.exports = {
  name: 'emberfire-chat',

  preconcatTree(tree) {
    return filterInitializers(tree, this.app.name);
  }
};
