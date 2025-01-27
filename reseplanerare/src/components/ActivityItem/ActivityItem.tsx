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
        <span>
          <h2>{activity.name}</h2>
        </span>
        <span>
          <strong>Datum:</strong> {activity.date}
        </span>
        <span>
          <strong>Plats:</strong> {activity.location}
        </span>
        <span>#{activity.type}</span>
      </div>

      <div className="buttons">
        <button
          className="delete-button"
          onClick={() => deleteActivity(activity.id)}
        >
          Radera 🗑️
        </button>
        <button
          className="edit-button"
          onClick={() => editActivity(activity.id)}
        >
          Redigera ✏️
        </button>
      </div>
    </div>
  );
};

export default ActivityItem;
