import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import tape from 'tape';

import Loader from './index';

tape('<Loader> component renders the correct content', (t) => {
  t.plan(2);

  const renderer = ReactTestUtils.createRenderer();
  renderer.render(<Loader />);
  const result = renderer.getRenderOutput();

  t.equal(result.type, 'div');
  t.equal(result.props.children, 'Loading...');
});
