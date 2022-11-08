import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BasicModal } from '../components/modal';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Modal',
  component: BasicModal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof BasicModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BasicModal> = (args) => <BasicModal  {...args} />;

export const Simple = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Simple.args = {
  titulo: 'TITULO DEL MODAL',
  mensaje: 'Descripción del Modal'
};

// export const Advanced = Template.bind({});
// Advanced.args = {
//   modal: 'Advanced',
// };
