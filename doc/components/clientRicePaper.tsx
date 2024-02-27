'use client';
/**
 * @description
 * @author 阿怪
 * @date 2024/2/27 18:16
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import React from 'react';
import { MRicePaper } from 'shuimo-ui-react';

export default function ClientRicePaper(slots: { children?: React.ReactNode | React.ReactNode[] }) {
  return (
    <MRicePaper className="shuimo-ui-react-doc">
      {slots.children}
    </MRicePaper>
  );
}
