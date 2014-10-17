var yeoman = require('yeoman-generator');
var grunt = require('grunt');
var BastionBase = require('../base.js');

module.exports = BastionBase.extend({
    constructor: function () {
        yeoman.generators.NamedBase.apply(this, arguments);

        //this.module = this.name;
    },
    buildTemplate: function () {
        //var file = require('file-utils');
        grunt.file.mkdir(this.name);
        //this.generateTemplate('yo_rc');
    }
});
