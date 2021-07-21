import React from 'react';
import { FlexPlugin } from 'flex-plugin';
import { Actions } from '@twilio/flex-ui';
import fetch from 'node-fetch';

import { TransferButton } from './components/TransferButton';

const PLUGIN_NAME = 'TransferConversationsPlugin';

export default class TransferConversationsPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  init(flex, manager) {

    flex.Actions.registerAction('TransferOnsite', (payload) => {
      return fetch(`${process.env.TWILIO_FRONTLINE_SERVICE}/receive-flex-transfer`, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          method: 'POST',
          mode: 'no-cors',
          body: new URLSearchParams({attendeeNumber: `${payload.task.attributes.name}`}),
          
        }).then((response) => {
          console.log(response)
        }).catch((error) => {
          console.error(error);
          throw error;
        });
    });

    flex.Actions.addListener('afterTransferOnsite', (payload) => {
      Actions.invokeAction('CompleteTask', payload);
    })

    flex.TaskCanvasHeader.Content.add(<TransferButton key="transfer-onsite" />, {
      sortOrder: 1,
    });
  }
}
