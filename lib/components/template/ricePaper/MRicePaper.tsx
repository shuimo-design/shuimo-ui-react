/**
 * @description rice-paper component
 * @author 阿怪
 * @date 2024/2/27 16:48
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import clsx from 'clsx';
import { RicePaperProps } from './index';
import { MC, Slot } from '../../../types';
import MRicePaperMountain from './MRicePaperMountain';
import './ricePaper.css';

export default function MRicePaper(props: RicePaperProps & Slot & MC) {
  const isShowMountain = props.mountain !== false;


  const mountain = isShowMountain ? <MRicePaperMountain/> : null;

  return (
    <div className={clsx([props.className, 'm-rice-paper', `m-rice-paper-${props.type ?? 'default'}`])}>
      {mountain}
      <div className="m-rice-paper-hover"/>
      <div className="m-rice-paper-layout">
        {props.children}
      </div>

    </div>
  );

}
