def ssum(a, b):
    return a + b

def subtract(a, b):
    return a - b

def div(a,b):
    return a/b

def fibonacci(n: int) -> int:
    """Return the nth Fibonacci number (0-indexed)."""
    if n < 0:
        raise ValueError("n must be non-negative")
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a