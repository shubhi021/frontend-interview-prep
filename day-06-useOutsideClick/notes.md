 useOutsideClick — Quick Notes

**What it does:** Detects clicks outside a given element, runs a callback.

**Core logic:**
- `useRef()` → marks the box to watch
- `document.addEventListener('mousedown', handler)` → listen globally
- `ref.current.contains(event.target)` → true if click was inside
- `!contains(...)` → click was outside → call `callback()`
- Cleanup: `removeEventListener` on unmount (else = memory leak)

**Signature (this variant):**
```ts
useOutsideClick(ref, callback)   // ref created OUTSIDE, passed in
