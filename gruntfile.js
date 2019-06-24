module.exports = function(grunt) {
    grunt.initConfig({
        // SVGO
        svgmin: {
            options:{
                plugins: [
                    {cleanupAttrs:true},
                    {removeDoctype:true},
                    {removeXMLProcInst:true},
                    {removeComments:true},
                    {removeMetadata:true},
                    {removeDesc:true},
                    {removeUselessDefs:true},
                    {removeTitle:false},
                    {removeEmptyAttrs:true},
                    {removeHiddenElems:true},
                    {removeEmptyText:true},
                    {removeEmptyContainers:true},
                    {cleanUpEnableBackground:true},
                    {convertStyleToAttrs:true},
                    {convertColors:true},
                    {convertPathData:true},
                    {convertTransform:true},
                    {removeUnknownsAndDefaults:true},
                    {removeNonInheritableGroupAttrs:true},
                    {removeUselessStrokeAndFill:true},
                    {removeUnusedNS:true},
                    {cleanupIDs:true},
                    {cleanupListOfValues:true},
                    {cleanupNumericValues:true},
                    {moveElemsAttrsToGroup:true},
                    {collapseGroups:true},
                    {mergePaths:true},
                    {sortAttrs:true},
                    {removeDimensions:true},
                    {removeStyleElement:true}
                ]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'in',
                    src: ['**/*.svg'],
                    dest: 'out'
                }]
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-svgmin');


    // Register tasks
    grunt.registerTask('default', [
        'svgmin'
    ]);
};
