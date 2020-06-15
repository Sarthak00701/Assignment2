# Assignment1
income/expenses webpage

Problem statement: Make a webpage to allow users to add their income/expenses, and show them a tabular form of their inputs.

# Changes from last assignment
- [x] Avoided usage of global variables using closure.
- [x] Modified the CSV parser to work correctly.
- [x] Consistent coding style. Declared variables in camel case. 
# Requirements (must haves):
- [x] Show a textarea where the user can input the CSV string, along with a submit button.
- [x] On receiving the CSV data, validate the CSV input. If there is an error, show an alert to the user telling them about the error. If the data is correct, convert it into an array of objects that you can use later as a data store. Clear the input field once done.
- [x] Show a table beside the form, which shows the data entered by the user. Each table row should correspond to a single income/expenditure.
- [x] For each row, add a delete button, clicking which should delete that entry from your data store.
# Requirements (good to haves):
- [x] Colour-code the rows in the table as green for income and red for expenses.
- [x] Show total/average income and expenses below the table.
- [x] Upon adding a CSV in the input box again, append the new data to an existing table.
- [ ] Put buttons to sort the table along with each column.
- [ ] Put filter dropdowns to apply certain filters.

# Usage instructions
Just give "tsc -w" command in the terminal and launch the index.html page.
