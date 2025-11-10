# calculator.py

"""
A minimal, production-ready calculator module providing basic arithmetic operations.
"""

from __future__ import annotations

__all__ = ["add", "subtract", "multiply", "divide"]


def add(a: float | int, b: float | int) -> float:
    """
    Return the sum of *a* and *b*.

    Parameters
    ----------
    a, b : int | float
        Operands to add.

    Returns
    -------
    float
        The result of adding *a* and *b*.
    """
    return float(a) + float(b)


def subtract(a: float | int, b: float | int) -> float:
    """
    Return the difference of *a* and *b* (i.e., a - b).

    Parameters
    ----------
    a, b : int | float
        Operands for subtraction.

    Returns
    -------
    float
        The result of subtracting *b* from *a*.
    """
    return float(a) - float(b)


def multiply(a: float | int, b: float | int) -> float:
    """
    Return the product of *a* and *b*.

    Parameters
    ----------
    a, b : int | float
        Operands to multiply.

    Returns
    -------
    float
        The result of multiplying *a* by *b*.
    """
    return float(a) * float(b)


def divide(a: float | int, b: float | int) -> float:
    """
    Return the quotient of *a* divided by *b*.

    Parameters
    ----------
    a, b : int | float
        Operands for division.

    Returns
    -------
    float
        The result of dividing *a* by *b*.

    Raises
    ------
    ZeroDivisionError
        If *b* is zero.
    """
    if b == 0:
        raise ZeroDivisionError("Division by zero is not allowed.")
    return float(a) / float(b)