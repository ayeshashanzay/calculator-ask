import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "firstName",
        type: "number",
        message: "Enter your first number"
    },
    {
        name: "second",
        type: "number",
        message: "Enter your second number"
    },
    {
        name: "operator",
        type: "list",
        message: "Select your operation to preform operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }
]);
if (answer.operator === "Addition") {
    console.log(answer.firstName + answer.second);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstName - answer.second);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstName * answer.second);
}
else if (answer.operator === "Division") {
    console.log(answer.firstName / answer.second);
}
else {
    console.log("Select a valid operator ");
}
