// 1. Product of Two Numbers
function productOfTwoNumbers() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let product = num1 * num2;
    document.getElementById("output1").innerHTML += `<p>Product: ${product}</p>`;
}

// 2. Volume of a Sphere
function volumeOfSphere() {
    let radius = parseFloat(prompt("Enter the radius of the sphere:"));
    let volume = (4/3) * Math.PI * Math.pow(radius, 3);
    document.getElementById("output2").innerHTML += `<p>Volume of Sphere: ${volume.toFixed(2)}</p>`;
}

// 3. Minimum Value Tracker
function minimumValueTracker() {
    let min = null;
    while (true) {
        let input = parseFloat(prompt("Enter a number (0 to stop):"));
        if (input === 0) break;
        if (isNaN(input)) continue;
        if (min === null || input < min) min = input;
    }
    document.getElementById("output3").innerHTML += `<p>Minimum value entered: ${min}</p>`;
}

// 4. Sort Numbers using Bubble Sort
function sortNumbers() {
    let numbers = [];
    while (true) {
        let input = prompt("Enter a number (leave blank and press OK to stop):");
        if (input === "") break;
        let num = parseFloat(input);
        if (!isNaN(num)) numbers.push(num);
    }

    // Bubble Sort
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length - i - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
            }
        }
    }

    document.getElementById("output4").innerHTML += `<p>Sorted numbers: ${numbers.join(", ")}</p>`;
}

// 5. Generate first 30 Fibonacci numbers
function generateFibonacci() {
    let fib = [0, 1];
    for (let i = 2; i < 30; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    document.getElementById("output5").innerHTML += `<p>Fibonacci (30): ${fib.join(", ")}</p>`;
}
