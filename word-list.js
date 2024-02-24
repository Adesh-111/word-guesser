
  const wordList = [
    {
        word: "variable",
        hint: "What do you call a container for storing data in a program?"
    },
    {
        word: "function",
        hint: "What is a reusable block of code that performs a specific task?"
    },
    {
        word: "loop",
        hint: "What programming construct allows you to repeat a set of instructions multiple times?"
    },
    {
        word: "array",
        hint: "What data structure is used to store a collection of elements, typically of the same type?"
    },
    {
        word: "string",
        hint: "What data type is used to represent text in programming?"
    },
    {
        word: "boolean",
        hint: "What data type has only two possible values: true or false?"
    },
    {
        word: "if statement",
        hint: "What control structure allows you to make decisions in your code?"
    },
    {
        word: "comment",
        hint: "What is used to add explanatory notes to your code for human readers?"
    },
    {
        word: "parameter",
        hint: "What is a variable in a method definition that receives a value when the method is called?"
    },
    {
        word: "argument",
        hint: "What is a value passed to a function when it is invoked?"
    },
    {
        word: "html",
        hint: "What markup language is used for creating web pages?"
    },
    {
        word: "css",
        hint: "What style sheet language is used for styling web pages?"
    },
    {
        word: "JavaScript",
        hint: "What scripting language is commonly used for web development?"
    },
    {
        word: "dom",
        hint: "What does DOM stand for in the context of web development?"
    },
    {
        word: "algorithm",
        hint: "What is a step-by-step procedure for solving a problem?"
    },
    {
        word: "ide",
        hint: "What acronym stands for Integrated Development Environment?"
    },
    {
        word: "syntax",
        hint: "What refers to the rules governing the structure of code in a programming language?"
    },
    {
        word: "debugging",
        hint: "What is the process of finding and fixing errors in code?"
    },
    {
        word: "compiler",
        hint: "What is a program that translates code written in one programming language into another language?"
    },
    {
        word: "variable declaration",
        hint: "What is the process of creating a new variable in code?"
    },
    {
        word: "data type",
        hint: "What classifies values to determine what kind of data they can hold?"
    },
    {
        word: "operator",
        hint: "What is a symbol or keyword used in programming to perform operations on variables and values?"
    },
    {
        word: "debugger",
        hint: "What tool is used to step through code and examine its state during execution?"
    },
    {
        word: "syntax error",
        hint: "What type of error occurs when code violates the rules of the programming language?"
    },
    {
        word: "camelCase",
        hint: "What naming convention is commonly used in JavaScript for variable names?"
    },
    {
        word: "concatenation",
        hint: "What is the process of combining two or more strings together?"
    },
    {
        word: "return statement",
        hint: "What statement is used to specify the value that a function should return?"
    },
    {
        word: "function call",
        hint: "What is the process of executing a function in your code?"
    },
    {
        word: "conditional statement",
        hint: "What type of statement allows you to execute different code based on a condition?"
    },
    {
        word: "iteration",
        hint: "What is the repetition of a process in coding?"
    },
    {
        word: "array index",
        hint: "What is used to access an element within an array?"
    },
    {
        word: "object",
        hint: "What is a data structure that stores data and methods that operate on that data?"
    },
    {
        word: "property",
        hint: "What is a key-value pair associated with an object?"
    },
    {
        word: "method",
        hint: "What is a function associated with an object?"
    },
    {
        word: "class",
        hint: "What is a blueprint for creating objects in object-oriented programming?"
    },
    {
        word: "constructor",
        hint: "What is a special method used to initialize objects in a class?"
    },
    {
        word: "inheritance",
        hint: "What is a mechanism in which one class acquires the properties and behaviors of another class?"
    },
    {
        word: "encapsulation",
        hint: "What is the concept of bundling data and methods that operate on that data into a single unit?"
    },
    {
        word: "interface",
        hint: "What is a contract that specifies a set of methods that a class must implement?"
    },
    {
        word: "instance",
        hint: "What is an individual object created from a class?"
    },
   
      {
          word: "variable",
          hint: "What do you call a container for storing data in a program?"
      },
      {
          word: "class",
          hint: "In Java, what is the blueprint for creating objects?"
      },
      {
          word: "inheritance",
          hint: "What is the mechanism in Java where one class acquires the properties and behaviors of another class?"
      },
      {
          word: "polymorphism",
          hint: "What is the ability of a class to take on multiple forms in Java?"
      },
      {
          word: "encapsulation",
          hint: "In Java, what is the concept of bundling the data (variables) and the methods (functions) that operate on the data into a single unit?"
      },
      {
          word: "methodOverriding",
          hint: "What is the process of providing a specific implementation for a method that is already provided by its superclass?"
      },
      {
          word: "interface",
          hint: "In Java, what is a collection of abstract methods that can be implemented by multiple classes?"
      },
      {
          word: "abstractClass",
          hint: "What is a class in Java that cannot be instantiated and is typically used as a base for other classes?"
      },
      {
          word: "exceptionHandling",
          hint: "In Java, what is the mechanism to handle runtime errors or exceptional situations during program execution?"
      },
      {
          word: "thread",
          hint: "What is the smallest unit of execution in Java that operates independently, sharing resources such as memory?"
      },
      {
          word: "synchronization",
          hint: "In Java, what is the process of controlling the access of multiple threads to shared resources?"
      },
      {
          word: "garbageCollection",
          hint: "In Java, what is the process of automatically reclaiming memory occupied by unreferenced objects?"
      },
      {
          word: "collectionFramework",
          hint: "What is a unified architecture for representing and manipulating collections of objects in Java?"
      },
      {
          word: "HashMap",
          hint: "In Java, what is a class that implements the Map interface and uses a hash table for storage?"
      },
      {
          word: "equalsMethod",
          hint: "In Java, what method is used to compare the content of two objects for equality?"
      },
      {
          word: "finalizeMethod",
          hint: "In Java, what method is called by the garbage collector before reclaiming an object?"
      },
      {
          word: "staticKeyword",
          hint: "In Java, what keyword is used to create a variable or method that belongs to the class, not the instance of the class?"
      },
      {
          word: "superKeyword",
          hint: "In Java, what keyword is used to refer to the superclass, invoking its methods or accessing its fields?"
      },
      {
          word: "thisKeyword",
          hint: "In Java, what keyword is used to refer to the current instance of the class, distinguishing it from other objects?"
      },
      {
          word: "tryCatchBlock",
          hint: "In Java, what is used for exception handling, where code that might raise an exception is enclosed in a try block followed by a catch block?"
      },
      {
          word: "constructor",
          hint: "In Java, what is a special type of method used to initialize objects, called when an object is created?"
      },
      {
          word: "toStringMethod",
          hint: "In Java, what method is used to get a string representation of an object, usually for debugging or logging purposes?"
      },
      {
          word: "instanceofOperator",
          hint: "In Java, what operator is used to test whether an object is an instance of a particular class or interface?"
      },
      {
          word: "abstractMethod",
          hint: "In Java, what is a method declared without an implementation in an abstract class, to be implemented by subclasses?"
      },
      {
          word: "lambdaExpression",
          hint: "In Java, what is a feature introduced in Java 8 for expressing instances of single-method interfaces (functional interfaces) more concisely?"
      },
      {
          word: "tryWithResources",
          hint: "In Java, what is a feature introduced in Java 7 for automatic resource management, ensuring that each resource is closed at the end of the statement?"
      },
      {
          word: "streamAPI",
          hint: "In Java, what is a new abstraction introduced in Java 8 for processing sequences of elements, supporting functional-style operations on streams of elements?"
      },
      {
          word: "overrideAnnotation",
          hint: "In Java, what annotation is used to indicate that a method in a subclass is intended to override a method in its superclass?"
      },
      {
          word: "defaultMethod",
          hint: "In Java, what is a new feature introduced in Java 8 to allow adding new methods to interfaces without breaking existing implementations?"
      },
      {
          word: "functionalInterface",
          hint: "In Java, what is an interface that has exactly one abstract method and may contain multiple default or static methods?"
      },
      {
          word: "volatileKeyword",
          hint: "In Java, what keyword is used to indicate that a variable's value may be changed by multiple threads simultaneously?"
      },
      {
          word: "immutableClass",
          hint: "In Java, what is a class whose instances cannot be modified after creation, typically achieved by making all fields final and private?"
      },
      {
          word: "staticBlock",
          hint: "In Java, what block of code is used to initialize static variables or perform a one-time activity when the class is loaded?"
      },
      {
          word: "classpath",
          hint: "In Java, what is the path that specifies the location of the compiled bytecode files, allowing the Java Virtual Machine (JVM) to find and load classes?"
      },
      {
          word: "package",
          hint: "In Java, what is a mechanism for organizing classes into namespaces, preventing naming conflicts and providing a modular structure?"
      },
      {
          word: "reflection",
          hint: "In Java, what is the feature that allows a program to examine or modify its own runtime behavior, inspecting classes, methods, fields, etc.?"
      },
      {
          word: "serialization",
          hint: "In Java, what is the process of converting an object's state to a byte stream?"
      }
  
];

wordList.forEach(wordObj => {
    wordObj.word = wordObj.word.toLowerCase().replace(/\s/g, "");
});
  
