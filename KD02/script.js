function veiktOperaciju() {
    // Iegūstam ievadītos datus
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let operator = document.getElementById("operator").value;
    
    // Pārbaudām, vai abi ievadītie skaitļi ir derīgi
    if (isNaN(num1) || isNaN(num2)) {
        alert("Lūdzu, ievadiet derīgus skaitļus.");
        return;
    }
    
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    // Mainīgie, lai veiktu aprēķinus
    let rezultats;
    
    // Izvēlamies operāciju
    switch (operator) {
        case "+":
            rezultats = num1 + num2;
            break;
        case "-":
            rezultats = num1 - num2;
            break;
        case "*":
            rezultats = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Nedrīkst dalīt ar nulli!");
                return;
            }
            rezultats = num1 / num2;
            break;
        default:
            alert("Nepareizs operators.");
            return;
    }
    
    // Izvade rezultāta
    document.getElementById("rezultats").innerText = "Rezultāts: " + rezultats;
}