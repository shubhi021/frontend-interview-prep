import * as React from 'react';
import './style.css';

function useLocalStorage(key, initialValue) {
  const [storeValue, setStoredValue] = React.useState(() => {
    const saved = localStorage.getItem(key);
    return saved !== null ? JSON.parse(saved) : initialValue;
  });
  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storeValue));
  }, [key, storeValue]);
  return [storeValue, setStoredValue];
}

export default function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  return (
    <div className="container">
      <h1>useLocalStorage</h1>
      <span>Algochurn</span>
      <p>Read the description to start solving the problem</p>
      <select
        value={theme}
        onChange={(e) => {
          setTheme(e.target.value);
        }}
      >
        <option value="light">LIGHT</option>
        <option value="dark">DARK</option>
      </select>

      <p>Current Theme:{theme}</p>
    </div>
  );
}
