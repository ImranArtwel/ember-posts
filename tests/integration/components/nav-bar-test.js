import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | nav-bar', function(hooks) {
  setupRenderingTest(hooks);

  test('it render nav bar', async (assert) => {
    await render(hbs `<NavBar />`);
    assert.dom('h1').hasText('CoSchedule');
    assert.dom('.menu .links .menu-posts').hasText('All Posts');
  });
});
