


// Mainīgie un balsošanas kontrole
let vards = "Jānis"; // Vārds
let vecums = 20; // Vecums
let irPilsonis = true; // Pilsonība

// Izvadīt mainīgos konsolē
console.log("Vārds:", vards);
console.log("Vecums:", vecums);

// Balsošanas kontrole
function checkVotingEligibility() {
    const resultElement = document.getElementById("result");

    if (vecums >= 18 && irPilsonis === true) {
        resultElement.textContent = "Drīkst balsot.";
    } else if (vecums >= 18 && irPilsonis === false) {
        resultElement.textContent = "Personai ir 18 gadi, bet viņa nav pilsonis.";
    } else if (vecums < 18 && irPilsonis === true) {
        resultElement.textContent = "Personai nav 18 gadi, bet viņa ir pilsonis.";
    } else {
        resultElement.textContent = "Personai nav 18 gadi un viņa nav pilsonis.";
    }
}

// Ievades atzīmes novērtēšana
function evaluateGrade() {
    const grade = document.getElementById("gradeInput").value;
    let gradeResult = "";

    if (grade >= 90 && grade <= 100) {
        gradeResult = "Izcili";
    } else if (grade >= 70 && grade <= 89) {
        gradeResult = "Labi";
    } else if (grade >= 50 && grade <= 69) {
        gradeResult = "Vidēji";
    } else if (grade >= 0 && grade <= 49) {
        gradeResult = "Slikti";
    } else {
        gradeResult = "Nederīga vērtība!";
    }

    console.log(gradeResult);
}

// Skaitļu masīvs
let numbers = [1, 2, 3, 4, 5];

// Izvade uz konsoli
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//  Apgrieztā secība
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}

// Skaitļu kalkulators
function calculate() {
    const operand1 = parseFloat(document.getElementById("operand1").value);
    const operand2 = parseFloat(document.getElementById("operand2").value);
    const operator = document.getElementById("operator").value;
    const resultElement = document.getElementById("calculationResult");

    // Pārbauda, vai ievadītie ir skaitļi
    if (isNaN(operand1) || isNaN(operand2)) {
        resultElement.textContent = "Lūdzu, ievadiet derīgus skaitļus!";
        return;
    }

    let result;

    // Veic attiecīgo matemātisko darbību
    switch (operator) {
        case "+":
            result = operand1 + operand2;
            break;
        case "-":
            result = operand1 - operand2;
            break;
        case "*":
            result = operand1 * operand2;
            break;
        case "/":
            if (operand2 !== 0) {
                result = operand1 / operand2;
            } else {
                resultElement.textContent = "Dalīšana ar 0 nav atļauta!";
                return;
            }
            break;
        default:
            resultElement.textContent = "Nepazīstams operators!";
            return;
    }

    // Parāda rezultātu
    resultElement.textContent = `Rezultāts: ${result}`;
}

// Izsauc balsošanas kontroli
checkVotingEligibility();
