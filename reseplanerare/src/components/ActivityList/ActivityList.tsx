import ActivityItem from "../ActivityItem/ActivityItem";

// Type definition for an activity object
type Activity = {
  id: number;
  name: string;
  date: string;
  location: string;
};

type ActivityListProps = {
  activities: Activity[];
  onDelete: (id: number) => void; // Prop för att ta bort en aktivitet
};

// Functional component to render a list of activities
function ActivityList({ activities, onDelete }: ActivityListProps) {
  // Check if the activities list is empty
  if (activities.length === 0) {
    // Render a message if no activities have been added
    return (
      <p>Du har inte lagt till några aktiviteter i din reseplanerare ännu.</p>
    );
  }

  return (
    <div>
      <h2>Dina reseplaner</h2>
      {/* Render the list of ActivityItem components */}
      <ul>
        {activities.map((activity) => (
          <ActivityItem
            key={activity.id}
            activity={activity} // Pass the entire activity object
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default ActivityList;
