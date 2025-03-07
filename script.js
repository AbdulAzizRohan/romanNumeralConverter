const convertBtn = document.getElementById("convert-btn");
const number = document.getElementById("number");
const output = document.getElementById("output");

const romanNumerals = ["I", "V", "X", "L", "C", "D", "M"];

const convertRomanNumeral = (number) => {
  number = number.toString();
  number = number.split("").reverse().join("");

  let ans = "";

  for (let i = 0; i < number.length; i++) {
    const n = parseInt(number[i]);

    if (n === 0) continue;

    switch (n) {
      case 1:
        ans = romanNumerals[2 * i] + ans;
        break;

      case 2:
        ans = romanNumerals[2 * i] + romanNumerals[2 * i] + ans;
        break;

      case 3:
        ans =
          romanNumerals[2 * i] +
          romanNumerals[2 * i] +
          romanNumerals[2 * i] +
          ans;
        break;

      case 4:
        ans = romanNumerals[2 * i] + romanNumerals[2 * i + 1] + ans;
        break;

      case 5:
        ans = romanNumerals[2 * i + 1] + ans;
        break;

      case 6:
        ans = romanNumerals[2 * i + 1] + romanNumerals[2 * i] + ans;
        break;

      case 7:
        ans =
          romanNumerals[2 * i + 1] +
          romanNumerals[2 * i] +
          romanNumerals[2 * i] +
          ans;
        break;

      case 8:
        ans =
          romanNumerals[2 * i + 1] +
          romanNumerals[2 * i] +
          romanNumerals[2 * i] +
          romanNumerals[2 * i] +
          ans;
        break;

      case 9:
        ans = romanNumerals[2 * i] + romanNumerals[2 * i + 2] + ans;
        break;

      default:
        break;
    }
  }

  return ans;
};

const startConversion = () => {
  output.classList.remove("hidden");

  const numberInt = parseInt(number.value);

  if (!number.value) {
    output.innerText = "Please enter a valid number";
    number.value = "";
    return;
  } else if (numberInt < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    number.value = "";
    return;
  } else if (numberInt > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
    number.value = "";
    return;
  }

  output.innerText = convertRomanNumeral(numberInt);
};

convertBtn.addEventListener("click", startConversion);

number.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    startConversion();
  }
});
