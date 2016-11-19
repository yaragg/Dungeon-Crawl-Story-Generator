// When all files are loaded, execute the below function.
			window.onload = function() {
				newVersion();
			}

			var generate = function(grammar) {
				var trace = grammar.createTrace();
				trace.expand();
				return trace.flatten();
				// return grammar.flatten();
			}

			var addToPage = function(content) {
				var el = document.createElement("p");
				el.innerHTML = content;
				document.body.appendChild(el);
			}

			var replace = function(content) {
				var el = document.createElement("p");
				el.innerHTML = content;
				document.getElementById("content").innerHTML = el.innerHTML;
			}

			var newVersion = function() {
				// Create a tracery grammar object from MYRULE (a global variable defined from the grammar in the file grammar.json)
				var grammar = tracery.createGrammar(MYRULE);

				// Call the "generate" function below to make a single expansion of the grammar and "flatten" it into a string.
				var result = generate(grammar);

				// Call the "addToPage" function below to append the result string to the body of the html page. (In a real project, you'd probably want a more complicated infrastructure for displaying the output text.)
				// Call "replace" instead to overwrite the paragraph already there.
				replace(result);
			}