//Basic Info
let rating, people, bill, bonus;
//Percentages
let low, normal, high;
low = 0.1;
normal = 0.15;
high = 0.2;

const runCalc = () => {
  rating = document.getElementById("rating");
  let rated = rating.options[rating.selectedIndex].value;
  people = parseInt(document.getElementById("people").value);
  bill = document.getElementById("bill").value;
  bill = parseInt(bill);
  bonus =
    rated >= 4
      ? bill * high
      : rated == 3
      ? bill * normal
      : rated < 3
      ? bill * low
      : console.log("Could not calculate tip");
  bonus = (bonus / people).toFixed();
  bill += parseInt(bonus * people);

  document.getElementById("result").innerHTML =
    "Total: $" + bill + " " + "-  Per Person: $" + bonus + "/ Person";
};
