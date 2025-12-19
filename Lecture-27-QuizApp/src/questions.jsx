const questions = [
    {
      "id": 9666,
      "question": "Which HTML element represents a container for introductory content or navigation links?",
      "description": "Structuring HTML documents.",
      "answers": [
        { "answer": "<footer>", "isCorrect": false },
        { "answer": "<section>", "isCorrect": false },
        { "answer": "<header>", "isCorrect": true },
        { "answer": "<nav>", "isCorrect": false }
      ]
    },
    {
      "id": 9593,
      "question": "What HTML element is used for indicating text that has been emphasized?",
      "description": "Semantic emphasis in HTML.",
      "answers": [
        { "answer": "<em>", "isCorrect": true },
        { "answer": "<italic>", "isCorrect": false },
        { "answer": "<strong>", "isCorrect": false },
        { "answer": "<highlight>", "isCorrect": false }
      ]
    },
    {
      "id": 9816,
      "question": "What is the purpose of the 'defer' attribute in the <script> tag?",
      "description": "Test your understanding of the 'defer' attribute in HTML scripts.",
      "answers": [
        { "answer": "Delays script execution until the HTML document is fully parsed", "isCorrect": true },
        { "answer": "Loads the script asynchronously", "isCorrect": false },
        { "answer": "Executes the script immediately", "isCorrect": false },
        { "answer": "Prevents the script from executing", "isCorrect": false }
      ]
    },
    {
      "id": 9747,
      "question": "What HTML element is used to specify the character encoding of the HTML document?",
      "description": "Specifying document encoding.",
      "answers": [
        { "answer": "<charset>", "isCorrect": false },
        { "answer": "<meta charset>", "isCorrect": true },
        { "answer": "<encoding>", "isCorrect": false },
        { "answer": "<script>", "isCorrect": false }
      ]
    },
    {
      "id": 10443,
      "question": "How can you dynamically load a JavaScript file in an HTML document?",
      "description": "Real-world implementation challenge on dynamically loading JavaScript files.",
      "answers": [
        { "answer": "Using the <script> tag with the 'defer' attribute", "isCorrect": false },
        { "answer": "Using the <script> tag with the 'async' attribute", "isCorrect": false },
        { "answer": "Using the document.createElement('script') method", "isCorrect": true },
        { "answer": "Using the fetch API to load the script", "isCorrect": false }
      ]
    },
    {
      "id": 9592,
      "question": "Which HTML element is used to specify a footer in a table?",
      "description": "Structuring HTML tables.",
      "answers": [
        { "answer": "<tfoot>", "isCorrect": true },
        { "answer": "<footer>", "isCorrect": false },
        { "answer": "<bottom>", "isCorrect": false },
        { "answer": "<tablefooter>", "isCorrect": false }
      ]
    },
    {
      "id": 9523,
      "question": "What does the <title> tag define in an HTML document?",
      "description": "Understanding document metadata.",
      "answers": [
        { "answer": "The page footer", "isCorrect": false },
        { "answer": "The main heading", "isCorrect": false },
        { "answer": "The page title shown in the browser tab", "isCorrect": true },
        { "answer": "The first paragraph", "isCorrect": false }
      ]
    },
    {
      "id": 9631,
      "question": "What HTML element represents a generic container for content with no specific semantic meaning?",
      "description": "Non-semantic grouping elements.",
      "answers": [
        { "answer": "<section>", "isCorrect": false },
        { "answer": "<div>", "isCorrect": true },
        { "answer": "<container>", "isCorrect": false },
        { "answer": "<group>", "isCorrect": false }
      ]
    },
    {
      "id": 9629,
      "question": "What HTML tag defines the document type and version of HTML?",
      "description": "Document structure and standards.",
      "answers": [
        { "answer": "<doctype>", "isCorrect": false },
        { "answer": "<!DOCTYPE>", "isCorrect": true },
        { "answer": "<htmltype>", "isCorrect": false },
        { "answer": "<doc>", "isCorrect": false }
      ]
    },
    {
      "id": 10434,
      "question": "How can you handle errors in JavaScript when loading external scripts using the <script> tag in HTML?",
      "description": "Scenario: You are including external scripts in your HTML page, and you want to gracefully handle any errors that may occur during script loading. What approach should you take to manage script loading errors?",
      "answers": [
        { "answer": "Use the onerror event handler on the <script> tag", "isCorrect": true },
        { "answer": "Wrap the script loading code in a try-catch block", "isCorrect": false },
        { "answer": "Check the script's readyState property for errors", "isCorrect": false },
        { "answer": "Use the window.onerror global error handler", "isCorrect": false }
      ]
    },
    {
      "id": 10471,
      "question": "How can you implement error handling and debugging strategies in an HTML application using JavaScript?",
      "description": "Question on managing errors and debugging techniques in web development.",
      "answers": [
        { "answer": "Use try...catch blocks for error handling", "isCorrect": true },
        { "answer": "Utilize console.log for debugging", "isCorrect": true },
        { "answer": "Implement error boundaries with React", "isCorrect": false },
        { "answer": "Use browser developer tools for inspection", "isCorrect": true }
      ]
    },
    {
      "id": 9701,
      "question": "What HTML element is used for a multi-line text input control?",
      "description": "Form elements for user input.",
      "answers": [
        { "answer": "<input type='text'>", "isCorrect": false },
        { "answer": "<textarea>", "isCorrect": true },
        { "answer": "<textbox>", "isCorrect": false },
        { "answer": "<input type='textarea'>", "isCorrect": false }
      ]
    },
    {
      "id": 9533,
      "question": "What tag defines emphasized text in HTML?",
      "description": "Text formatting tags.",
      "answers": [
        { "answer": "<strong>", "isCorrect": false },
        { "answer": "<em>", "isCorrect": true },
        { "answer": "<italic>", "isCorrect": false },
        { "answer": "<i>", "isCorrect": false }
      ]
    },
    {
      "id": 9601,
      "question": "Which tag is used to embed external web pages within an HTML page?",
      "description": "Embedding external content.",
      "answers": [
        { "answer": "<iframe>", "isCorrect": true },
        { "answer": "<frame>", "isCorrect": false },
        { "answer": "<embed>", "isCorrect": false },
        { "answer": "<object>", "isCorrect": false }
      ]
    },
    {
      "id": 9558,
      "question": "What HTML tag creates a hyperlink?",
      "description": "Creating links.",
      "answers": [
        { "answer": "<link>", "isCorrect": false },
        { "answer": "<href>", "isCorrect": false },
        { "answer": "<hyperlink>", "isCorrect": false },
        { "answer": "<a>", "isCorrect": true }
      ]
    },
    {
      "id": 9720,
      "question": "Which HTML element is used for creating a clickable image map?",
      "description": "Interactive images in HTML.",
      "answers": [
        { "answer": "<imagemap>", "isCorrect": false },
        { "answer": "<map>", "isCorrect": true },
        { "answer": "<area>", "isCorrect": false },
        { "answer": "<clickmap>", "isCorrect": false }
      ]
    },
    {
      "id": 9713,
      "question": "What HTML tag explicitly provides the character encoding of a document?",
      "description": "Document character encoding specification.",
      "answers": [
        { "answer": "<charset>", "isCorrect": false },
        { "answer": "<meta charset='...'>", "isCorrect": true },
        { "answer": "<encoding>", "isCorrect": false },
        { "answer": "<script charset='...'>", "isCorrect": false }
      ]
    },
    {
      "id": 10453,
      "question": "How can you handle cross-origin requests in JavaScript when working with HTML?",
      "description": "Scenario-based question focusing on real-world implementation challenges.",
      "answers": [
        { "answer": "Enable CORS (Cross-Origin Resource Sharing)", "isCorrect": true },
        { "answer": "Use JSONP (JSON with Padding)", "isCorrect": false },
        { "answer": "Implement a server-side proxy", "isCorrect": true },
        { "answer": "Set up a WebSocket connection", "isCorrect": false },
        { "answer": "Use XMLHttpRequest with 'Access-Control-Allow-Origin' header", "isCorrect": false }
      ]
    },
    {
      "id": 9519,
      "question": "How can you create a numbered list in HTML?",
      "description": "Understanding HTML lists.",
      "answers": [
        { "answer": "<ul>", "isCorrect": false },
        { "answer": "<ol>", "isCorrect": true },
        { "answer": "<dl>", "isCorrect": false },
        { "answer": "<list>", "isCorrect": false }
      ]
    },
    {
      "id": 9602,
      "question": "How can you open a linked document in a new tab or window?",
      "description": "Behavior of hyperlinks.",
      "answers": [
        { "answer": "target='_self'", "isCorrect": false },
        { "answer": "target='_parent'", "isCorrect": false },
        { "answer": "target='_blank'", "isCorrect": true },
        { "answer": "target='_top'", "isCorrect": false }
      ]
    }
  ];