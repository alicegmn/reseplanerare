type ActivityItemProps = {
  name: string;
  date: string;
  location: string;
};

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
