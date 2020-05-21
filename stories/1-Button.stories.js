import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '../src/components/button';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => 

<Button buttonStyle="btn--primary"
        buttonSize="btn--large" 
        onClick={action('clicked')}> Spotify </Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
