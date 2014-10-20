var yeoman = require('yeoman-generator');
var grunt = require('grunt');
var BastionBase = require('../base.js');

module.exports = BastionBase.extend({
    constructor: function () {
        yeoman.generators.NamedBase.apply(this, arguments);

        this.module = this.name;
    },
    buildTemplate: function () {
        grunt.file.write('.yo-rc.json',
                         "{\"generator-bastion\": {\"appRoot\": \"app/assets/javascripts/" + this.name + "\"}}");

        this.generateFromTemplate('plugin', 'gemspec.tpl', this.name + ".gemspec");
        this.generateFromTemplate('plugin', 'Gemfile.tpl', "Gemfile");
        this.generateFromTemplate('plugin', 'LICENSE.tpl', "LICENSE");
        this.generateFromTemplate('plugin', 'README.md.tpl', "README.md");

        this.generateFromTemplate('plugin', 'lib_tasks_rubocop.rake.tpl', "lib/tasks/" + this.name + "/rubocop.rake");

        this.generateFromTemplate('plugin', 'config_mount_engine.rb.tpl', "config/mount_engine.rb");
        this.generateFromTemplate('plugin', 'config_overrides.rb.tpl', "config/overrides.rb");
        this.generateFromTemplate('plugin', 'config_routes.rb.tpl', "config/routes.rb");
        this.generateFromTemplate('plugin', 'config_routes_api.rb.tpl', "config/routes/api/" + this.name + ".rb");
    }
});
