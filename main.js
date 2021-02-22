// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

function calculateToSell(inventory) {
  let toSellTotal = 0
  for (let i = 0; i < inventory.length; i++) {
    const item = inventory[i];
    let toSellForEachProduct = (item.originalStock - item.sold);
    toSellTotal = toSellTotal + toSellForEachProduct;
  }
  return toSellTotal;
}

function createElement(p, text, textColor, className) {
  let element = document.createElement(p);
  element.innerText = text;
  element.style.color = textColor;
  element.className = className;
  document.body.appendChild(element);
}

const toSell = createElement("p", `Total to sell: ${calculateToSell(inventory)}`, "red", "", "to-sell");

const TVNames = inventory.map((tv) => {
  return tv.name;
});

function showSoldOutDevices() {
  const soldOutTVs = inventory.filter((tv) => {
    return tv.originalStock === tv.sold;
  });
  return soldOutTVs;
}

function showAmbilightTVs() {
  const hasAmbilight = inventory.filter((tv) => {
    return tv.options.ambiLight === true;
  });
  return hasAmbilight;
}

function sortByPrice() {
  const sortLowToHigh = inventory.sort((tvOne, tvTwo) => {
    return tvOne.price - tvTwo.price;
  });
  return sortLowToHigh
}

function calculateTotalTurnOver(inventory) {
  let turnOver = 0;
  for (let i = 0; i < inventory.length; i++) {
    const object = inventory[i];
    turnOver = turnOver + (object.originalStock * object.price);
  }
  return turnOver;
}

const totalTurnOver = createElement("p", `Total turnover: € ${calculateTotalTurnOver(inventory)}, if everything has been sold`, "blue", "", "max-turnover");

function calculateTurnOver(inventory) {
  let turnOver = 0
  for (let i = 0; i < inventory.length; i++) {
    const object = inventory[i];
    turnOver = turnOver + (object.sold * object.price);
  }
  return turnOver;
}

const turnOver = createElement("p", `Current turnover: € ${calculateTurnOver(inventory)}`, "green", "", "current-turnover");

function inchesToCM(inches) {
  return Math.round(inches / 0.39370);
}

function generateScreenSizesString(tv) {
  let object = "";

  for (let i = 0; i < tv.availableSizes.length; i++) {
    object = object + tv.availableSizes[i] + " inch " + "(" + inchesToCM(tv.availableSizes[i]) + ")" + " | ";
  }
  return object.slice(0, -3);
}

function generateTVString(tv) {
  return tv.brand + " " + tv.type + " - " + tv.name;
}

function formatPrice(tv) {
  return "€" + tv.price + ",-";
}

function showInventory(inventory) {
  for (let i = 0; i < inventory.length; i++) {
    let tv = inventory[i];
    const showTV = generateTVString(tv) + "\n" + formatPrice(tv) + "\n" + generateScreenSizesString(tv);
    createElement("p", showTV, "", "tvs");
  }
}

function removeTV() {
  let elements = document.getElementsByClassName("tvs");
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

const sortPrice = document.getElementById("sort-price-button")
sortPrice.addEventListener("click",() => {
  removeTV();
  showInventory((sortByPrice()));
})

const sortAmbilight = document.getElementById("ambilight-tvs-button")
sortAmbilight.addEventListener("click", () => {
  removeTV();
  showInventory(showAmbilightTVs());
})

const sortSoldOut = document.getElementById("sold-out-devices-button")
sortSoldOut.addEventListener("click", ()=> {
  removeTV();
  showInventory(showSoldOutDevices());
})

showInventory(inventory);