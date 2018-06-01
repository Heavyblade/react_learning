import React from 'react';
import withAuthorization from './authentication/withAuthorization';
import { db } from './../firebase';

const Card = props => (
  <div>
    <button className="btn btn-success btn-round">
      <i className="material-icons">arrow_forward_ios</i> Reservar {props.text}
    </button>
  </div>
);

const Activities = (props) => {
  const items = (props.activities || []).map(elem => <Card key={elem} text={elem} />);
  return (<div>{ items }</div>);
};

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activities: [] };
  }

  componentDidMount() {
    db.getActivities()
      .then((snapshot) => {
        this.setState({ activities: snapshot.docs.map(doc => doc.data().name) });
      })
      .catch((error) => {
        alert(error);
      });
  }
  render() {
    return (
      <div className="card text-center">
        <div className="card-header card-header-success">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#">Disponibles</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Tus Reservas</a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <h3>{(new Date()).toISOString().split('T')[0]}</h3>
          <Activities activities={this.state.activities} />
        </div>
      </div>
    );
  }
}

const condition = authUser => !!authUser;
export default withAuthorization(HomePage, condition);
