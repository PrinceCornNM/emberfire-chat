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
  },

  // contacts: computed(function() {
    // let store = get(this, 'store');

    // let uid = get(this, 'userId');

    // let contactArr = [];
    // let contacts = store.query('contacts', { filter: { i: String(uid) } }).then(function(contact) {
    //   window.contact= contact;
    //   console.log(contact.get('r'));
    //   let user = store.findRecord('user', get(contact, 'i'));
    //   let name = user.n;
    //   contactArr.push(name);
    //   console.log(name);
    // });

    // console.log(7);
    // let contacts = store.query('contacts', {
    //   orderBy: 'i',
    //   equalTo: uid
    // }).then((contact) => {
    //   contactArr.push(store.findRecord('user', get(contact, 'r')));
    // });


    // for (var contact in contacts){
    //   console.log(get(contact, 'r'));
    //   store.findRecord('user', 'KWfG4jWnaddacnak2dPjR3ox1Gk2');
    // }

    // contacts.forEach((contact) => {
    //   console.log(get(get(contact, 'r'), 'id'));
    // });

    //console.log(contacts);

  //   return contactArr;
  // })
});

