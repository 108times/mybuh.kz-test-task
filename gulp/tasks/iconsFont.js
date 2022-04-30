import iconfont from 'gulp-iconfont'
import iconfontCss from 'gulp-iconfont-css';
const runTimestamp = Math.round(Date.now()/1000);

export function iconsFont(){
  const fontName = 'my-icons'
  return app.gulp.src([app.path.src.svgIcons])
  .pipe(iconfontCss({
    fontName: fontName,
    // path: 'app/assets/css/templates/_icons.scss',
    // targetPath: '../../css/_icons.scss',
    // fontPath: '../../fonts/icons/'
  }))
  .pipe(iconfont({
    fontName: fontName, // required
    prependUnicode: true, // recommended option
    formats: ['ttf', 'eot', 'woff'], // default, 'woff2' and 'svg' are available
    timestamp: runTimestamp, // recommended to get consistent builds when watching files
  }))
  .on('glyphs', function(glyphs, options) {
    // CSS templating, e.g.
    console.log(glyphs, options);
  })
  .pipe(app.gulp.dest(`${app.path.build.images}/iconfont/`));
}