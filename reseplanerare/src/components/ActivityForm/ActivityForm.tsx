import { ChangeEvent, useState, useEffect } from "react";
import { IActivity } from "../../interfaces/interfaces";
import ActivityItem from "../ActivityItem/ActivityItem";

const ActivityForm = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [activity, setActivity] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [activityList, setActivityList] = useState<IActivity[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    const storedActivities = localStorage.getItem("activityList");
    if (storedActivities) {
      try {
        const parsedActivities = JSON.parse(storedActivities);
        console.log("Hämtade aktiviteter från localStorage:", parsedActivities);
        setActivityList(parsedActivities);
      } catch (error) {
        console.error("Fel vid JSON-parsning från localStorage:", error);
      }
    }
  }, []);

  useEffect(() => {
    if (activityList.length > 0) {
      localStorage.setItem("activityList", JSON.stringify(activityList));
    }
  }, [activityList]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    if (event.target.name === "activity") {
      setActivity(event.target.value);
    } else if (event.target.name === "location") {
      setLocation(event.target.value);
    } else if (event.target.name === "type") {
      setType(event.target.value);
    } else if (event.target.name === "date") {
      setDate(event.target.value);
    }
  };

  const addActivity = (): void => {
    if (!type.trim() || !activity.trim() || !location.trim() || !date.trim()) {
      setErrorMessage("Fyll i alla fält.");
      return;
    }
    setErrorMessage("");

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
    setActivityList(
      activityList.filter((activity) => activity.id !== activityIdToDelete)
    );
  };

  return (
    <>
      <div className="header">
        <form className="activityForm">
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
            value={date}
            onChange={handleChange}
            required
          />
          <select
            id="category"
            name="type"
            value={type}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Kategori
            </option>
            <option value="Resa">Resa</option>
            <option value="Aktivitet">Aktivitet</option>
            <option value="Mål">Mål</option>
            <option value="Att göra">Att göra</option>
          </select>
          <button type="button" onClick={addActivity}>
            {editingId !== null ? "Uppdatera aktivitet" : "Lägg till aktivitet"}
          </button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>

      <div className="activityList">
        {activityList.length > 0 ? (
          activityList
            .slice()
            .sort(
              (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
            ) // Sortera på datum
            .map((activity: IActivity, key: number) => (
              <ActivityItem
                key={key}
                activity={activity}
                editActivity={editActivity}
                deleteActivity={deleteActivity}
              />
            ))
        ) : (
          <p>Du har inga inplanerade resor eller aktiviteter att visa.</p>
        )}
      </div>
    </>
  );
};

export default ActivityForm;
