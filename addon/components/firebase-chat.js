import Ember from 'ember';
import layout from '../templates/components/firebase-chat';

const {
  Component,
  get,
  set,
  inject: { service }
} = Ember;

export default Component.extend({
  layout,
  store: service(),
  actions: {
    sendMessage() {
      get(this, 'sendMessage')(get(this, 'messageText'));
    }
  }
});

