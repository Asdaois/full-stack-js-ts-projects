import { Component } from 'react';
import TextInput from './TextInput';

class GeneralInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      lastname: '',
      email: '',
      phoneNumber: '',
    };
  }

  handleValuesChange = (e) => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  };

  render() {
    const { name, lastname, email, phoneNumber } = this.state;
    return (
      <form id="general-information">
        <h2>General Information</h2>
        <TextInput
          elLabel="Name"
          elId="name"
          type="text"
          value={name}
          onClick={this.handleValuesChange}
        />
        <TextInput
          elLabel="Lastname"
          elId="lastname"
          type="text"
          value={lastname}
          onClick={this.handleValuesChange}
        />
        <TextInput
          elLabel="Email"
          elId="email"
          type="email"
          value={email}
          onClick={this.handleValuesChange}
        />
        <TextInput
          elLabel="Phone number"
          elId="phoneNumber"
          type="tel"
          value={phoneNumber}
          onClick={this.handleValuesChange}
        />
      </form>
    );
  }
}

export default GeneralInformation;
