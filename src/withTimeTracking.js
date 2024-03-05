import React, { Component } from 'react';

const withTimeTracking = (WrappedComponent) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                startTime: new Date(),
                elapsedTime: 0,
            };
        }

        componentDidMount() {
            this.intervalId = setInterval(this.updateElapsedTime, 1000);
        }

        componentWillUnmount() {
            clearInterval(this.intervalId);
        }

        updateElapsedTime = () => {
            const currentTime = new Date();
            const elapsedTime = Math.floor((currentTime - this.state.startTime) / 1000);
            this.setState({ elapsedTime });
        };

        render() {
            return <WrappedComponent elapsedTime={this.state.elapsedTime} {...this.props} />;
        }
    };
};

export default withTimeTracking;
