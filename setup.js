var fs = require('fs');
var resolve = require('path').resolve;
var join = require('path').join;
var cp = require('child_process');
var os = require('os');

// get library path

var root = resolve(__dirname, '.');

fs.readdirSync(root).forEach(function (subDir) {
  var subDirPath = join(root, subDir);

  // ensure path has package.json --> skip backend folder

  if (!fs.existsSync(join(subDirPath, 'package.json'))) return;

  // npm binary based on OS

  var npmCmd = os.platform().startsWith('win') ? 'npm.cmd' : 'npm';

  console.log('===================================================================');
  console.log(`Performing "npm install" inside ${subDir} folder`);
  console.log('===================================================================');

  // install dependencies

  cp.spawnSync(npmCmd, ['ci'], { env: process.env, cwd: subDirPath, stdio: 'inherit' });

  // build if needed

  if (subDir === 'host-app') return;

  console.log('===================================================================');
  console.log(`Build app inside ${subDir} folder`);
  console.log('===================================================================');

  cp.spawnSync(npmCmd, ['run', 'build:local'], { env: process.env, cwd: subDirPath, stdio: 'inherit' });
});
