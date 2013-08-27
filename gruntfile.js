module.exports = function(grunt) {

  grunt.registerTask('foo', function() {
    grunt.log.writeln('foo...');
    grunt.log.writeln('bar...');
    grunt.log.writeln('baz...');
  });

  grunt.registerTask('spam', function() {
    grunt.log.writeln('spam, eggs, ham...');
  });

  grunt.registerTask('default', ['foo', 'spam']);
};