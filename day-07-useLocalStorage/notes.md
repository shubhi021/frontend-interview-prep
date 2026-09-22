1. Custom hook with getter + setter	useLocalStorage returns [storedValue, setStoredValue]
2. Usage pattern useLocalStorage('name', 'initialValue')	Called as useLocalStorage('theme', 'light')
3. First param = key name	key = 'theme'
4. Second param = initial value	initialValue = 'light'
5. Select dropdown, light/dark options	<select> with two <option> tags
6. Value reflected below select	<p>Current theme: {theme}</p> — re-renders automatically since theme is state
7. Survives refresh	Handled entirely inside the hook — useEffect saves to localStorage every time theme changes, and the useState initializer reads it back on load
