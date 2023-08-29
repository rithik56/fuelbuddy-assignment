import type { Meta, StoryObj } from '@storybook/react';
import Card from '../components/Card.vue'

const meta: Meta<typeof Card> = {
    component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Login: Story = {
    args: {
        title: 'Login'
    },
};

export const Signup: Story = {
    args: {
        title: 'Create Your Account'
    }
}

export const Dashboard: Story = {
    args: {
        title: 'Firebase Credentials'
    }
}