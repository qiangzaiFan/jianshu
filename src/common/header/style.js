import styled from 'styled-components';
import logopic from '../../statics/logo.png';


export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
    position: absolute;
    top:0;
    left:0;
    display:block;
    width:100px;
    height:56px;
    background: url(${logopic});
    background-size: contain;
`;

export const Nav = styled.div`
   width: 960px;
   height:100%;
   margin:0 auto;
`;
export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    &.left {
        float:left;
    }
    &.right {
        float:right;
        color:#969696;
    }
    &.active {
        color: #ea6f5a;
    }
    &.headerMarginLeft{
        margin-left:30px;
    }
`;
export const SearchWrapper = styled.div`
    position:relative;
    float:left;
    .zoom {
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        line-height:30px;
        border-radius:15px;
        text-align:center;
        &.focused {
            background:#777;
            color:#fff;
        }
    }
`;

export const SearchInfo = styled.div`
    position:absolute;
    left:0;
    top:56px;
    width:240px;
    padding:0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background:#fff;
`;

export const SearchTitle = styled.div`
    margin-top:20px;
    margin-bottom:15px;
    line-heighe:20px;
    font-size:14px;
    color: #969696;
`;

export const SearchInfoSwitch = styled.span`
   float:right;
   font-size:13px;
   cursor:pointer;
   .spin{
    display:block;
    float:left;
    font-size:12px;
    margin-right:2px;
    margin-top:2px;
    transition: all 0.2s ease-in;
    transform-origin: center center;
}
`;

export const SearchInfoList = styled.div`
   overflow:hidden;
`;

export const SearchInfoItem = styled.a`
   display:block;
   float:left;
   line-height:20px;
   padding: 0 5px;
   font-size:12px;
   border:1px solid #ddd;
   color:#787878;
   border-radius:3px;
   margin-right:10px;
   margin-bottom:15px;
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width:240px;
    height:38px;
    border:none;
    outline:none;
    border-radius:19px;
    margin-top:9px;
    padding: 0 20px;
    box-sizing:border-box;
    background:#eee;
    font-size:14px;
    color:#666;
    margin-left:30px;
    &.slide-enter{
        transition: all 0.2s ease-out;
    }
    &.slide-enter-active{
        width:320px;
    }
    &.slide-exit{
        transition: all 0.2s ease-out;
    }
    &.slide-exit-active{
        width:240px;
    }
    &::placeholder {
        color:#999;
    }
    &.focused {
        width:320px;
    }
`;
;
export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height: 56px;
`;

export const Button = styled.div`
    float:right;
    margin-top:9px;
    margin-right:20px;
    padding: 0 20px;
    line-height:38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size:14px; 
    &.reg {
        color:#ec6149;
    }
    &.writting {
        background:#ec6149;
        color:#fff;
    }
`;
