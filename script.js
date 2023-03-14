mandArgument = () => {
  throw Error("Argument is required");
};

haveArgument = (argument = mandArgument()) => {
  console.log("Yay you entered an ${argument}");
};
// mandArgument(argument);
// console.log(argument);

try {
  const output = haveArgument();
  console.log(output.mandArgument);
} catch (err) {
  console.log(err.message);
}

//Tried many different
