import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LifecycleChildComponent extends Component {
    constructor(props) {
        super(props);
        //console.log('***child constructor***');
    }

    componentWillMount() {
        //console.log('***child componentWillMount***');
    }

    componentDidMount() {
        //console.log('***child componentDidMount***');
    }

    // componentWillReceiveProps(nextProps) {

    // }

    // shouldComponentUpdate(nextProps, nextState) {

    // }

    // componentWillUpdate(nextProps, nextState) {

    // }

    // componentDidUpdate(prevProps, prevState) {

    // }

    // componentWillUnmount() {

    // }

    render() {
        //console.log('***child render***');
        return (
            <div>
                {`child compent name ${this.props.count}`}
            </div>
        );
    }
}

LifecycleChildComponent.propTypes = {

};

export default LifecycleChildComponent;