var resolve = require('path').resolve;
var cp = require('child_process');
var os = require('os');

var npmCmd = os.platform().startsWith('win') ? 'npm.cmd' : 'npm';

// backend

var backendPath = resolve(__dirname, './backend');

cp.spawn(npmCmd, ['start'], { env: process.env, cwd: backendPath, stdio: 'inherit' });

// host-app

var hostAppPath = resolve(__dirname, './host-app');

cp.spawn(npmCmd, ['start'], { env: process.env, cwd: hostAppPath, stdio: 'inherit' });
