import inquirer from "inquirer";
let isFriend = await inquirer.prompt([{
        name: "name",
        type: "string",
        message: "Enter your name"
    }
]);
if (isFriend.name === "Urooj" || isFriend.name === "Fatima") {
    console.log(`${isFriend.name} is your friend.`);
}
else {
    console.log(`${isFriend.name} is not your friend`);
}
