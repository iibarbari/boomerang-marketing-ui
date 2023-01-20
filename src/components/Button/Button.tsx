import React from 'react';
import styles from './Button.module.css'
import classNames from 'classnames';

type Overwrite<T, R> = Omit<T, keyof R> & R;

type ButtonVariant = 'primary' | 'secondary';

type CommonProps = {
    disabled?: boolean,
    type?: JSX.IntrinsicElements['button']['type'],
    variant?: ButtonVariant,
}

export type Props = Overwrite<React.PropsWithoutRef<JSX.IntrinsicElements['button']>, CommonProps>

function Button(
    { className, disabled = false, variant = 'primary', ...props }: Props,
    ref: React.Ref<HTMLButtonElement>
) {

    return (
        <button
            {...props}
            ref={ref}
            className={classNames(styles.button, styles[variant], className)}
            disabled={disabled}
        />
    )
}

Button.displayName = 'Button';

export default React.forwardRef<HTMLButtonElement, Props>(Button)