def sum(a, b):
    """Prints the sum of a and b."""
    print(a + b)

def mutlipy(a, b):
    """Returns the product of a and b."""
    return a * b

def calculator():
    """Simple calculator that reads two numbers and an operation."""
    try:
        a = float(input("Enter first number: "))
        op = input("Enter operation (+, -, *, /): ").strip()
        b = float(input("Enter second number: "))
        if op == '+':
            result = a + b
        elif op == '-':
            result = a - b
        elif op == '*':
            result = a * b
        elif op == '/':
            if b == 0:
                raise ZeroDivisionError("division by zero")
            result = a / b
        else:
            print("Unsupported operation.")
            return
        print(f"Result: {result}")
    except ValueError:
        print("Invalid input.")
    except ZeroDivisionError as e:
        print(e)

if __name__ == "__main__":
    calculator()