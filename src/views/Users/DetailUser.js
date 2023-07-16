import React from "react";
import {withRouter} from "react-router-dom";
import axios from "axios";


class DetailUser extends React.Component {
    state = {
        user: {}
    }

    async componentDidMount() {
        if(this.props.match && this.props.match.params) {

            let id = await this.props.match.params.id

            let res = await axios.get(`https://reqres.in/api/users/${id}`)
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : []
            })
        }
    }
    handleBachButton = () => {
        this.props.history.push('./')
    }

    
    render() {
        console.log("check", this.props);
        let {user} = this.state;
        let isEmptyObj = Object.keys(user).length === 0;
        console.log("check user",{user})

        return(
            <>
            <div> hello detailUser id: {this.props.match.params.id}</div>
            {isEmptyObj === false &&
            <>
            <div>User's name {user.first} - {user.last_name}</div>
            <div>User's nemail {user.email}</div>
            <div>
                <img src={user.avatar}/>
            </div>
            <div>
                <button type="button" onClick={() => this.handleBachButton()}>
                    Back
                </button>
            </div>
            </>
            }
            </>
        )
    }

}


export default withRouter(DetailUser);