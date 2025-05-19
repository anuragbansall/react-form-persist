# useFormPersist

A custom React hook for persisting form data in `localStorage`. Automatically saves and restores form state, ensuring a seamless user experience even after page reloads.

## Installation

Install via npm:

```bash
npm install react-form-persist
```

Or with Yarn:

```bash
yarn add react-form-persist
```

## Usage

First, import the hook into your component:

```js
import { useFormPersist } from "react-form-persist";
```

### Basic Example

```jsx
import React from "react";
import { useFormPersist } from "react-form-persist";

const MyForm = () => {
  const [formData, setFormData, clearPersistedData] = useFormPersist("myForm", {
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button onClick={clearPersistedData}>Clear Data</button>
    </div>
  );
};

export default MyForm;
```

## API

`useFormPersist(key, initialData)`

- **key** (`string`): The key under which the form data is stored in `localStorage`.
- **initialData** (`object`): The initial state of your form data.

**Returns:**

- **formData** (`object`): The current form data.
- **setFormData** (`function`): Function to update the form data.
- **clearPersistedData** (`function`): Clears the data from both state and `localStorage`.

## Clearing Persisted Data

To remove the stored data and reset the form to its initial state, call `clearPersistedData`:

```jsx
<button onClick={clearPersistedData}>Clear Data</button>
```

This removes the data from both local state and `localStorage`.

## License

MIT
