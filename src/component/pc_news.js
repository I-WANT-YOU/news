import React from 'react';
import img1 from '../images/carousel_1.jpg'
import img2 from '../images/carousel_2.jpg'
import img3 from '../images/carousel_3.jpg'
import img4 from '../images/carousel_4.jpg'
import PcNewsBlock from './pc_news_block'
import 'antd/dist/antd.css';
import '../css/pc.css'
import {Carousel , Col,Row} from "antd";

export default class PcNews extends React.Component {

    render() {
        const setting = {
            autoplay:true,
            dots:true,
            speed:500,
            autoplaySpeed:2000,
            arrows:true,
            accessibility:true,

        }
        return (
            <div className='pc-news'>
                <Row>
                    <Col span = {2}/>
                    <Col span = {8}>
                        < Carousel {...setting}>
                            <div><img src={img1} alt = 'tupian'/></div>
                            <div><img src={img2} alt = 'tupian'/></div>
                            <div><img src={img3} alt = 'tupian'/></div>
                            <div><img src={img4} alt = 'tupian'/></div>
                        </Carousel>
                    </Col>
                    <Col span = {12}><PcNewsBlock/></Col>
                    <Col span = {2}/>
                </Row>
            </div>
        );
    }
}




