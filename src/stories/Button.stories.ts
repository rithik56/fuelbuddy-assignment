import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/Button.vue'

const meta: Meta<typeof Button> = {
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Login: Story = {
    args: {
        label: 'Login',
        color: 'green',
        loading: false
    },
};

export const Signup: Story = {
    args: {
        label: 'Create',
        color: 'green',
        loading: false
    },
};