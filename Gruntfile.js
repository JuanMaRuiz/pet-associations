module.exports = function(grunt) {
  require('jit-grunt')(grunt,{
    eslint: 'grunt-eslint'
  });

  grunt.initConfig({
    eslint: {
      options: {
        format: 'node_modules/eslint-tap'
      },
      target: ['server.js']
    }
  });

  grunt.registerTask('default', ['eslint']);
};
