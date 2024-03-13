/**
 * @description
 * @author 阿怪
 * @date 2024/2/27 16:26
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { MAvatar, MButton, MTag } from 'shuimo-ui-react/index.ts';


function Button() {

  const buttonClick = () => {
    console.log('button click');
  };


  return (
    <div className="button">
      <MButton>hi</MButton>
      <MButton className="button-event" onClick={buttonClick}>你好</MButton>
      <MButton type="error">error</MButton>
      <MButton type="primary">primary</MButton>
      <MButton type="confirm">confirm</MButton>
      <MButton type="warning">warning</MButton>
      <MButton link>link</MButton>
      <MButton className="button-event" disabled onClick={buttonClick}>disabled</MButton>
      <MButton text="text！"></MButton>
    </div>
  );
}

function Avatar() {
  return (
    <>
      <MAvatar size='large' variant='square' img="https://muzych.oss-cn-shenzhen.aliyuncs.com/img/20240303104509.png" />
      <MAvatar size='small' variant='circle' img="https://muzych.oss-cn-shenzhen.aliyuncs.com/img/20240303104509.png" />
    </>
  )
}

function Tag() {
  return (
    <>
      <MTag>你好</MTag>
      <MTag type='primary'>你好</MTag>
      <MTag type='confirm'>你好</MTag>
      <MTag type='error'>你好</MTag>
      <MTag type='warning'>你好</MTag>
      <MTag style={{ '--m-tag-bg': '#951c48' }}>菜头紫</MTag>
    </>
  )
}


export default function Base() {


  return (
    <>
      <Button />
      <Avatar />
      <Tag />
    </>
  );
}
