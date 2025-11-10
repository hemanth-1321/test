import calculator

def sum(a, b):
    """Return the sum of a and b, printing the result."""
    result = calculator.add(a, b)
    print(result)
    return result

def mutlipy(a, b):
    """Return the product of a and b."""
    return calculator.multiply(a, b)

__all__ = ['sum', 'mutlipy']