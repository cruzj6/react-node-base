import React from 'react';

import { withState, compose, withProps } from 'recompose';

export const Recomposed = props => (
	<div>
		look at me <span>{props.text}</span>!
		<br />
		<input placeholder={`${props.initialText}...`} onChange={e => props.setText(e.target.value)} />
	</div>
);

const setupComponent = compose(
	withState('text', 'setText', props => props.defaultValue),
	withProps({ defaultValue: 'guy' })
);

export default setupComponent(Recomposed);
