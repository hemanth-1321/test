import numbers
from typing import Union

Number = Union[int, float]

__all__ = ["add", "subtract", "multiply", "divide"]


def _validate_numbers(*values: Number) -> None:
    """
    Validate that all provided values are instances of int or float.

    Raises:
        TypeError: If any value is not numeric.
    """
    for value in values:
        if not isinstance(value, numbers.Number):
            raise TypeError(f"Expected numeric types, got {type(value).__name__}")


def add(a: Number, b: Number) -> Number:
    """
    Return the sum of two numeric values.

    Args:
        a: First operand.
        b: Second operand.

    Returns:
        The result of a + b.
    """
    _validate_numbers(a, b)
    return a + b


def subtract(a: Number, b: Number) -> Number:
    """
    Return the difference of two numeric values.

    Args:
        a: Minuend.
        b: Subtrahend.

    Returns:
        The result of a - b.
    """
    _validate_numbers(a, b)
    return a - b


def multiply(a: Number, b: Number) -> Number:
    """
    Return the product of two numeric values.

    Args:
        a: First factor.
        b: Second factor.

    Returns:
        The result of a * b.
    """
    _validate_numbers(a, b)
    return a * b


def divide(a: Number, b: Number) -> Number:
    """
    Return the quotient of two numeric values.

    Args:
        a: Dividend.
        b: Divisor.

    Returns:
        The result of a / b.

    Raises:
        ZeroDivisionError: If the divisor is zero.
    """
    _validate_numbers(a, b)
    if b == 0:
        raise ZeroDivisionError("Division by zero is undefined.")
    return a / b