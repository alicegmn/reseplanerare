import React, { useState } from "react";

type Activity = {
  id: number;
  name: string;
  date: string;
  location: string;
};

// Props for ActivityForm component
// Includes a function to handle adding a new activity
type ActivityFormProps = {
  onAddActivity: (activity: Activity) => void;
};

// Functional component to render a form for adding new activities
function ActivityForm({ onAddActivity }: ActivityFormProps) {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    location: "",
  });

  // Handle changes in form inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload

    // Check if all fields are filled
    if (!formData.name || !formData.date || !formData.location) {
      alert("Alla fält måste fyllas i!");
      return;
    }

    // Create a new activity object with a unique ID
    const newActivity: Activity = {
      id: Date.now(),
      ...formData,
    };

    // Pass the new activity to the parent component
    onAddActivity(newActivity);

    // Reset form fields
    setFormData({ name: "", date: "", location: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input field for activity name */}
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

      {/* Input field for activity date */}
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

      {/* Input field for activity location */}
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

      {/* Submit button */}
      <button type="submit">Lägg till aktivitet</button>
    </form>
  );
}

export default ActivityForm;
