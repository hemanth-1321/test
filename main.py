import sys

class Calculator:
    """A reusable calculator interface."""

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
        """Return the division of a by b.

        Raises ZeroDivisionError if b is zero.
        """
        if b == 0:
            raise ZeroDivisionError("division by zero")
        return a / b


# Module level convenience functions
def add(a, b):
    """Convenience function for adding two numbers."""
    return Calculator().add(a, b)


def subtract(a, b):
    """Convenience function for subtracting two numbers."""
    return Calculator().subtract(a, b)


def multiply(a, b):
    """Convenience function for multiplying two numbers."""
    return Calculator().multiply(a, b)


def divide(a, b):
    """Convenience function for dividing two numbers."""
    return Calculator().divide(a, b)


def sum(a, b):
    """Print the sum of a and b to stdout."""
    result = add(a, b)
    print(result)


if __name__ == "__main__":
    # Simple demonstration of the calculator functions
    calc = Calculator()
    print("2 + 3 =", calc.add(2, 3))
    print("5 - 2 =", calc.subtract(5, 2))
    print("4 * 6 =", calc.multiply(4, 6))
    try:
        print("8 / 0 =", calc.divide(8, 0))
    except ZeroDivisionError as e:
        print("Error:", e)
    print("Sum function output:")
    sum(7, 8)  # Should print 15 to stdout

# End of main.py