def add(a, b):
    """Return the sum of a and b."""
    return a + b


def subtract(a, b):
    """Return the difference of a and b."""
    return a - b


def div(a, b):
    """Return the division of a by b. Raises ZeroDivisionError if b is zero."""
    return a / b


def modulo(a, b):
    """Return the remainder of a divided by b. Raises ZeroDivisionError if b is zero."""
    return a % b


# Backwards‑compatible alias
ssum = add