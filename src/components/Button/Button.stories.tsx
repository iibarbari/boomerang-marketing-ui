import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button, { Props as ButtonProps } from './Button';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        variant: {
            options: ['primary', 'secondary'] as ButtonProps['variant'][],
            control: { type: 'radio' },
        },
    },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (args) => <Button {...args} />;

Default.args = {
    children: 'I am a button',
    variant: 'primary',
};