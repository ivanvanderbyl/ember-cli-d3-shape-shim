/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'd3-shape',

  treeForAddon: function() {
    var packagePath = path.join(this.pathToPackage('ember-cli-d3-shape-shim'), 'node_modules', 'd3-shape');
    var packageTree = this.treeGenerator(packagePath);
    return this._super.treeForAddon.call(this, packageTree);
  },

  pathToPackage: function(name) {
    return this.project.addonPackages[name].path;
  }
};
