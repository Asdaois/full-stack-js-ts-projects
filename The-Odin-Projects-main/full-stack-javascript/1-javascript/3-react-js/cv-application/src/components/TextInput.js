import { Component } from 'react';
import Check from './Check';
import Edit from './Edit';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.hasLabel = true;
    this.state = {
      edit: false,
    };
  }

  toggleEdit = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      this.setState({
        edit: !this.state.edit,
      });
    }
  };

  offEdit = () => {
    this.setState({
      edit: false,
    });
  };

  render() {
    const { elId, elLabel, type, className } = this.props;
    const { edit } = this.state;
    this.hasLabel = !this.props.noLabel;
    if (edit) {
      return (
        <label htmlFor="">
          {elLabel}
          <input
            type={type}
            name={elId}
            id={elId}
            value={this.props.value}
            onChange={this.props.onClick}
            onKeyPress={this.toggleEdit}
            onBlur={this.offEdit}
            autoFocus
            required
            className={className}
          />
          <Check onClick={this.toggleEdit} />
        </label>
      );
    } else {
      const display =
        this.props.value !== '' ? this.props.value : `Imput a ${elLabel}`;

      const label = this.hasLabel
        ? `${elLabel}:`
        : display === ''
        ? this.props.defaultMessage
        : '';
      return (
        <div className={className}>
          <span>
            {label} {display}
          </span>
          <Edit onClick={this.toggleEdit} />
        </div>
      );
    }
  }
}

export default TextInput;
