#! /usr/bin/env node
import inquirer from "inquirer";
let playGame = true;
while (playGame) {
    const answer = await inquirer.prompt([{
            type: "list",
            name: "userSelection",
            message: "What would you like to do?",
            choices: ["Play", "Quit"]
        }]);
    playGame = answer?.userSelection !== "Quit";
}
