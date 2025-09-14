const prompt = require("prompt-sync")();

let marks = Number(prompt("Enter your marks (out of 100): "));

let grade;

if (marks >= 90 && marks <= 100) 
{
  grade = "A+";
} 
else if (marks >= 80 && marks < 90) 
{
  grade = "A";
} 
else if (marks >= 70 && marks < 80) 
{
  grade = "B";
} 
else if (marks >= 60 && marks < 70) 
{
  grade = "C";
} 
else if (marks >= 50 && marks < 60) 
{
  grade = "D";
} 
else if (marks >= 0 && marks < 50) 
{
  grade = "E";
} 
else 
{
  grade = "Invalid input. Please enter marks between 0-100.";
}
if(grade === "A+" || grade === "A" || grade === "B" || grade === "C" || grade === "D" || grade === "E")
{
    console.log("Your Grade is:", grade);
}
else console.log("Invalid input");