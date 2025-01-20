// Define props type for ActivityItem
type ActivityItemProps = {
  activity: {
    id: number;
    name: string;
    date: string;
    location: string;
  };
  onDelete: (id: number) => void;
};

// Functional component to render a single activity item
function ActivityItem({ activity, onDelete }: ActivityItemProps) {
  const { id, name, date, location } = activity;

  return (
    <li>
      <div>Aktivitet: {name}</div>
      <div>Datum: {date}</div>
      <div>Plats: {location}</div>
      <button onClick={() => onDelete(id)}>Ta bort aktivitet</button>
    </li>
  );
}

export default ActivityItem;
