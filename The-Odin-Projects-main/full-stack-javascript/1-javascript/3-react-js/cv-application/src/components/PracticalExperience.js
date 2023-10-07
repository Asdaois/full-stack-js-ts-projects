import { Component } from 'react';
import TextInput from './TextInput';
import Delete from './Delete';
import Work from './Work';

class PracticalExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      works: [],
    };
  }
  addTask(e, i) {
    e.preventDefault();
    const newArray = this.state.works.slice();
    newArray[i].tasks.push('');

    this.setState({
      works: newArray,
    });
  }

  addWork(e) {
    e.preventDefault();
    const newArray = this.state.works.slice();
    newArray.push({
      companyName: '',
      positionTitle: '',
      dateFrom: '',
      dateTo: '',
      tasks: [],
    });

    this.setState({
      works: newArray,
    });
  }

  handleValuesChange(e, i, j) {
    const array = this.state.works.slice();
    if (e.target.name === 'task') {
      array[j].tasks[i] = e.target.value;
    } else {
      array[i][e.target.name] = e.target.value;
    }

    this.setState({
      works: array,
    });
  }

  deleteTaskElement(e, i, j) {
    const array = this.state.works.slice();
    console.log(e.target.name);
    array[j].tasks = [
      ...array[j].tasks.slice(0, i),
      ...array[j].tasks.slice(i + 1),
    ];
    this.setState({
      works: array,
    });
  }
  deleteWorkElement(e, i) {
    let array = this.state.works.slice();

    array = [...array.slice(0, i), ...array.slice(i + 1)];

    this.setState({
      works: array,
    });
  }
  createTasks(tasks, workIndex) {
    const content = tasks.map((task, index) => {
      return (
        <li>
          <TextInput
            elId="task"
            elLabel="Task"
            type="text"
            value={task}
            noLabel={true}
            defaultMessage={'Input a task'}
            onClick={(e) => this.handleValuesChange(e, index, workIndex)}
          />
          <Delete
            onClick={(e) => {
              this.deleteTaskElement(e, index, workIndex);
            }}
          />
        </li>
      );
    });
    return content;
  }

  render() {
    const content = this.state.works.map((work, i) => {
      return (
        <Work
          createTasks={() => this.createTasks(work.tasks, i)}
          onClick={(e) => this.handleValuesChange(e, i)}
          onAddTask={(e) => this.addTask(e, i)}
          work={work}
          onDeleteWork={(e) => this.deleteWorkElement(e, i)}
        />
      );
    });

    return (
      <form>
        <h2>Practical Experience </h2>
        <button onClick={(e) => this.addWork(e)}>Add Work</button>
        {content}
      </form>
    );
  }
}

export default PracticalExperience;
