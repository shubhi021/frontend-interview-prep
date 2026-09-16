sum(a) is called once, with the first number. It creates a variable total initialized to a, and returns a function called inner. This total variable stays alive in memory because inner "closes over" it — this is the closure that makes currying chains possible.

inner(b) is the function you keep calling again and again in the chain. Each time it's called:

If b is undefined (meaning it was called with empty parens ()), that's your signal to stop and return the accumulated total.
Otherwise, add b to total, and return inner itself again — so you can call it one more time.

Tracing sum(1)(2)(5)() step by step:

sum(1) → total = 1, returns inner
inner(2) → b = 2 (not undefined) → total = 1 + 2 = 3 → returns inner
inner(5) → b = 5 → total = 3 + 5 = 8 → returns inner
inner() → b = undefined → returns total, which is 8
