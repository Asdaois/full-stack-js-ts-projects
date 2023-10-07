import Delete from './Delete';
import TextInput from './TextInput';

function Work(props) {
  const tasks = props.createTasks();
  const { work } = props;
  return (
    <div>
      <Delete onClick={props.onDeleteWork} />
      <TextInput
        elLabel="Company name"
        elId="companyName"
        type="text"
        value={work.companyName}
        onClick={props.onClick}
      />
      <TextInput
        elLabel="Name"
        elId="positionTitle"
        type="text"
        value={work.positionTitle}
        onClick={props.onClick}
      />
      <TextInput
        elLabel="From"
        elId="dateFrom"
        type="date"
        value={work.dateFrom}
        onClick={props.onClick}
      />
      <TextInput
        elLabel="To"
        elId="dateTo"
        type="date"
        value={work.dateTo}
        onClick={props.onClick}
      />

      <button type="submit" onClick={props.onAddTask}>
        Add main Task
      </button>
      <ul>{tasks}</ul>
    </div>
  );
}
export default Work;
