# Frontend Integration Examples

This document provides complete integration examples for the frontend, demonstrating how to make fetch calls, create HTML forms, and implement React components.

## JavaScript Fetch Calls

Here's an example of making a fetch call to an API:

```javascript
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
```

## HTML Form Example

The following HTML code shows how to create a simple form:

```html
<form id="exampleForm">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  <input type="submit" value="Submit">
</form>
```

## React Component Example

This is an example of a simple React component that uses state to handle input:

```javascript
import React, { useState } from 'react';

const ExampleComponent = () => {
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Name submitted:', name);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default ExampleComponent;
```

## Conclusion

This guide provides the basic structure for frontend integration. Modify the examples as per your application needs.