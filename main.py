import unittest
from helper import subtract, div
from main import mutlipy, sub  # Assuming your main code is in main.py

class TestHelperFunctions(unittest.TestCase):
    
    def test_div(self):
        self.assertEqual(div(8, 4), 2)
        self.assertAlmostEqual(div(8, 89), 8 / 89)
        with self.assertRaises(ZeroDivisionError):
            div(5, 0)

    def test_subtract(self):
        self.assertEqual(subtract(99, 10), 89)
        self.assertEqual(subtract(0, 10), -10)
        self.assertEqual(subtract(-5, -10), 5)

    def test_sum(self):
        from io import StringIO
        import sys
        captured_output = StringIO()
        sys.stdout = captured_output
        sub(1, 9)
        sys.stdout = sys.__stdout__
        self.assertEqual(captured_output.getvalue().strip(), "10")

if __name__ == '__main__':
    unittest.main()