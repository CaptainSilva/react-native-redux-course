import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { ListItem } from './ListItem';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    console.log('WillMount');
    this.props.employeesFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps: ', nextProps);
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    console.log('createDataSource: ', employees);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    console.log('renderRow: ');
    return <ListItem employee={employee} />;
  }

  render() {
    console.log('ListDs: ', this.dataSource);
    return (
     <ListView
     enableEmptySections
     dataSource={this.dataSource}
     renderRow={this.renderRow}
     />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    console.log('mapStateToProps: ', val, uid);
    return { ...val, uid };
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
