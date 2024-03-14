/**
 * @description 标签组件
 * @author Muzych
 * @date 2024/03/13 15:41
 * @version v1.0.0
 */
import './tag.css';
import { TagProps } from './index';
import { MC, Slot } from '../../../types';
import clsx from 'clsx';



export default function MTag(props: TagProps & MC & Slot) {
  const tagClass = clsx([props.className, 'm-tag', `m-tag-${props.type ?? 'default'}`]);
  return (
    <div className={tagClass} style={props.style}>
      <div className="m-tag-left"/>
      <div className="m-tag-main">
        {props.children ?? ''}
      </div>
      <div className="m-tag-right"/>
    </div>
  );
}
