/* eslint-env node */

let RSVP = require('rsvp');

module.exports = {
  description: '',
  normalizeEntityName() {},
  afterInstall() {
    return RSVP.all([
      this.addAddonToProject('emberfire'),
      this.addAddonToProject('ember-chat'),
      this.addAddonToProject('ember-service-worker')
    ]);
  }
};
