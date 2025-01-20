// Define props type for ActivityItem
type ActivityItemProps = {
  name: string;
  date: string;
  location: string;
};

// Functional component to render a single activity item
// Takes name, date, and location as props
function ActivityItem({ name, date, location }: ActivityItemProps) {
  return (
    <li>
      Aktivitet: {name}
      <br />
      Datum: {date}
      <br />
      Plats: {location}
    </li>
  );
}

export default ActivityItem;
