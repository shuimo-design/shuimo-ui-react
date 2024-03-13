/**
 * @description tag api type
 * @author 阿怪
 * @date 2022/8/11 01:09
 * @version v1.0.0
 *
 * @name m-tag
 * @docDescription Tag component with shuimo-ui style.
 *              水墨组件的标签组件。
 * @docUrl https://shuimo.design/tag
 *
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */

export declare type TagProps = {
  /**
     * @description button type 按钮类型
     * @type string
     * @default default
     * @enum default|primary|error|confirm|warning
     */
  type?: 'default' | 'primary' | 'error' | 'confirm' | 'warning',

  /**
     * @description 自定义样式
     * @type React.CSSProperties
     * @default
     */
  style?: React.CSSProperties & { [key: string]: any };
};
