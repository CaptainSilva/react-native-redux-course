import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class ListEmployeeItem extends Component {
  render() {
    const { name } = this.props.employee;

    return (
      <CardSection>
        <Text style={styles.titleStyle}>
          {name}
        </Text>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
      fotnSize: 18,
      paddingLeft: 15
  }
};

export default ListEmployeeItem;
