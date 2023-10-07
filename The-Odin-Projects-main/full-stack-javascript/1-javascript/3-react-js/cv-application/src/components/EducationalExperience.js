import { Component } from 'react';
import TextInput from './TextInput';

class EducationalExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      education: [],
    };
  }
  addEducation(e) {
    e.preventDefault();
    const newArray = this.state.education.slice();
    newArray.push({ schoolname: '', title: '', dateFrom: '', dateTo: '' });

    this.setState({
      education: newArray,
    });
  }

  handleValuesChange(e, i) {
    const array = this.state.education.slice();
    const name = e.target.name;
    array[i][name] = e.target.value;
    this.setState({
      education: array,
    });
  }

  render() {
    const content = this.state.education.map((education, index) => {
      return (
        <div>
          <TextInput
            elLabel="School Name"
            elId="schoolname"
            type="text"
            value={education.schoolname}
            onClick={(e) => this.handleValuesChange(e, index)}
          />
          <TextInput
            elLabel="Title"
            elId={`title`}
            type="text"
            value={education.title}
            onClick={(e) => this.handleValuesChange(e, index)}
          />
          <TextInput
            elLabel="From"
            elId="dateFrom"
            type="date"
            value={education.dateFrom}
            onClick={(e) => this.handleValuesChange(e, index)}
          />
          <TextInput
            elLabel="To"
            elId="dateTo"
            type="date"
            value={education.dateTo}
            onClick={(e) => this.handleValuesChange(e, index)}
          />
        </div>
      );
    });

    return (
      <form>
        <h2>Educational Experience </h2>
        <button type="submit" onClick={(e) => this.addEducation(e)}>
          Add Education
        </button>
        <div>{content}</div>
      </form>
    );
  }
}

export default EducationalExperience;
