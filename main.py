def sum(a, b):
    """Print the sum of a and b."""
    print(a + b)

def mutlipy(a, b):
    """Return the product of a and b."""
    return a * b

# If this module is run directly, demonstrate the functions
if __name__ == "__main__":
    print("Sum of 2 and 3:", end=" ")
    sum(2, 3)
    print("Product of 4 and 5:", mutlipy(4, 5))