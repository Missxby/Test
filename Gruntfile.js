module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: [],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        csslint: {
            src: []
        },

        concat: {
            options: {
                separator: '\n'
            },
            cssinvest: {
                src: ['app/css/invest.css'],
                dest: 'dist/css/invest.css'
            },
            cssguide: {
                src: ['app/css/guide.css'],
                dest: 'dist/css/guide.css'
            },
            cssfinancing: {
                src: ['app/css/financing.css'],
                dest: 'dist/css/financing.css'
            },
            cssmyaccount: {
                src: ['app/css/myaccount.css'],
                dest: 'dist/css/myaccount.css'
            },
            cssaboutus: {
                src: ['app/css/aboutus.css'],
                dest: 'dist/css/aboutus.css'
            },
            csstenderpel:{
                src: ['app/css/tenderpel.css'],
                dest: 'dist/css/tenderpel.css'
            },
            cssinformation:{
                src:['app/css/sp_information.css'],
                dest:'dist/css/sp_information.css'
            },
            cssproblem:{
                src: ['app/css/common_problem.css'],
                dest: 'dist/css/common_problem.css'
            },
            csslogin: {
                src: ['app/css/mylogin.css'],
                dest: 'dist/css/mylogin.css'
            },
            cssregister:{
                src: ['app/css/register.css'],
                dest: 'dist/css/register.css'
            },
            cssfinancingloan:{
                src: ['app/css/financing_loan.css'],
                dest: 'dist/css/financing_loan.css'
            },
            csstendercom:{
                src: ['app/css/tendercom.css'],
                dest: 'dist/css/tendercom.css'
            },
            csstenderdebt:{
                src: ['app/css/tenderdebt.css'],
                dest: 'dist/css/tenderdebt.css'
            },
            cssmalldetail:{
                src: ['app/css/mall_detail.css'],
                dest: 'dist/css/mall_detail.css'
            },
            cssordercancel:{
                src: ['app/css/order_cancel.css'],
                dest: 'dist/css/order_cancel.css'
            },
            csscalcular:{
                src: ['app/css/calcular.css'],
                dest: 'dist/css/calcular.css'
            },
            cssmallpayment:{
                src: ['app/css/mall_payment.css'],
                dest: 'dist/css/mall_payment.css'
            },
            jsguide: {
                src: ['app/js/guide.js'],
                dest: 'dist/js/guide.js'
            },
            jsmalldetail:{
                src: ['app/js/mall_detail.js'],
                dest: 'dist/js/mall_detail.js'
            },
            jsinvest: {
                src: ['app/js/invest.js'],
                dest: 'dist/js/invest.js'
            },
            jsleft: {
                src: ['app/js/left.js'],
                dest: 'dist/js/left.js'
            },
            jsordercancel: {
                src: ['app/js/order_cancel.js'],
                dest: 'dist/js/order_cancel.js'
            },
            jsmallpayment: {
                src: ['app/js/mall_payment.js'],
                dest: 'dist/js/mall_payment.js'
            },
            jsfinancing: {
                src: ['app/js/financing.js'],
                dest: 'dist/js/financing.js'
            },
            jsaboutus: {
                src: ['app/js/aboutus.js'],
                dest: 'dist/js/aboutus.js'
            },
            jslogin: {
                src: ['app/js/login.js'],
                dest: 'dist/js/login.js'
            },
            jsregister: {
                src: ['app/js/register.js'],
                dest: 'dist/js/register.js'
            },
            jsloanapply: {
                src: ['app/js/loan_apply.js'],
                dest: 'dist/js/loan_apply.js'
            },
            jstenderpel: {
                src: ['app/js/tenderpel.js'],
                dest: 'dist/js/tenderpel.js'
            },
            jstendercom: {
                src: ['app/js/tendercom.js'],
                dest: 'dist/js/tendercom.js'
            },
            jstenderdebt: {
                src: ['app/js/tenderdebt.js'],
                dest: 'dist/js/tenderdebt.js'
            },
            jsproblem: {
                src: ['app/js/common_problem.js'],
                dest: 'dist/js/common_problem.js'
            },
            jsinformation: {
                src: ['app/js/sp_information.js'],
                dest: 'dist/js/sp_information.js'
            }
        },
        cssmin: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
                keepSpecialComments: 0,
                advanced: false
            },
            minify: {
                expand: true,
                cwd: 'dist/css/',
                src: ['guide.css','financing.css','invest.css','left.css','aboutus.css','mylogin.css','register.css','financing_loan.css','tenderpel.css','tendercom.css','tenderdebt.css','invest_success.css','calcular.css','common_problem.css','myaccount.css','mall_detail.css','mall_payment.css','sp_information.css','order_cancel.css'],
                dest: 'dist/css/',
                ext: '.min.css'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    //'dist/basic.min.js': ['<%= concat.jsbasic.dest %>'],
                    //'dist/basic.min.js': ['<%= concat.jsbasic.dest %>'],
                    //'dist/with_extras.min.js': ['<%= concat.jsmain.dest %>']
                }
            }
        },
        imagemin: {
            /* 压缩优化图片大小 */
            dist: {
                options: {
                    optimizationLevel: 3
                },
                files: [
                    {
                        expand: true,
                        cwd: 'app/images/',
                        src: ['**/*.{png,jpg,jpeg}'], // 优化 img 目录下所有 png/jpg/jpeg 图片
                        dest: 'dist/images/' // 优化后的图片保存位置，默认覆盖
                    }
                ]
            }
        },
        qunit: {
            files: []
        },
        watch: {
            start:{
                files: ['Gruntfile.js','app/js/*.js','app/css/*.css'],
                tasks: ['watchfiles']
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('test', ['jshint', 'qunit']);

    grunt.registerTask('watchfiles', ['concat','imagemin','cssmin', 'uglify']);
    grunt.registerTask('default', ['jshint','csslint','concat','imagemin','cssmin', 'uglify']);
};