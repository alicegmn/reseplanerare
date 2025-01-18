import React, { useState } from "react";
import "./index.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ActivityForm from "./components/ActivityForm/ActivityForm";
import ActivityList from "./components/ActivityList/ActivityList";

type Activity = {
  id: number;
  name: string;
  date: string;
  location: string;
};

const App: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  const handleAddActivity = (activity: Activity) => {
    setActivities((prev) => [...prev, activity]);
  };

  return (
    <div>
      <Header />
      <ActivityForm onAddActivity={handleAddActivity} />
      <ActivityList activities={activities} />
      <Footer />
    </div>
  );
};

export default App;
