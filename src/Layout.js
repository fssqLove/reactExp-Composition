import React, { Component } from 'react'
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';

// 不具名插槽
export default class Layout extends Component {

    componentDidMount() {
        const { title } = this.props;

        document.title = title;
    }

    render() {
        const { children, isShowTopBar, isShowBottomBar } = this.props
        console.log(children, 'children');

        return (
            <div>
                {isShowTopBar && <TopBar />}
                {children}
                {isShowBottomBar && <BottomBar />}
            </div>
        )
    }
}
