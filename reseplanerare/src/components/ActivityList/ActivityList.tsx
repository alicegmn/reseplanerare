import ActivityItem from "../ActivityItem/ActivityItem";

// Type definition for an activity object
type Activity = {
  id: number;
  name: string;
  date: string;
  location: string;
};

// Functional component to render a list of activities
// Takes an array of activities as a prop
function ActivityList({ activities }: { activities: Activity[] }) {
  // Check if the activities list is empty
  if (activities.length === 0) {
    // Render a message if no activities have been added
    return <p>Du har lagt till några aktiviteter i din resaplanerare ännu.</p>;
  }

  return (
    <div>
      <h2>Dina reseplaner</h2>
      {/* Renders the list of ActivityItem components */}
      <ul>
        {activities.map((activity) => (
          <ActivityItem
            key={activity.id}
            name={activity.name}
            date={activity.date}
            location={activity.location}
          />
        ))}
      </ul>
    </div>
  );
}

export default ActivityList;
