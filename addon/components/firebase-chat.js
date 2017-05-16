import Ember from 'ember';
import layout from '../templates/components/firebase-chat';

const {
  get,
  set,
  inject: { service }
} = Ember;

export default Ember.Component.extend({
  layout,
  store: service(),
  actions: {
    sendMessage() {
      this.sendAction('sendMessage', get(this, 'messageText'));
    }
  }
});

