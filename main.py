import argparse
from helper import subtract, div

def sum(a, b):
    """Print and return the sum of a and b."""
    result = a + b
    print(result)
    return result

def mutlipy(a, b):
    """Print and return the product of a and b."""
    result = a * b
    print(result)
    return result

def main():
    parser = argparse.ArgumentParser(description='Simple calculator')
    subparsers = parser.add_subparsers(dest='command', required=True)

    # Add
    add_parser = subparsers.add_parser('add', help='Add two numbers')
    add_parser.add_argument('x', type=float)
    add_parser.add_argument('y', type=float)

    # Subtract
    sub_parser = subparsers.add_parser('subtract', help='Subtract two numbers')
    sub_parser.add_argument('x', type=float)
    sub_parser.add_argument('y', type=float)

    # Multiply
    mul_parser = subparsers.add_parser('multiply', help='Multiply two numbers')
    mul_parser.add_argument('x', type=float)
    mul_parser.add_argument('y', type=float)

    # Divide
    div_parser = subparsers.add_parser('divide', help='Divide two numbers')
    div_parser.add_argument('x', type=float)
    div_parser.add_argument('y', type=float)

    args = parser.parse_args()

    if args.command == 'add':
        sum(args.x, args.y)
    elif args.command == 'subtract':
        print(subtract(args.x, args.y))
    elif args.command == 'multiply':
        mutlipy(args.x, args.y)
    elif args.command == 'divide':
        print(div(args.x, args.y))

if __name__ == '__main__':
    main()