import React from 'react';
import 'antd/dist/antd.css';
import '../css/pc_footer.css'
import {Row,Col} from "antd";



export default class PcHeader extends React.Component{


    render() {
        return (
                <div>
                    <Row>
                        <Col span={2}/>
                        <Col span={20} style = {{'textAlign':'center'}}>版权多2334有</Col>
                        <Col span={2}/>
                    </Row>
                </div>
        );
    }
}
