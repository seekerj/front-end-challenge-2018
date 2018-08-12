import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    let rows = this.props.requests.map(request => {
      return (
        <tr>
          <td>{request.handler}</td>
          <td>{request.benchId}</td>
          <td>{request.total}</td>
          <td>{request.avgNetworkTime}</td>
          <td>{request.status}</td>
        </tr>
      );
    });

    let activities = this.props.activities.map(activity => {
      return <li>{activity.authId} {activity.action} {activity.object}:{activity.objectName} in {activity.benchName} at {activity.timestamp}</li>
    });
    return (
      <div>
      <div>
      <label>Invocation Count :  {this.props.count}</label>
      <br/>
      <label>Memory Usages :  {this.props.memory}  Bytes</label>
      </div>
      <hr/>
      <div>
      <table className="table">
        <thead className="thead-dark">
         <tr>
            <th scope="col">Handler</th>
            <th scope="col">Bench</th>
            <th scope="col">Hit Count</th>
            <th scope="col">Avg. Network Time</th>
            <th scope="col">Status</th>
         </tr>
       </thead>
       <tbody>
        {rows}
       </tbody>
      </table>
      </div>
      <div>
        Activities :
        <ul> {activities} </ul>
      </div>
      </div>
    );
  }
}
export default Dashboard;
