import math

def sum(a, b):
    """Prints the sum of two numbers."""
    print(a + b)

def mutlipy(a, b):
    """Returns the product of two numbers."""
    return a * b

def calculate(a, b, op):
    """Performs a basic arithmetic operation on two numbers.

    Parameters:
        a (float): The first operand.
        b (float): The second operand.
        op (str): A string indicating the operation ('+', '-', '*', '/').

    Returns:
        The result of the operation.

    Raises:
        ZeroDivisionError: If division by zero is attempted.
        ValueError: If an unsupported operation is provided.
    """
    if op == '+':
        return a + b
    elif op == '-':
        return a - b
    elif op == '*':
        return a * b
    elif op == '/':
        if b == 0:
            raise ZeroDivisionError("division by zero")
        return a / b
    else:
        raise ValueError(f"Unsupported operation: {op}")