export function initialize() {
  if (typeof FastBoot === 'undefined' && navigator.serviceWorker && navigator.serviceWorker.ready) {
    navigator.serviceWorker.ready.then((/*serviceWorkerRegistration*/) => {
      // serviceWorkerRegistration.active.postMessage([location.protocol, '//', location.host, location.pathname].join(''));
    });
  }
}

export default {
  name: 'emberfire-chat',
  initialize
};