
var gulp = require('gulp');
var args = require('yargs').argv;
var del = require('del');
var config = require('./gulp.config')();

var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('help', $.taskListing);
gulp.task('default', ['help']);

// PRINCIPAL
/* Concatena todos los js y css, los injecta en el index.html y lo vuelca en build */
gulp.task('optimize', ['inject', 'fonts', 'images'], function () {
    log('Optimizing the javascript, css, html');

    var templateCache = config.temp + config.templateCache.file;
    var cssFilter = $.filter(['**/*.css'], {restore: true});
    var jsLibFilter = $.filter(['**/' + config.optimized.lib], {restore: true});
    var jsAppFilter = $.filter(['**/' + config.optimized.app], {restore: true});

    return gulp
        .src(config.index)
        .pipe($.plumber())
        .pipe(
            $.inject(gulp.src(
                templateCache,
                {read: false}
            ),
            {starttag: '<!-- inject:templates.js -->'}))
        .pipe($.useref({searchPath: './'}))
        .pipe(cssFilter)
        .pipe($.csso())
        .pipe($.rev())
        .pipe(cssFilter.restore)
        .pipe(jsLibFilter)
        .pipe($.uglify())
        .pipe($.rev())
        .pipe(jsLibFilter.restore)
        .pipe(jsAppFilter)
        .pipe($.ngAnnotate())
        .pipe($.uglify())
        .pipe($.rev())
        .pipe(jsAppFilter.restore)
        .pipe($.revReplace())
        .pipe(gulp.dest(config.build))
        .pipe($.rev.manifest())
        .pipe(gulp.dest(config.build));
});

/**
 * Bump the version}
 *
 * --type=pre will bump the prerelease version *.*.*-x
 * --type=patch or no flag will bump the patch version *.*.x
 * --type=minor will bump the minor version *.x.*
 * --type=major will bump the major version x.*.*
 * --version=1.2.3 will bump to a specific version and ignore other flags
 */
gulp.task('bump', function () {
    var msg = 'Bumping version';
    var type = args.type;
    var version = args.version;
    var options = {};
    if (version) {
        options.version = version;
        msg += ' to ' + version;
    } else {
        options.type = type;
        msg += ' to ' + type;
    }
    log(msg);
    return gulp
        .src(config.packages)
        .pipe($.print())
        .pipe($.bump(options))
        .pipe(gulp.dest(config.root));
});

/* Analiza el todo el code js de app */
gulp.task('vet', function () {
    log('Analyzing source with JSHint and JSCS.');
    return gulp.src(config.alljs)
    .pipe($.if(args.verbose, $.print()))    
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
    .pipe($.jshint.reporter('fail'))
    .pipe($.jscs());
});

/* Compila el less a css y lo coloca en .tmp */
gulp.task('styles', ['clean-styles'], function() {
    log('Compiling Less --> CSS');

    return gulp
        .src(config.less)
        .pipe($.plumber())
        .pipe($.less())
        .pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']}))
        .pipe(gulp.dest(config.temp));
});

// PRINCIPAL
/* Copia todas las fuentes a la carpeta build */
gulp.task('fonts', ['clean-fonts'], function () {
    log('Copy fonts');
    return gulp
        .src(config.fonts)
        .pipe(gulp.dest(config.build + 'fonts'));
});

// PRINCIPAL
/* Copia todas las imagenes a la carpeta build, antes las comprime */
gulp.task('images', ['clean-images'], function () {
    log('Copying and compresing the images');
    return gulp
        .src(config.images)
        .pipe($.imagemin({optimizationLevel: 4}))
        .pipe(gulp.dest(config.build + 'images'));
});

// PRINCIPAL
/* Limpia las carpetas build and .tmp */
gulp.task('clean', function () {
    var delconfig = [].concat(config.build, config.temp);
    log('Cleaning: ' + $.util.colors.blue(delconfig));
    del(delconfig);
});

/* Limpia las imagenes de la carpeta build */
gulp.task('clean-images', function() {
    var files = config.build + 'images/**/*.*'; 
    log(files);
    clean(files);
});

/* Limpia las fonts de la carpeta build */
gulp.task('clean-fonts', function() {    
    clean(config.build + 'fonts/**/*.*');
});

/* Limpia los estilos de la carpta .tmp */
gulp.task('clean-styles', function() {    
    clean(config.temp + '**/*.css');
});

/* Limpia todos los archivos js y html de las carpetas build y .tmp */
gulp.task('clean-code', function () {
    var files = [].concat(
        config.temp + '**/*.js',
        config.build + '**/*.html',
        config.build + 'js/**/*.js'
    );
    clean(files);
});

/* Vigila al archivo less para cuando cambie se ejecute styles */
gulp.task('less-watch', function() {
    gulp.watch([config.less, 'styles']);
});

/* Crea el templatecache para angular */
gulp.task('templatecache', ['clean-code'], function () {
    log('Creating AngularJS $templateCache');
    return gulp
        .src(config.htmltemplates)
        .pipe($.minifyHtml({empty: true}))
        .pipe($.angularTemplatecache(
            config.templateCache.file,
            config.templateCache.options
        ))
        .pipe(gulp.dest(config.temp));
});

/* Injecta todos los css y js de bower y los js de la app en index.html */
gulp.task('wiredep', function () {
    log('Wire up the bower css js and our app js into the index.html');
    var options = config.getWiredepDefaultOptions();
    var wiredep = require('wiredep').stream;

    return gulp
        .src(config.index)
        .pipe(wiredep(options))
        .pipe($.inject(gulp.src(config.js)))
        .pipe(gulp.dest(config.client));
});

/* Injecta TODO + los css de la app en el index.html */
gulp.task('inject', ['wiredep', 'styles', 'templatecache'], function () {
    log('Wire up the app css into the index.html, and call wiredep');   

    return gulp
        .src(config.index)        
        .pipe($.inject(gulp.src(config.css)))
        .pipe(gulp.dest(config.client));
});

////////////////////

function clean(path) {
    log('Cleaning: ' + $.util.colors.blue(path));
    del(path);
}

function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}
