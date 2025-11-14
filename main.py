def sum(a, b):
    """Calculate the sum of two numbers and print the result."""
    result = a + b
    print(result)
    return result

def multiply(a, b):
    """Calculate the product of two numbers and print the result."""
    result = a * b
    print(result)
    return result

if __name__ == "__main__":
    import sys

    if len(sys.argv) < 4:
        print("Usage:")
        print("  python main.py sum <num1> <num2>")
        print("  python main.py multiply <num1> <num2>")
        sys.exit(1)

    operation = sys.argv[1].lower()
    try:
        num1 = float(sys.argv[2])
        num2 = float(sys.argv[3])
    except ValueError:
        print("Error: Both numbers must be valid numeric values.")
        sys.exit(1)

    if operation == "sum":
        sum(num1, num2)
    elif operation == "multiply":
        multiply(num1, num2)
    else:
        print(f"Unknown operation: {operation}")
        print("Supported operations: sum, multiply")
        sys.exit(1)