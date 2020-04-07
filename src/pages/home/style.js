import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow:hidden;
    width:960px;
    margin:0 auto;
`
export const HomeLeft = styled.div`
    float:left;
    width:625px;
    margin-left:15px;
    padding-top:30px;
    .banner-img{
        width:625px;
        height:270px;
        border-radius: 8px;
    }
`
export const BackTop = styled.div`
    position:fixed;
    right:100px;
    bottom:100px;
    width:60px;
    height:60px;
    border-radius:4px;
    background-color:#fff;
    font-size: 12px;
    color: #000;
    border: 1px solid #dcdcdc;
    line-height:60px;
    text-align:center;
`

export const LoadMore = styled.div`
    width: 100%;
    border-radius: 20px;
    background-color: #a5a5a5;
    height: 40px;
    margin: 30px auto 60px;
    text-align: center;
    font-size: 15px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const HomeRight = styled.div`
    float:right;
    width:280px;
`
export const TopicWrapper = styled.div`
    overflow:hidden;
    padding:20px 0 10px 0;
    margin-left:-18px;
`
export const TopicItem = styled.div`
    float:left;
    height:32px;
    line-height:32px;
    background:#f7f7f7;
    font-size:14px;
    color:#000;
    border: 1px solid #dcdcdc;
    border-radius:4px;
    padding-right:10px;
    margin-left:18px; 
    box-sizing:border-box;
    .topic-img{
        display:block;  
        float:left;
        width:32px;
        height:32px;
        margin-right:10px;
        position: relative;
        top: -1px;
        left: -1px;
        border-radius: 4px 0 0 4px;
    }
`

export const ListItem = styled.div`
    width:100%;
    overflow:hidden;
    border-bottom: 1px solid #f0f0f0;
    padding:15px 2px 20px;
    .ListInfo-img{
        position: relative;
        top: 10px;
        width:150px;
        height:100px;
        float:right;
        border-radius: 4px;
    }
`
export const ListInfo = styled.div`
    float:left;
    width:458px;
    .title{
        margin: 7px 0 4px;
        display: inherit;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
        color: #000;
    }
    .abstract{
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
    .ending{
        cursor:pointer;
        display:flex;
        padding-right: 0!important;
        font-size: 12px;
        font-weight: 400;
    }
    .endItem{
        display:flex;
        margin-right: 10px;
        color: #b4b4b4;
        line-height:20px;
    }
    .iconfont{
        font-size: 12px;
        margin-right:3px;
    }
`

export const RecommendWrapper = styled.div`
    width:280px;
    margin:30px 0;
`
export const RecommendItem = styled.div`
    width:280px;
    height:50px;
    margin-bottom: 6px;
    border-radius: 4px;
    background:url(${(props) => props.imgUrl});
    background-size:cover;
`
export const WriterWrapper = styled.div`
    width:278px;
    border-radius:3px;
    overflow:hidden;
    .writerTitle{
        color: #969696;
        font-size:14px;
    }
`
export const WriterItem = styled.div`
    width:100%;
    margin-top:15px;
    padding-bottom: 5px;
    .avatorImg{
        width:48px;
        height:48px;
        margin-right: 10px;
        overflow:hidden;
        border-radius:50%;
        float:left;
    }
    .attention{
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
    }
    .title{
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        display: block;
        cursor: pointer;
    }
    .info{
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
    }
    
`




