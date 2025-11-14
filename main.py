import math

def sum(a, b):
    """Print the sum of two numbers."""
    print(a + b)

def multiply(a, b):
    """Return the product of two numbers."""
    return a * b

class Calculator:
    """A simple calculator with basic arithmetic operations."""

    def add(self, a, b):
        """Return the sum of a and b."""
        return a + b

    def subtract(self, a, b):
        """Return the difference of a and b."""
        return a - b

    def multiply(self, a, b):
        """Return the product of a and b."""
        return a * b

    def divide(self, a, b):
        """Return the division of a by b. Raises ZeroDivisionError if b is zero."""
        if b == 0:
            raise ZeroDivisionError("division by zero")
        return a / b