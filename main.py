def mutlipy(a, b):
    """Return the product of two numbers."""
    return a * b

def sum(a, b):
    """Print the sum of two numbers."""
    print(a + b)

if __name__ == "__main__":
    # Simple command line calculator
    import argparse

    parser = argparse.ArgumentParser(description="Simple calculator")
    parser.add_argument("operation", choices=["add", "subtract", "multiply", "divide"], help="Operation to perform")
    parser.add_argument("x", type=float, help="First operand")
    parser.add_argument("y", type=float, help="Second operand")
    args = parser.parse_args()

    if args.operation == "add":
        print(args.x + args.y)
    elif args.operation == "subtract":
        print(args.x - args.y)
    elif args.operation == "multiply":
        print(args.x * args.y)
    elif args.operation == "divide":
        if args.y == 0:
            raise ZeroDivisionError("division by zero")
        print(args.x / args.y)