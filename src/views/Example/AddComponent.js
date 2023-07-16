import React from "react";

class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };

  handleChangeTitleJob = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.title || !this.state.salary) {
      alert("missing required params");
      return;
    }
    console.log(">>> check data input: ", this);
    console.log(event.preventDefault);
    this.props.addNewJob({
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
      salary: this.state.salary,
    });
    this.setState({
      title: "",
      salary: "",
    });
  };

  render() {
    return (
      <form>
        <label htmlFor="fname">Job Title:</label>
        <br />
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.handleChangeTitleJob(event)}
        />

        <br />
        <label htmlFor="lname">salary:</label>
        <br />
        <input
          type="text"
          value={this.state.salary}
          onChange={(event) => this.handleChangeSalary(event)}
        />
        
        <br />
        <input
          type="button"
          value="Submit"
          onClick={(event) => this.handleSubmit(event)}
        />
      </form>
    );
  }
}

export default AddComponent;
