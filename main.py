def sum(a, b):
    """Calculate the sum of two numbers and print the result."""
    result = a + b
    print(result)

def mutlipy(a, b):
    """Calculate the product of two numbers and return the result."""
    return a * b

if __name__ == "__main__":
    # Example usage
    print("Sum of 2 and 3:", end=" ")
    sum(2, 3)
    print("Product of 4 and 5:", mutlipy(4, 5))