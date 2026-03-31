import { addEmployee, getEmployee, updateEmployee, deleteEmployee, searchEmployee } from './employee.js';
import  readlineSync  from 'readline-sync';

export async function main() {
   
const enterOperation  = readlineSync.questionInt("Enter Operation; 1. Add, 2. View, 3: Update, 4: Delete, 5: Search \n");
switch(enterOperation) {
    case 1:
       await addEmployee({
        id: readlineSync.questionInt("id:", ),
        name: readlineSync.question("name:", ),
        email: readlineSync.question("email:", ),
        salary: readlineSync.questionInt("salary", ),
       })
       break;
    case 2:
        await getEmployee();
        break;
    case 3:
        const id =  readlineSync.questionInt("id:", );
        await updateEmployee(id, {
              id: readlineSync.questionInt("id:", ),
        name: readlineSync.question("name:", ),
        email: readlineSync.question("email:", ),
        salary: readlineSync.questionInt("salary", ),
        })
        break;
    case "4":
        const idDelete =  readlineSync.questionInt("id:", );
        await deleteEmployee(idDelete);
        break;
    case 5:
        const search =  readlineSync.question("query", );
        await searchEmployee(search);
        break;
    default:
    console.log('invalid');
}
}

main();