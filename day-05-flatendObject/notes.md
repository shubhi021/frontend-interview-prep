prefix param → tracks the dot-path so far (techStack.framework)
typeof value === 'object' → detects nested objects (needs typeof, not a direct string comparison)
value !== null → guards against the JS quirk where typeof null === 'object'
Recursion → call flattenObj again on nested values, merge result back with spread { ...result, ...nested }
return placement → must be after the loop, not inside it
