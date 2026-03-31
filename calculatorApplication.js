import readlineSync from "readline-sync";

export function calculator() {
    const input1 = readlineSync.questionInt("Enter Input 1: ");
    const input2 = readlineSync.questionInt("Enter Input 2: ");
    const action = readlineSync.questionInt("Choose operation - 1. Addition 2.Subtraction 3.Multiplication 4.Division \n");
    switch(action) {
        case 1:
            console.log("result", input1 + input2);
            break;
        case 2:
            console.log("result", input1 - input2);
            break;
        case 3:
            console.log("result", input1 * input2);
            break;
        case 4:
            console.log("result", input1 / input2);
            break;
        default:
            console.log("Invalid Operation");
            break;

    }
}