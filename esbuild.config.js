var liveServer = require('live-server')

var params = {
  port: 8001,
  host: '0.0.0.0',
  root: 'dist',
  open: false,
  file: 'index.html',
  wait: 200,
  logLevel: 2,
};

liveServer.start( params );

require('esbuild').build({
  entryPoints: ['src/app.js'],
  bundle: true,
  outfile: 'dist/dist.js',
  watch: true
}).catch( () => process.exit(1) );