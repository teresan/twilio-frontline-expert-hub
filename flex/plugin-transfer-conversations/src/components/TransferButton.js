import React from 'react';
import { Actions, withTheme } from '@twilio/flex-ui';

import styled from 'react-emotion';

export class TransferButton extends React.PureComponent {
	render() {
		const Button = styled('button')`
		background: '#ccc';
		letter-spacing: 2px;
		text-transform: uppercase;
		font-weight: bold;
		margin-right: 1em;
		padding: 0px 16px;
		height: 28px;
		font-size: 10px;
		border-radius: 100px;
		align-self: center;
		border-style: none;
		&:hover {
			cursor: pointer;
		}
	  `;
		return (
			<Button onClick={() => Actions.invokeAction('TransferOnsite', this.props) }>
				Transfer to onsite
			</Button>
		);
	}
}

export default withTheme(TransferButton);