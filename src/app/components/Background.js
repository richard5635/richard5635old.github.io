import React from 'react'
import React3 from 'react-three-renderer'

export default class Background extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false
        }

        //this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu() {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <div></div>
        )
    };
}