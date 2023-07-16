import React from "react";
import './Demo.scss'

class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };


  handleOnClickDelete = (job) => {
      console.log('handleonclickdelete',job);
      this.props.deleteAJob(job);
    }


  render() {
    let { showJobs } = this.state;

    let { name, age, address, arrJobs } = this.props;
    // let arrJobs = this.props.arrJobs;

    return (
      <>
        {showJobs === false ?
          <div>
            <button className="btn-show"
            onClick={() => this.handleShowHide()}>show</button>
          </div>
        
        :
          <>
            <div className="job-lists">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary} <></> 
                    <span onClick={() => this.handleOnClickDelete(item)}>x</span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        }
      </>
    );
  }
}

export default ChildComponent;
