import React from 'react';
import './Dashboard.css'

export default class Dashboard extends React.Component {
  static defaultProps = {
    list:[]
  }
  render() {
    const { list } = this.props;
    const totalCount = list.length;
    const totalCompleted = list.filter((item) => item.completed === true).length;

    return (
      <section className='dashboard'>
        <h1> Total: {totalCount}</h1>
        <h1> Completed: {totalCompleted}</h1>
      </section>
    );
  }
}

