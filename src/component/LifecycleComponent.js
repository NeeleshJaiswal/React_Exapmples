import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LifecycleChildComponent from './LifecycleChildComponent';

class LifecycleComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            count: 0
        }
        //this.changeStateHandler = this.changeStateHandler.bind(this);
       // console.log('***constructor***');

    }

    // componentWillMount() {
    //     // Side effects
    //     // name: Neelesh
    //     //console.log('componentWillMount:: ', this.state.name);
    //     // this.setState({
    //     //     name: 'Neelesh Jaiswal'
    //     // });
    //     // console.log('componentWillMount2:: ', this.state.name);
    //     console.log('***componentWillMount***');
    // }

    

    // componentDidMount() {
    //     console.log('***componentDidMount***');
    // }

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

    static getDerivedStateFromProps(props, state){
        console.log("***getDerivedStateFromProps***");
        return null;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("***getSnapshotBeforeUpdate***");
        return null;
    }

      changeStateHandler = () => {
          console.log("***changeStateHandler***");
        let c = this.state.count + 1;

        this.setState({
            count: c
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {


        console.log("***componentDidUpdate***");
        console.log("***componentDidUpdate***", prevState.count);
        console.log(this.state.count);
    }


    render() {
        console.log('***render***');
        return (
            <div>
                
                {this.state.count}
                <br/>
                <button onClick={this.changeStateHandler}>Change Count</button>

                <LifecycleChildComponent count = {this.state.count}></LifecycleChildComponent>

            </div>
        );
    }
}

LifecycleComponent.propTypes = {

};

export default LifecycleComponent;