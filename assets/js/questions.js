// list of all questions, choices, and answers
var quiz = [
    {
      question: "What element is a container for all the head elements, and may include the document title, scripts, styles, meta information, and more?",
      choices: ["<body></body>", "<head></head>", "<br></br>", "<title></title>"],
      showQuestion: true,
      answered: false,
      answer: "<head></head>"
    },
    {
      question: "What tag is used to define an interactive field where users can enter data?",
      choices: ["<dialog>", "<enterpoint>", "<datalist>", "<input>"],
      showQuestion: true,
      answered: false,
      answer: "<input>"
    },
    {
      question: "What tag is used to define – and place – an interactive button in an HTML document?",
      choices: ["<td>", "<footer>", "<button>", "<clickfield>"],
      showQuestion: true,
      answered: false,
      answer: "<button>"
    },
    {
      question: "What group of tags are used to define the text headers in the body of the HTML document?",
      choices: ["<button>", "<footer>", "<td>", "<h1>...<h6>"],
      showQuestion: true,
      answered: true,
      answer: "<h1>...<h6>"
    },
    {
      question: "What is the CSS property that sets the size of the whitespace outside the borders of the content?",
      choices: ["Margin", "Line", "Spacer", "Block-level"],
      showQuestion: true,
      answered: true,
      answer: "Margin"
    },
    {
      question: "Every HTML page must include a reference to the external file sheet file inside the ____ element.",
      choices: ["<div>", "Footer", "Body", "Link"],
      showQuestion: true,
      answered: true,
      answer: "Link"
    },
    {
      question: "CSS can be used to arrange or organize images into a ____.",
      choices: ["Gallery", "Shadow Box", "Table", "Boxes"],
      showQuestion: true,
      answered: true,
      answer: "Gallery"
    },
    {
      question: "What is the name of the property that is used to define the special state of an element?",
      choices: ["Pseudo-class", "Alignment", "Syntax", "Style"],
      showQuestion: true,
      answered: true,
      answer: "Pseudo-class"
    },
    {
      question: "What is the CSS property that is used to specify the edges of a table?",
      choices: ["Fill", "Boxes", "Margins", "Borders"],
      showQuestion: true,
      answered: true,
      answer: "Borders"
    },
    {
      question: "What is the name of the stylesheet that defines the presentation of an HTML or XML document?",
      choices: ["CSS", "jQuery", "PHP", "Java"],
      showQuestion: true,
      answered: true,
      answer: "CSS"
    },
    {
      question: "What are the CSS properties that are used to add space around sections of content?",
      choices: ["Padding", "Break", "Spacing", "Cleaner"],
      showQuestion: true,
      answered: true,
      answer: "Padding"
    },
    {
      question: "What is the name of CSS design that calls for fluid and adaptable elements based on the device resolution or size?",
      choices: ["Responsive", "Cascading", "Shifting", "Evolution"],
      showQuestion: true,
      answered: true,
      answer: "Responsive"
    },
    {
      question: "What is the element used – and hidden – in code that explains things and makes the content more readable?",
      choices: ["Comments", "Quotations", "Comparisons", "Notes"],
      showQuestion: true,
      answered: true,
      answer: "Comments"
    },
    {
      question: "What is a JavaScript element that represents either TRUE or FALSE values?",
      choices: ["RegExp", "Boolean", "Event", "Condition"],
      showQuestion: true,
      answered: true,
      answer: "Boolean"
    },
    {
      question: "In JavaScript, what element is used to store and manipulate text usually in multiples?",
      choices: ["Arrays", "Function", "Variables", "Strings"],
      showQuestion: true,
      answered: true,
      answer: "Strings"
    },
    {
      question: "In JavaScript, what is a block of code called that is used to perform a specific task?",
      choices: ["Function", "String", "Variable", "Declaration"],
      showQuestion: true,
      answered: true,
      answer: "Function"
    },
    {
      question: "What elements are used to test for TRUE or False values stored in variables?",
      choices: ["Conditional statements", "Trigger readers", "RegExp or Regular Expressions", "Comparison and logical operators"],
      showQuestion: true,
      answered: true,
      answer: "Comparison and logical operators"
    },
    {
      question: "What is the type of loop that continues through a block of code as long as the specified condition remains TRUE?",
      choices: ["Conditional Loop", "For Loop", "Else Loop", "While Loop"],
      showQuestion: true,
      answered: true,
      answer: "While Loop"
    }
  ]; 