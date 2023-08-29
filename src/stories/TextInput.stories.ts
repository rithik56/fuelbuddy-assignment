import type { Meta, StoryObj } from '@storybook/react';
import TextInput from '../components/TextInput.vue'

const meta: Meta<typeof TextInput> = {
    component: TextInput,
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Email: Story = {
    args: {
      label: 'Email',
      type: 'email',
      value: 'rithik19901998@gmail.com'
    }
};

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    value: 'test@123'
  }
};