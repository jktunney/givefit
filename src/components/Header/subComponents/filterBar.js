import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 150,
  },
};

/**
 * `SelectField` is implemented as a controlled component, with the current selection set through the `value` property.
 * The `SelectField` can be disabled with the `disabled` property.
 */
export default class SelectFieldExampleSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <SelectField
          value={this.state.value}
          onChange={this.handleChange}
          autoWidth={true}
        >
          <MenuItem value={1} primaryText="Select Workout" />
          <MenuItem value={2} primaryText="Yoga" />
          <MenuItem value={3} primaryText="Bootcamp" />
          <MenuItem value={4} primaryText="Running Group" />
          <MenuItem value={5} primaryText="Free Fitness" />
        </SelectField>
      </div>
    );
  }
}