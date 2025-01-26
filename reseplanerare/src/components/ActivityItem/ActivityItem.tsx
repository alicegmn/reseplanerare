import { IActivity } from "../../interfaces/interfaces";

interface Props {
  activity: IActivity;
  deleteActivity(activityIdToDelete: Number): void;
  editActivity(activityIdToEdit: Number): void;
}

const ActivityItem = ({ activity, deleteActivity, editActivity }: Props) => {

  return (
    <div className="activity">
      <div className="content">
        <span>{activity.type}</span>
        <span>{activity.name}</span>
        <span>{activity.date}</span>
        <span>{activity.location}</span>
      </div>
      <div className="buttons">
        <button onClick={() => {deleteActivity(activity.id)}}>Radera</button>
        <button onClick={() => {editActivity(activity.id)}}>Redigera</button>
      </div>
    </div>
  );
}

export default ActivityItem;
