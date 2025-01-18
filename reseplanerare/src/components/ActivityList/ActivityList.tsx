import ActivityItem from "../ActivityItem/ActivityItem";

type Activity = {
  id: number;
  name: string;
  date: string;
  location: string;
};

function ActivityList({ activities }: { activities: Activity[] }) {
  if (activities.length === 0) {
    return <p>Du har lagt till några aktiviteter i din resaplanerare ännu.</p>;
  }

  return (
    <div>
      <h2>Dina reseplaner</h2>
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
