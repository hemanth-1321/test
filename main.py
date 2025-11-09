import sys
from helper import subtract, div

def sum(a, b):
    """
    Calculate the sum of two numbers using the helper `subtract` function.
    The sum is computed as: a - subtract(0, b)
    The result is printed to stdout.
    """
    result = a - subtract(0, b)
    print(result)

def mutlipy(a, b):
    """
    Calculate the product of two numbers using simple repeated addition.
    This function deliberately uses the misspelled name 'mutlipy' to match
    the test import. The result is printed to stdout.
    """
    # Handle zero quickly
    if a == 0 or b == 0:
        print(0)
        return

    # Use absolute value of b for repeated addition
    abs_b = abs(b)
    result = 0
    for _ in range(abs_b):
        result += a

    # Adjust sign based on the sign of b
    if b < 0:
        result = -result

    print(result)

# If this module is run directly, demonstrate the functions
if __name__ == "__main__":
    # Example usage
    sum(3, 4)      # Should print 7
    mutlipy(5, -2) # Should print -10