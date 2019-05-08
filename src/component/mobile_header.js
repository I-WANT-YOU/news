import React from 'react';
import urlLogo from '../images/logo.png'
// import 'antd/dist/antd.css';
import '../css/mobile.css'
// import {Row,Col,Layout,Menu,Icon} from "antd";
// const {
//     Header
// } = Layout;



export default class PcHeader extends React.Component{


    render() {
        return (
            <header className='mobile-header'>
                <img src={urlLogo} alt = '图片'/>
                <span>新闻</span>
            </header>
        );
    }
}
