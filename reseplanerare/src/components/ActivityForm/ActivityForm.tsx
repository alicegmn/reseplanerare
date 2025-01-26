import { ChangeEvent, useState, useEffect } from "react";
import { IActivity } from "../../interfaces/interfaces";
import ActivityItem from "../ActivityItem/ActivityItem";

const ActivityForm = () => {
  const [type, setType] = useState<string>("");
  const [activity, setActivity] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [activityList, setActivityList] = useState<IActivity[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    try {
      const storedActivities = localStorage.getItem("activityList");
      if (storedActivities) {
        setActivityList(JSON.parse(storedActivities));
      }
    } catch (error) {
      console.error("Fel vid läsning av aktiviteter från localStorage:", error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("activityList", JSON.stringify(activityList));
  }, [activityList]);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    if (event.target.name === "activity") {
      setActivity(event.target.value)
    } else if (event.target.name === "location"){
      setLocation(event.target.value)
    } else if (event.target.name === "type"){
      setType(event.target.value)
    } else if (event.target.name === "date"){
      setDate(event.target.value)
    };
  };

  const addActivity = (): void => {
    if (editingId !== null) {
      setActivityList(
        activityList.map((item) =>
          item.id === editingId
            ? { ...item, type, name: activity, location, date }
            : item
        )
      );

      setEditingId(null);
    } else {
    const newActivity = {
      id: Date.now(),
      type: type,
      name: activity,
      date: date,
      location: location,
    };
    setActivityList([...activityList, newActivity]);
  }
    setType("");
    setActivity("");
    setLocation("");
    setDate("");
  };

  const editActivity = (id: number): void => {
    const activityToEdit = activityList.find((item) => item.id === id);
    if (activityToEdit) {
      setEditingId(activityToEdit.id);
      setType(activityToEdit.type);
      setActivity(activityToEdit.name);
      setLocation(activityToEdit.location);
      setDate(activityToEdit.date);
    }
  };

  const deleteActivity = (activityIdToDelete: number): void => {
    setActivityList(activityList.filter((activity) => activity.id !== activityIdToDelete));
  };

  return (
    <>
    <div className="header">
    <form className="activityForm">
    <select
            id="type"
            name="type"
            value={type}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Välj typ
            </option>
            <option value="Resa">Resa</option>
            <option value="Aktivitet">Aktivitet</option>
          </select>
      <input
        type="text"
        id="activity"
        name="activity"
        value={activity}
        placeholder="Namnge aktiviteten"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        id="location"
        name="location"
        value={location}
        placeholder="Ange plats för aktiviteten"
        onChange={handleChange}
        required
      />
      <input
        type="date"
        id="date"
        name="date"
        placeholder="Ange datum för aktiviteten"
        value={date}
        onChange={handleChange}
        required
      />
      <button type="button" onClick={addActivity}>
        {editingId !== null ? "Uppdatera aktivitet" : "Lägg till aktivitet"}
      </button>
    </form>
    </div>

    <div className="activityList">
      {activityList.map((activity: IActivity, key: number) => {
        return <ActivityItem key={key} activity={activity} editActivity={editActivity} deleteActivity={deleteActivity}/>;

      })}
      </div>
    </>
  );
}

export default ActivityForm;
