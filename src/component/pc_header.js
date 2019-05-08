import React from 'react';
import urlLogo from '../images/logo.png'
import 'antd/dist/antd.css';
import '../css/logo.css'
import {Row, Col, Menu, Icon, Modal, Button, Form, Input, Checkbox,} from "antd";

class PcHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: true,
            hasLogin: false,
            loading: false,
            visible: false,
            formType: true,
        };

    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = () => {
        this.setState({loading: true});
        setTimeout(() => {
            this.setState({loading: false, visible: false});
        }, 3000);
    }

    handleCancel = () => {
        this.setState({
            visible: false,
            formType: true
        });


    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        //登录注册按钮
        const userShow = this.state.hasLogin
            ? <Menu.Item key='user'><Icon type="appstore"/>用户中心</Menu.Item>
            : <Menu.Item key='login' onClick={() => this.setState({visible: true})}><Icon
                type="appstore"/>注册/登录</Menu.Item>
        //form表单
        const formChoose = this.state.formType
            ? <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{required: true, message: 'Please input your username!'}],
                    })(
                        <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                               placeholder="Username"/>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: 'Please input your Password!'}],
                    })(
                        <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                               placeholder="Password"/>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>记住密码</Checkbox>
                    )}
                    <span className="login-form-forgot" href="">忘记密码</span>
                    &nbsp;&nbsp;
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                    Or <span onClick={() => {
                    this.setState({formType: false})
                }}>注册</span>
                </Form.Item>
            </Form>
            : <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{required: true, message: 'Please input your username!'}],
                    })(
                        <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                               placeholder="Username"/>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: 'Please input your Password!'}],
                    })(
                        <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                               placeholder="Password"/>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>记住密码</Checkbox>
                    )}
                    &nbsp;&nbsp;
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        注册
                    </Button>
                    &nbsp;or
                    <span onClick={() => {
                        this.setState({formType: true})
                    }}>登录</span>
                </Form.Item>
            </Form>
        //对话框
        const formModal = this.state.visible
            ? <Modal
                visible={this.state.visible}
                title="登录"
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={[]}>
                {formChoose}
            </Modal>
            : '';
        return (
            <div>
                <header className='header' style={{'margin': '1px'}}>
                    <Row>
                        <Col span={2}> </Col>
                        <Col span={4}>
                            <a href='./' className='logo'>
                                <img src={urlLogo} alt='图片'/>
                                <span>新闻</span>
                            </a>
                        </Col>
                        <Col span={2}> </Col>
                        <Col span={16}>
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={['top']}
                                style={{lineHeight: '64px'}}>
                                <Menu.Item key='top'><Icon type="appstore"/>头条</Menu.Item>
                                <Menu.Item key='shehui'><Icon type="appstore"/>社会</Menu.Item>
                                <Menu.Item key='guonei'><Icon type="appstore"/>国内</Menu.Item>
                                <Menu.Item key='guoji'><Icon type="appstore"/>国际</Menu.Item>
                                <Menu.Item key='yule'><Icon type="appstore"/>娱乐</Menu.Item>
                                <Menu.Item key='keji'><Icon type="appstore"/>科技</Menu.Item>
                                <Menu.Item key='tiyu'><Icon type="appstore"/>体育</Menu.Item>
                                {userShow}
                            </Menu>
                        </Col>
                    </Row>
                </header>
                {formModal}
            </div>
        );
    }
}

export default PcHeader = Form.create({})(PcHeader);
