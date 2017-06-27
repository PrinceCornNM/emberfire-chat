import Ember from 'ember';
import layout from '../templates/components/firebase-chat';

const {
  Component,
  get,
  set,
  inject: { service },
  computed
} = Ember;

export default Component.extend({
  layout,
  store: service(),
  actions: {
    sendMessage() {
      get(this, 'sendMessage')(get(this, 'messageText'));
    }
  },
  contacts: computed(function() {
    let store = get(this, 'store');

    let uid = get(this, 'userId');

    let contactArr = [];
    // let contacts = store.query('contacts', { filter: { i: String(uid) } }).then(function(contact) {
    //   window.contact= contact;
    //   console.log(contact.get('r'));
    //   let user = store.findRecord('user', get(contact, 'i'));
    //   let name = user.n;
    //   contactArr.push(name);
    //   console.log(name);
    // });
    let contacts = store.query('contacts', {
      orderBy: 'i',
      equalTo: uid
    });

    console.log(2);

    for (var contact in contacts){
      console.log(get(get(contact, 'r'), 'id'));
    }

    // contacts.forEach((contact) => {
    //   console.log(get(get(contact, 'r'), 'id'));
    // });

    console.log(contacts);

    return contacts;
  })
});

