const handleClick = () => {
  const input = document.getElementById("text-input");
  let text = document.querySelector(".palindrome-text");

  if (!input.value) {
    text.innerHTML = "Please, type anything. Don't leave input empty!";
  } else if (checkPalindrome(input.value)) {
    text.innerHTML = "This word or word combination is surely palindrome!";
  } else {
    text.innerHTML =
      "I have not seen such a word being palindrome. No bro its not!";
  }
};

const button = document.getElementById("check-btn");

button.addEventListener("click", handleClick);

const checkPalindrome = (palindrome) => {
  const removeChar = /[\W_]/g;
  const lowKeyPalindrome = palindrome.toLowerCase().replace(removeChar, "");

  const replacedPalindrome = lowKeyPalindrome.split("").reverse().join("");

  return lowKeyPalindrome === replacedPalindrome;
};
