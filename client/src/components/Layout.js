import React  from 'react';
import { Layout, Row, Col } from 'antd';
import Message from './Message';

export default () => {
    return (
        <Layout style={{ height: '100vh' }}>
            <Layout.Content
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
            <Row>
                <img src="logo.png" style={{width: '360px'}}/>
            </Row>
            <Row>
                <Col span={24} style={{ textAlign: 'center', padding: '16px 0' }}>
                    <Message />
                </Col>
            </Row>
            </Layout.Content>
        </Layout>
    );
};
