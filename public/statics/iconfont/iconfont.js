import { createGlobalStyle } from 'styled-components';
export const IconfontStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1584087043812'); /* IE9 */
  src: url('./iconfont.eot?t=1584087043812#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1584087043812') format('woff'),
  url('./iconfont.ttf?t=1584087043812') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1584087043812#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`








