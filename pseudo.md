The number buttons currently manipulate the calculation variable. 

The operator buttons should allow for the user to take the calculation variable and apply the chosen operation while expecting a second operand to be given.

The operation should not be completed until the equal sign is pressed which prompts the displayed number to update using the last inputted operation.

Create variable for current operation
Create second operand variable that is prompted when an operation is in queue.
Create function for equal sign that takes the operation and the two numbers and completes the operation and provides the answer.

Users should be able to string operations so that you can enter:
12 + 7 - 5 * 3 = 42
Each operation should be completed in order, but you should be able to hit an operator and the last operation will complete and the answer will be the first operand of the next operation.

Round answers with long decimals, so that they don't overflow the screen.

PRessing = before entering all the numbers or an operator can cause problems.

Pressing clear should wipe out any existing data. Make sure the user is really starting fresh after pressing "clear".

~~Display a snarky error message if the user tries to divide by 0. Don't let it crash your calculator.~~ 