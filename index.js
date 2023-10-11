form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (checkEmail()) {
    email.value = "";
    alert("THANKS FOR TESTING");
  }
});

const checkEmail = () => {
  let value = email.value;
  if (
    !value.match(
      /[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i
    )
  ) {
    form.classList.add("error");
    return false;
  } else {
    form.classList.remove("error");
    return true;
  }
};
email.addEventListener("input", (e) => {
  checkEmail();
});
