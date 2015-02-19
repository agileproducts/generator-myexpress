var generators = require('yeoman-generator');
var path = require('path');

module.exports = generators.Base.extend({
  // The name `constructor` is important here
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    generators.Base.apply(this, arguments);

    // Next, add your custom code

    this.option('coffee'); // This method adds support for a `--coffee` flag
  },

  writing: function () {
    this.sourceRoot(path.join(__dirname, 'templates', 'default'));
    console.log('sourceRoot: ' + this.sourceRoot());
    console.log('templatePath: ' + this.templatePath());
    this.mkdir('app');
    this.mkdir('app/views');
    this.mkdir('app/lib');
    this.mkdir('app/public');
    this.mkdir('app/public/css');
    this.mkdir('app/public/js');
    this.mkdir('app/public/images');
    this.mkdir('test');
    this.mkdir('test/unit');
    this.mkdir('test/functional');
    this.copy('.gitignore');
    this.copy('README.md');
    this.copy('start.sh');
    this.copy('package.json');
    this.copy('app/app.coffee');
    this.copy('app/views/layout.jade');
    this.copy('app/views/index.jade');
    this.copy('app/public/css/style.css');
    this.copy('test/functional/app.spec.coffee');
  },

  installModules: function () {
    this.npmInstall(['coffee-script'], { 'save': true });
    this.npmInstall(['express'], { 'save': true });
    this.npmInstall(['jade'], { 'save': true });
    this.npmInstall(['mocha'], { 'save-dev': true });
    this.npmInstall(['chai'], { 'save-dev': true });
    this.npmInstall(['supertest'], { 'save-dev': true });
  }

});