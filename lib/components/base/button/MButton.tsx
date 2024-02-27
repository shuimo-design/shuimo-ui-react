/**
 * @description button component
 * @author 阿怪
 * @date 2024/2/27 11:28
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import React from 'react';
import clsx from 'clsx';
import { ButtonEvents, ButtonProps } from './index';
import { MC, Slot } from '../../../types';
import './button.css';


export default function MButton(props: ButtonProps & ButtonEvents & Slot & MC) {
  const domType = props.link ? 'a' : 'button';

  return React.createElement(domType, {
    disabled: props.disabled,
    className: clsx([props.className, 'm-button', { 'm-button-disabled': props.disabled }, `m-button-${props.type ?? 'default'}`]),
    onClick: (e: MouseEvent) => {
      if (props.disabled) {
        e.preventDefault();
      }
      props.onClick?.(e);
    },
  }, props.children ?? props.text);
}
