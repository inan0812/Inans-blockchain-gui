const yaml = require('js-yaml');
const fs = require('fs');
const os = require('os');
const path = require('path');
const lodash = require('lodash');

// defaults used in case of error point to the localhost daemon & its certs
let self_hostname = 'localhost';
global.daemon_rpc_ws = `wss://${self_hostname}:30045`;
global.cert_path = 'config/ssl/daemon/private_daemon.crt';
global.key_path = 'config/ssl/daemon/private_daemon.key';

function loadConfig(net) {
  try {
    // check if INAN_ROOT is set. it overrides 'net'
    const config_root_dir =
      'INAN_ROOT' in process.env
        ? process.env.INAN_ROOT
        : path.join(os.homedir(), '.inan', net);
    const config = yaml.load(
      fs.readFileSync(path.join(config_root_dir, 'config/config.yaml'), 'utf8'),
    );

    self_hostname = lodash.get(config, 'ui.daemon_host', 'localhost'); // jshint ignore:line
    const daemon_port = lodash.get(config, 'ui.daemon_port', 30045); // jshint ignore:line

    // store these in the global object so they can be used by both main and renderer processes
    global.daemon_rpc_ws = `wss://${self_hostname}:${daemon_port}`;
    global.cert_path = path.join(
      config_root_dir,
      lodash.get(
        config,
        'ui.daemon_ssl.private_crt',
        'config/ssl/daemon/private_daemon.crt',
      ),
    ); // jshint ignore:line
    global.key_path = path.join(
      config_root_dir,
      lodash.get(
        config,
        'ui.daemon_ssl.private_key',
        'config/ssl/daemon/private_daemon.key',
      ),
    ); // jshint ignore:line
  } catch (e) {
    console.log('Error loading config - using defaults');
  }
}

function manageDaemonLifetime() {
  // only start/stop daemon if it is running locally
  return self_hostname === 'localhost';
}

module.exports = {
  loadConfig,
  manageDaemonLifetime,
  self_hostname,
};
