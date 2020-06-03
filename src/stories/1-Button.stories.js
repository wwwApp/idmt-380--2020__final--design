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

export const primaryOutline = () => (

<Button buttonStyle="btn--primary--outline" onClick={action('clicked')}>Primary Outline</Button>
);

export const Alert = () => (
  
  <Button buttonStyle="btn--alert--solid" onClick={action('clicked')}>Warning</Button> 
  );

export const alertOutline = () => (
  
    <Button buttonStyle="btn--alert--outline" onClick={action('clicked')}>Warning Outline</Button> 
    );

export const FullWidth = () => (
  <Button buttonSize="btn--full-width"onClick={action('clicked')}>
    Full Width
  </Button>
);
