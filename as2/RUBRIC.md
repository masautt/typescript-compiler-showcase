# CS323
## Assignment 2 - Parser

The second assignment is to write a syntax analyzer. You may use any of the following implementations :

* Recursive Descent Parser
* Predictive Recursive Descent Parser
* Table Driven Predictive Parser

Hence, your assignment consists of the following tasks:
1. Rewrite the grammar provided to remove any left recursion (Also, use left factorization if necessary)

2. Use the lexer() generated in the assignment 1 to get the tokens

3. The parser should print the following to an output file :
* Tokens
* Lexemes 
* Production Rules used

That is, first, write the token and lexeme found. Then, print out all productions rules used for analyzing this token.

*Note* : A simple way to do it is to have a “print statement” at the beginning of each function that will print the production rule. It would be a good idea to have a “switch” with the “print statement” so that you can turn it on or off.

4. Error handling: If a syntax error occurs, your parser should generate a meaningful error message, such as token, lexeme, line number, and error type etc. Then, your program may exit or you may continue for further analysis. The bottom line is that your program must be able to parse the entire program if it is syntactically correct.

5. Turn in your assignment according to the specifications given in the project outline 

## Example

#### Input :

*….more ….*

 a = b + c;

*…. more ….*

#### Possible Output :

*…. more….*

Token: Identifier Lexeme: a

 * *\<Statement> -> \<Assign>*

 * *\<Assign> -> \<Identifier> = \<Expression> ;*

Token: Operator Lexeme: =

Token: Identifier Lexeme: b

 * *\<Expression> -> \<Term> \<Expression Prime>*

 * *\<Term> -> \<Factor> \<Term Prime>*

 * *\<Factor> -> \<Identifier>*

Token: Operator Lexeme: +

 * *\<Term Prime> -> (Epsilon)*

 * *\<Expression Prime> -> + \<Term> \<Expression Prime>*

Token: Identifier Lexeme: c

 * *\<Term> -> \<Factor> \<Term Prime>*

 * *\<Factor> -> \<Identifier>*

Token: Separator Lexeme: ;

 * *\<Term Prime> -> (Epsilon)*

 * *\<Expression Prime> -> (Epsilon)*

*…. more…..*