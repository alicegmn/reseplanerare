import React, { useState } from "react";

type Activity = {
  id: number;
  name: string;
  date: string;
  location: string;
};

type ActivityFormProps = {
  onAddActivity: (activity: Activity) => void;
};

function ActivityForm({ onAddActivity }: ActivityFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    location: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.date || !formData.location) {
      alert("Alla fält måste fyllas i!");
      return;
    }

    const newActivity: Activity = {
      id: Date.now(),
      ...formData,
    };

    onAddActivity(newActivity);
    setFormData({ name: "", date: "", location: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Aktivitetens namn:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="date">Datum:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="location">Plats:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Lägg till aktivitet</button>
    </form>
  );
}

export default ActivityForm;
