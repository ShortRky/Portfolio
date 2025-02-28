# Challenge
I made it for fun


Ah, a challenge to the AI, I see. To really push the AI to its limits, you’ll want to be precise and organized in the way you lay out the task. Here’s how you can format the challenge, focusing on both the programming language structure and the file organization to keep everything clean and easy to navigate.

AI Programming Language Creation Challenge Format
1. Introduction

Goal: Create a minimal, functional programming language that includes the basic features (variable assignment, loops, functions, conditionals).
Challenge Scope:
No external libraries or pre-built compilers.
Language should be simple but efficient.
Design for readability and maintainability.
Handle basic memory management (manual or automated).
Implement the language in a way that it can be compiled or interpreted.
2. Functional Requirements

Syntax Design:
Define a simple syntax that includes:
Variables: Support for integers, floats, strings, and booleans.
Functions: Define functions with parameters and return values.
Conditionals: Implement if statements and basic boolean logic.
Loops: Implement for and while loops.
Support for basic operations like arithmetic and logical operations (+, -, *, /, &&, ||, etc.).
Memory Management:
Decide whether to handle it manually (like C) or automatically (like Python with garbage collection).
Error Handling:
Basic error reporting for invalid syntax and runtime errors.
Output:
The language should output to the console or standard output.
3. Technical Specifications

Lexer (Tokenizer): Write a lexer that breaks input code into tokens (keywords, identifiers, operators, etc.).
Parser: Write a parser that converts the list of tokens into an Abstract Syntax Tree (AST).
Interpreter or Compiler:
If building an interpreter: Evaluate the AST on the fly.
If building a compiler: Translate the AST to machine code, bytecode, or a simplified intermediate code.
File Format:
Main program file: Contains the code of the language.
Supporting files: Include files that help with the lexer, parser, and interpreter/compiler.
README.md: Document how to use the language and run it.
Test cases: A folder for sample code to test the language's functionality.
4. File Structure Format

/YourLanguageNameProject
│
├── /src/                     # Source code for lexer, parser, and interpreter/compiler
│   ├── lexer.py              # Lexer to tokenize input
│   ├── parser.py             # Parser to build the AST
│   ├── interpreter.py        # Interpreter to execute the AST (if needed)
│   └── compiler.py           # Compiler (optional, if you prefer compiling)
│
├── /docs/                     # Documentation and additional notes
│   └── README.md             # Instructions for usage and examples
│
├── /tests/                    # Sample programs and test cases
│   ├── basic_tests.txt       # Simple tests to ensure functionality (e.g., variable assignment, loops)
│   └── advanced_tests.txt    # More complex tests (e.g., functions, error handling)
│
└── main.py                   # Entry point to run the program (either an interpreter or compiler)
5. Challenge Format

Input: Provide a small program written in the new language.
let x = 5;
let y = 10;
if (x < y) {
  print("x is smaller than y");
} else {
  print("x is greater than or equal to y");
}
Expected Output: The program should print the correct result.
x is smaller than y
6. Evaluation Criteria

Correctness: Does the AI’s language handle the input and produce the expected output?
Efficiency: How well does it handle more complex programs?
Clarity: Is the syntax and design easy to understand and use?
Error Handling: Does it produce useful error messages for invalid input or runtime errors?
Memory Management: Does the language manage memory effectively (manual or automatic)?
Submission Instructions:
Submit the complete file structure as described.
Ensure that the README.md includes setup instructions and sample code.
Submit any additional documentation or notes on design decisions.