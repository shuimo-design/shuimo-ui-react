/**
 * @description vue version avatar
 * @author Muzych
 * @date 2024/03/03 00:40
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */

import React from 'react'
import clsx from 'clsx'
import { AvatarProps } from './index'
import { MC, Slot } from '../../../types'
import './avatar.css'

export default function MAvatar(props: AvatarProps & Slot & MC) {

    const avatarClass = clsx('m-avatar', `m-avatar-${props.variant}`, `m-avatar-${props.size}`)

    return React.createElement('div', {
        className: avatarClass
    },
        React.createElement('img', { src: props.img, alt: '' }),
        React.createElement('div', { className: "m-avatar-mask" })
    )
}