/*
 *                          JAVA PRIMITIVE DATA
 * byte         1 byte      STORES WHOLE NUMBERS FROM -128 TO 127
 * short        2 bytes     STORES WHOLE NUMBERS FROM -32,768 TO 32,767
 * int          4 bytes     STORES WHOLE NUMBERS FROM -2,147,483,648 TO 2,147,483,647
 * long         8 bytes     STORES WHOLE NUMBERS FROM -9,223,372,036,854,775,808 TO 9,223,372,036,854,775,807
 * float        4 bytes     STORES FRACTIONAL NUMBERS. SUFFICIENT FOR STORING 6 TO 7 DECIMAL DIGITS
 * double       8 bytes     STORES FRACTIONAL NUMBERS. SUFFICIENT FOR STORING 15 DECIMAL DIGITS
 * boolean      1 bytes     STORES TRUE OR FALSE VALUES
 * char         2 bytes     STORES A SINGLE CHARACTER/LETTER OR ASCII VALUES
 * 
 */

public class cheatsheetJava {
    /* DECLARACION DE VARIABLES PRIMITIVAS */
    int myNum = 5;                                  // INTEGER (whole number)
    float myFloatNum = 5.99f;                       // FLOATING POINT NUMBER
    char myLetter = 'D';                            //CHARACTER
    boolean myBool = true;                          // BOOLEAN
    String myText = "Hello world";                  // STRING
    /* DECLARACION DE VARIABLES NO PRIMITIVAS */
    String str = "Hello world";                     // STRING
    String[] cars = {"Mercedes","BMW"};             // ARRAY
    public class clss {                             // CLASS
        int a = 5;
    }
    /*  ASSIGNMENT OPERATOR */
    int x = 10; // ASSIGNING VALUES
    /*  UNARY OPERATOR */
    System.out.println(x++);                        // OUTPUT = 10 {MEMORY VALUE =11}
    System.out.println(++x);                        // OUTPUT = 12 {MEMORY VALUE =12}
    System.out.println(x--);                        // OUTPUT = 12 {MEMORY VALUE =11}
    System.out.println(--x);                        // OUTPUT = 10 {MEMORY VALUE =10}
    System.out.println(~x);                         // OUTPUT = -11 {MINUS OF TOTAL POSITIVE VALUE WICH STARTS FROM 0}
    boolean c = true;
    System.out.println(!c);                         // FALSE {OPPOSITE OF BOOLEAN VALUE}
    /*  ARITHMETIC OPERATOR */
    int n = 10;
    int m = 5;
    System.out.println(n+m);                        // OUTPUT = 15
    System.out.println(n-m);                        // OUTPUT = 5
    System.out.println(n*b);                        // OUTPUT = 50
    System.out.println(n/b);                        // OUTPUT = 2
    System.out.println(n%b);                        // OUTPUT = 0

    /*  SHIFT OPERATOR */
    /*  RELATIONAL OPERATOR */
    /*  BITWISE OPERATOR */
    /*  LOGICAL OPERATOR */
    /*  TERNARY OPERATOR */
    
}
