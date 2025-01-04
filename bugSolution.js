```javascript
// pages/index.js

import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    const fetchData = async () => {
      // Simulate fetching data
      await new Promise(resolve => setTimeout(resolve, 500));
      setMessage('Hello World!');
    };
    fetchData();
  }, []);

  return (
    <div>{message}</div>
  );
}
```