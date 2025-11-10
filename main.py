def add(a, b):
    """Return the sum of a and b."""
    return a + b


def subtract(a, b):
    """Return the difference of a and b (a - b)."""
    return a - b


def multiply(a, b):
    """Return the product of a and b."""
    return a * b


def divide(a, b):
    """Return the quotient of a divided by b.

    Raises:
        ZeroDivisionError: If b is zero.
    """
    if b == 0:
        raise ZeroDivisionError("division by zero")
    return a / b


def sum(a, b):
    """Print the sum of a and b to stdout."""
    print(a + b)


if __name__ == "__main__":
    import unittest

    class TestCalculator(unittest.TestCase):
        def test_add(self):
            self.assertEqual(add(2, 3), 5)
            self.assertEqual(add(-1, 1), 0)

        def test_subtract(self):
            self.assertEqual(subtract(5, 3), 2)
            self.assertEqual(subtract(0, 10), -10)
            self.assertEqual(subtract(-5, -10), 5)

        def test_multiply(self):
            self.assertEqual(multiply(4, 5), 20)
            self.assertEqual(multiply(-2, 3), -6)

        def test_divide(self):
            self.assertEqual(divide(10, 2), 5)
            self.assertAlmostEqual(divide(8, 89), 8 / 89)
            with self.assertRaises(ZeroDivisionError):
                divide(5, 0)

        def test_sum_print(self):
            from io import StringIO
            import sys

            captured_output = StringIO()
            sys.stdout = captured_output
            sum(1, 9)
            sys.stdout = sys.__stdout__
            self.assertEqual(captured_output.getvalue().strip(), "10")

    unittest.main()