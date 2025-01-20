import React, { useState } from "react";
import "./index.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ActivityForm from "./components/ActivityForm/ActivityForm";
import ActivityList from "./components/ActivityList/ActivityList";

// Type definition for an activity object
type Activity = {
  id: number;
  name: string;
  date: string;
  location: string;
};

function App() {
  // State to hold the list of activities
  const [activities, setActivities] = useState<Activity[]>([]);

  // Adds the new activity to the current list of activities
  function handleAddActivity(activity: Activity) {
    setActivities((prev) => [...prev, activity]);
  }

  return (
    <div>
      <Header />

      {/* Renders the activity form component, passing down the add activity handler */}
      <ActivityForm onAddActivity={handleAddActivity} />

      {/* Renders the activity list component, passing down the list of activities */}
      <ActivityList activities={activities} />

      <Footer />
    </div>
  );
}

export default App;
