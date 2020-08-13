const dev = {
  endpoint: 'http://192.168.50.170:8080',
  isDebug: true
};

const prod = {
  endpoint: 'http://192.168.50.170:8080',
  isDebug: true
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'production' ? prod : dev;

export default {
  ...config
};