def ssum(a, b):
    return a + b


def subtract(a, b):
    try:
        return a - b
    except TypeError:
        raise TypeError("Both operands must be numbers")
    except Exception as e:
        raise e


def div(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        raise ZeroDivisionError("Cannot divide by zero")
    except TypeError:
        raise TypeError("Both operands must be numbers")
    except Exception as e:
        raise e