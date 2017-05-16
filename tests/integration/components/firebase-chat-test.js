import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('firebase-chat', 'Integration | Component | firebase chat', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{firebase-chat}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#firebase-chat}}
      template block text
    {{/firebase-chat}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
