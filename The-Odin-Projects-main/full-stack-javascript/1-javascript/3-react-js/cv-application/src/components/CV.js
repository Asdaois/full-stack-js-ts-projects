import { Component } from 'react';
import GeneralInformation from './GeneralInformation';
import EducationalExperience from './EducationalExperience';
import PracticalExperience from './PracticalExperience';

class CV extends Component {
  render() {
    return (
      <div className="CV">
        <h1>
          Curriculum Vitae
          <i className="fa fa-dragon"></i>
        </h1>
        <GeneralInformation />
        <EducationalExperience />
        <PracticalExperience />
      </div>
    );
  }
}

export default CV;
