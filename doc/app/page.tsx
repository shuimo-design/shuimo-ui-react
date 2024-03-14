'use client';
/**
 * @description page
 * @author 阿怪
 * @date 2024/2/27 16:39
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import 'shuimo-ui-react/global.css';
import { MButton, MAvatar, MTag } from 'shuimo-ui-react';


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
      <MTag>你好</MTag>
      <MTag type="primary">你好</MTag>
      <MTag type="confirm">你好</MTag>
      <MTag type="error">你好</MTag>
      <MTag type="warning">你好</MTag>
      <MTag style={{ '--m-tag-bg': '#951c48' }}>菜头紫</MTag>
    </>
  );
}
