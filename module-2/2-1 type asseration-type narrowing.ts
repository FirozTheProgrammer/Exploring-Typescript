{
  //

  //type assertion
  const kgToGram = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const createdValue = parseFloat(value) * 1000;
      return `The string value is: ${createdValue}`;
    }

    if (typeof value === "number") {
      return `The number valeu is: ${value * 1000}`;
    }
  };

  // input
  const asString = kgToGram("1000") as string;
  const asNumber = kgToGram(1000) as number;

  const asNothingString = kgToGram("1000") as string;
  // output
  console.log(asString);
  console.log(asNumber);

  const afString = kgToGram("1") as string;

  console.log(afString);
  //
}
