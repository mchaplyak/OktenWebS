import React, {Component} from 'react';

class User extends Component {

    constructor(props) {
        super(props);
        let {sUser} = this.props;
        this.state = {sUser}
    }

    changeStatus = () => {

        let {sUser} = this.state;
        sUser.status = !sUser.status;
        this.setState({
            sUser
        })
    }

    render() {
        return (
            <div className={this.state.sUser.name}>
                {this.state.sUser.name} -
                {this.state.sUser.age} -
                {this.state.sUser.status.toString()} <br/>
                <hr/>
            </div>

        );
    }
}

export default User;