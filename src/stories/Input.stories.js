import React from 'react';
import { action } from '@storybook/addon-actions';
import { TextInput } from '../components/TextInput';
import { SelectorInput } from '../components/SelectorInput';
import { SubmitInput } from '../components/SubmitInput';


// create a const when defining different options in the selector input
const options = [
    { value: 'blues', label: 'Blues' },
    { value: 'rock', label: 'Rock' },
    { value: 'jazz', label: 'Jazz' },
    { value: 'orchestra', label: 'Orchestra' } 
  ];

export default {
    title: 'Inputs',
    component: TextInput, SelectorInput
  };
  

  // Single Text Input
  export const textInput = () => (
    
  <TextInput onClick={action('clicked')}
    placeholder="placeholder text">
    </TextInput> 
  );

  // Selector Input
  export const selectorInput = () => (
    
   <SelectorInput options={options} />
    
   );

   // Submit Input
   export const submitInput = () => (
    
    <SubmitInput options={options} />
     
    );
 

  