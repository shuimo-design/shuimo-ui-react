/**
 * @description vue version avatar
 * @author Muzych
 * @date 2024/03/03 00:40
 * @version v1.0.0
 *
 *
 */

import clsx from 'clsx';
import { AvatarProps } from './index';
import { MC } from '../../../types';
import './avatar.css';

export default function MAvatar(props: AvatarProps & MC) {

  const avatarClass = clsx([props.className, 'm-avatar', `m-avatar-${props.variant}`, `m-avatar-${props.size}`]);
  return (
    <div className={avatarClass}>
      <img src={props.img} alt=""/>
      <div className="m-avatar-mask"/>
    </div>
  );
}
