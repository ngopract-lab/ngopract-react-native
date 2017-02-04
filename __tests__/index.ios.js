import 'react-native';
import React from 'react';
import Index from '../index.ios.js';

import { PostButton } from '../src/components/PostButton';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// Basic Render Testing
it('Index renders correctly', () => {
  const tree = renderer.create(
    <Index />
  );
});

// Post Button Snapshot Testing
/* What is snapshot testing?
https://facebook.github.io/jest/docs/snapshot-testing.html#content
*/
test('PostButton renders correctly', () => {
  const tree = renderer.create(
    <PostButton />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
