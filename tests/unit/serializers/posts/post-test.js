import { moduleForModel, test } from 'ember-qunit';

moduleForModel('posts/post', 'Unit | Serializer | posts/post', {
  // Specify the other units that are required for this test.
  needs: ['serializer:posts/post']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  var record = this.subject();

  var serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
