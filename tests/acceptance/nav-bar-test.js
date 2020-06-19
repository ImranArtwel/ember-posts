import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | nav bar', function(hooks) {
  setupApplicationTest(hooks);

  test('it visits all pages', async function(assert) {
    await visit('/posts');
    assert.equal(currentURL(), '/posts');
    await visit('/favourite');
    assert.equal(currentURL(), '/favourite');
  });
});
