{
  // interface -- generic

  interface Developer<T, X = null> {
    name: String;
    computer: {
      brand: string;
      model: string;
      ram: string;
    };
    smartWatch: T;
    bike?: X;
  }

  const poorDeveloper: Developer<{
    brand: string;
    model: string;
  }> = {
    name: "Frz",
    computer: {
      brand: "Samsung",
      model: "LF22",
      ram: "16 GB",
    },
    smartWatch: {
      brand: "Apple clone",
      model: " Series 9",
    },
  };

  interface appleWatch {
    brand: string;
    model: string;
    display: string;
    heartTracking: boolean;
    sleepTracking: boolean;
  }

  const richDeveloper: Developer<appleWatch> = {
    name: "Frz",
    computer: {
      brand: "Samsung",
      model: "LF22",
      ram: "16 GB",
    },
    smartWatch: {
      brand: "Apple",
      model: " Series 9",
      display: "XD-OLED",
      heartTracking: true,
      sleepTracking: true,
    },
  };

  //
}
