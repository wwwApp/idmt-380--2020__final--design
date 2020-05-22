import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '../components/Button';

export default {
  title: 'Buttons',
  component: Button,
};

export const Primary = () => (

<Button onClick={action('clicked')}>Primary</Button> 

);

export const Outline = () => <Button buttonStyle="btn--primary--outline"
onClick={action('clicked')}>Outline Large</Button>;

export const FullWidth = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
