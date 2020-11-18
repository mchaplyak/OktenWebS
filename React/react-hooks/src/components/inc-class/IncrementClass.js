import React, {Component} from 'react';

class IncrementClass extends Component {

    state = {
        count: 0,
    };

    onInc = () => {
        // this.setState({count: this.state.count + 1})
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    render() {
        const {count} = this.state

        return (
            <div>
                <h1>
                    {count}
                </h1>

                <button onClick={this.onInc}>increment</button>
            </div>
        );
    }
}

export default IncrementClass;