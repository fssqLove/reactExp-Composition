import React, { Component } from 'react'
import Layout from '../Layout';

export default class Home extends Component {
    render() {
        return (
            <Layout isShowTopBar={true} isShowBottomBar={true} title="首页">
                <div>
                    <h3>HomePage</h3>
                </div>
            </Layout>
        )
    }
}
