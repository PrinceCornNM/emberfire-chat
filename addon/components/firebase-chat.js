import Ember from 'ember';
import layout from '../templates/components/firebase-chat';

const {
  Component,
  get,
  set,
  inject: { service },
  computed,
  observer
} = Ember;

export default Component.extend({
  layout,
  store: service(),
  //when a new message arrives reset the chat to the bottom
  newMessage: Ember.observer('messages', function() {
    setTimeout(() => {
      $('.chat').scrollTop($('.chat')[0].scrollHeight)
    }, 10);
  }),
  // once page renders scroll to most recent chats
  didInsertElement : function(){
    this._super();
    Ember.run.scheduleOnce('afterRender', this, function(){
      $('.chat').scrollTop($('.chat')[0].scrollHeight);
    });
  },
  actions: {
    sendMessage() {
      get(this, 'sendMessage')(get(this, 'messageText'));
    }
  }
});

