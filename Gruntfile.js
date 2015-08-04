module.exports = function (grunt) {
    grunt.initConfig({
        "compass": {
            "dev": {
                "options": {
                    "config" : "config.rb",
                    "sassDir": "sass"
                }
            }
        },
        "watch"  : {
            "sass"       : {
                "files": ["sass/**/*.scss"],
                "tasks": ["compass"]
            },
            "configFiles": {
                "files"  : [ "Gruntsource.json" ],
                "options": {
                    "reload": "true"
                }
            }
        }
    }); // Initialisation de grunt avec notre config surchargee

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
};