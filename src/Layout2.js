import React, { Component } from 'react'
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';


// 具名插槽
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
                {children.content}
                {children.txt}
                {isShowBottomBar && <BottomBar />}

                <button onClick={children.click}>按钮</button>
            </div>
        )
    }
}
