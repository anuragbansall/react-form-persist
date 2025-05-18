import { useState, useEffect } from "react";

const useFormPersist = (key, initialData) => {
  const [formData, setFormData] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initialData;
    } catch (e) {
      console.warn("Failed to load form data from localStorage:", e);
      return initialData;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(formData));
    } catch (e) {
      console.warn("Failed to save form data to localStorage:", e);
    }
  }, [key, formData]);

  const clearPersistedData = () => {
    localStorage.removeItem(key);
    setFormData(initialData);
  };

  return [formData, setFormData, clearPersistedData];
};

export default useFormPersist;
