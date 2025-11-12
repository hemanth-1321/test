def sum(a, b):
    """Print the sum of a and b."""
    result = a + b
    print(result)

def mutlipy(a, b):
    """Return the product of a and b."""
    return a * b

# Calculator feature
class Calculator:
    """A simple calculator class supporting basic arithmetic operations."""
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
        """Return the quotient of a divided by b.

        Raises:
            ZeroDivisionError: If b is zero.
        """
        if b == 0:
            raise ZeroDivisionError("division by zero")
        return a / b

# If this module is run directly, demonstrate the calculator functionality
if __name__ == "__main__":
    calc = Calculator()
    print("Add 3 + 5 =", calc.add(3, 5))
    print("Subtract 10 - 4 =", calc.subtract(10, 4))
    print("Multiply 6 * 7 =", calc.multiply(6, 7))
    print("Divide 20 / 4 =", calc.divide(20, 4))