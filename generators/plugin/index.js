var yeoman = require('yeoman-generator');
var grunt = require('grunt');
var BastionBase = require('../base.js');
var changeCase = require('change-case');

module.exports = BastionBase.extend({
    constructor: function () {
        yeoman.generators.NamedBase.apply(this, arguments);

        // host-groups
        this.pluginDash = this.name;
        // Host Groups
        this.pluginTitleSplit = changeCase.titleCase(this.name);
        // HostGroups
        this.pluginTitle = this.pluginTitleSplit.split(' ').join('');
        // hostgroups
        this.pluginLower = changeCase.lowerCase(this.pluginTitle);
        // host_groups
        this.pluginFile = changeCase.lowerCase(this.pluginTitleSplit.split(' ').join('_'));
    },
    buildTemplate: function () {
        //grunt.file.write('.yo-rc.json',
        //                 "{\"generator-bastion\": {\"appRoot\": \"app/assets/javascripts/" + this.name + "\"}}");

        this.generateFromTemplate("plugin", "gemspec.tpl", this.pluginDash + ".gemspec");
        this.generateFromTemplate("plugin", "Gemfile.tpl", "Gemfile");
        this.generateFromTemplate("plugin", "LICENSE.tpl", "LICENSE");
        this.generateFromTemplate("plugin", "README.md.tpl", "README.md");

        this.generateFromTemplate("plugin", "lib_tasks_rubocop.rake.tpl",
                                  "lib/tasks/" + this.pluginFile + "/rubocop.rake");
        this.generateFromTemplate("plugin", "lib_version.rb.tpl",
                                  "lib/" + this.pluginFile + "/version.rb");

        this.generateFromTemplate("plugin", "config_mount_engine.rb.tpl",
                                  "config/mount_engine.rb");
        this.generateFromTemplate("plugin", "config_overrides.rb.tpl",
                                  "config/overrides.rb");
        this.generateFromTemplate("plugin", "config_routes.rb.tpl",
                                  "config/routes.rb");
        this.generateFromTemplate("plugin", "config_routes_api.rb.tpl",
                                  "config/routes/api/" + this.pluginFile + ".rb");


        this.generateFromTemplate("plugin", "app_controllers_application_controller.rb.tpl",
                                  "app/controllers/application_controller.rb");
        this.generateFromTemplate("plugin", "app_controllers_module_controller.rb.tpl",
                                  "app/controllers/" + this.pluginFile + "_controller.rb");
        this.generateFromTemplate("plugin", "app_views_application.html.haml.tpl",
                                  "app/views/application.html.haml");
    },
    generateFromTemplate: function (type, templateFilename, filename) {
        var filename, templateFilename, date, context, base;

        this.sourceRoot(this.sourceRoot() + '../../../' + type + '/templates');

        date = new Date();

        context = {
            year: date.getFullYear(),
            pluginDash: this.pluginDash,
            pluginLower: this.pluginLower,
            pluginTitle: this.pluginTitle,
            pluginTitleSplit: this.pluginTitleSplit,
            pluginFile: this.pluginFile,
            type: type
        };

        this.template(templateFilename, filename, context);
    }
});
