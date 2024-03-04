'use client';
/**
 * @description page
 * @author 阿怪
 * @date 2024/2/27 16:39
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { MButton, MAvatar } from 'shuimo-ui-react';


export default function Page() {

  return (
    <>
      <MButton>hi</MButton>
      <MButton type="error">error</MButton>
      <MButton type="primary">primary</MButton>
      <MButton type="confirm">confirm</MButton>
      <MButton type="warning">warning</MButton>
      <MButton link>link</MButton>
      <MButton text="text！"></MButton>
      <MAvatar size="large" variant="square" img="https://muzych.oss-cn-shenzhen.aliyuncs.com/img/20240303104509.png"/>
      <MAvatar size="small" variant="circle" img="https://muzych.oss-cn-shenzhen.aliyuncs.com/img/20240303104509.png"/>
    </>
  );
}
