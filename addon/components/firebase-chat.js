import Ember from 'ember';
import layout from '../templates/components/firebase-chat';

const {
  Component,
  get,
  inject: { service },
  observer,
  run: { scheduleOnce },
  $
} = Ember;

export default Component.extend({
  layout,
  store: service(),
  // when a new message arrives reset the chat to the bottom
  newMessage: observer('messages', function() {
    setTimeout(() => {
      $('.cht').scrollTop($('.cht')[0].scrollHeight)
    }, 10);
  }),
  // once page renders scroll to most recent chats
  didInsertElement: function() {
    this._super();
    scheduleOnce('afterRender', this, function() {
      $('.cht').scrollTop($('.cht')[0].scrollHeight);
    });
  },
  actions: {
    sendMessage() {
      get(this, 'sendMessage')(get(this, 'messageText'));
    }
  }
});

