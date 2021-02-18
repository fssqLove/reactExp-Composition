import React, { Component } from 'react'
import Layout from '../Layout2';

export default class User extends Component {
    render() {
        return (
            <Layout isShowTopBar={false} isShowBottomBar={true} title="用户中心">
                {{
                    content: <div>
                        <h3>User Page</h3>
                    </div>,
                    txt: '这是个文本',
                    click: () => console.log('click')
                }}
            </Layout>
        )
    }
}
