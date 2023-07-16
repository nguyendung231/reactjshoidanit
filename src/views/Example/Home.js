import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../../assets/images/234.jpg";
import gaixinh from "../../assets/images/123.jpg";
import { connect } from "react-redux";

class Home extends React.Component {
  handleDeleteUser = (user) => {
    console.log("check user delete", user);
    this.props.deleteUserRedux(user);
  };

  handleCreateUser = (user) => {
    this.props.addUserRedux(user);
  };

  render() {
    let ListUsers = this.props.dataRedux;
    console.log("check props", this.props);
    return (
      <>
        <div> hello word </div>
        <div>
          {/* <img src={logo} />
          <br></br> */}
          <div>
            {ListUsers &&
              ListUsers.length > 0 &&
              ListUsers.map((item, index) => {
                return (
                  <div key={item.id}>
                    {index + 1} - {item.name} -{" "}
                    <span onClick={() => this.handleDeleteUser(item)}>X</span>
                    <br />
                  </div>
                );
              })}
            <button onClick={() => this.handleCreateUser()}> Add new</button>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("check state", state);
  return {
    dataRedux: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({
        type: "deleteUser",
        payload: userDelete,
      }),
    addUserRedux: () => dispatch({ type: "CREACT_USER" }),
  };
};

// export default withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
