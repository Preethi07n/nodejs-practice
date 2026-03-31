
export async function addEmployee(emp) {
    const res = await fetch("http://localhost:3000/employees", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(emp)
    });
    const data = await res.json();
    console.log("Data Added", data);
}


export async function getEmployee() {
    const res = await fetch("http://localhost:3000/employees");
    const data = await res.json();
    console.log("View Data", data);
}

export async function updateEmployee(id, updatedData) {
    const res = await fetch(`http://localhost:3000/employees/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedData)
    });
    const data = await res.json();
    console.log("Data Added", data);
}

export async function deleteEmployee(id) {
    const res = await fetch(`http://localhost:3000/employees/${id}`, {
        method: "DELETE"
    });
    if(res.ok) {
        console.log("Deleted Successfully");
    }
}

export async function searchEmployee(query) {
    const res = await fetch("http://localhost:3000/employees");
    const data = await res.json();
    const result = data.filter(emp => emp.id === query || emp.name === query || emp.salary === query);
    console.log("Search result", result);
}