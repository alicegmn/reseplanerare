import React, { useState } from "react";

type Activity = {
  id: number;
  name: string;
  date: string;
  location: string;
};

// Props for ActivityForm component
type ActivityFormProps = {
  onAddActivity: (activity: Activity) => void;
};

// Functional component to render a form for adding new activities
function ActivityForm({ onAddActivity }: ActivityFormProps) {
  // State to manage form data
  const [formData, setFormData] = useState<
    Pick<Activity, "name" | "date" | "location">
  >({
    name: "",
    date: "",
    location: "",
  });

  // Labels and types for form fields
  const fieldLabels: Record<
    keyof typeof formData,
    { label: string; type: string }
  > = {
    name: { label: "Aktivitetens namn", type: "text" },
    date: { label: "Datum", type: "date" },
    location: { label: "Plats", type: "text" },
  };

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

    // Validate form data
    if (Object.values(formData).some((value) => !value)) {
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
      {Object.entries(fieldLabels).map(([key, { label, type }]) => (
        <div key={key}>
          <label htmlFor={key}>{label}:</label>
          <input
            type={type}
            id={key}
            name={key}
            value={formData[key as keyof typeof formData]}
            onChange={handleChange}
            required
          />
        </div>
      ))}
      <button type="submit">Lägg till aktivitet</button>
    </form>
  );
}

export default ActivityForm;
