// All the states took a preliminary vote for president, but only a few people for each state showed up. Do the following to crunch some data on the preliminary election day results (use the given `states` array).
//
// You cannot use sort(), or any shortcut methods that are similar. Try to break things into small segments.
//
// -Sort the objects inside of the state array based on population.
// -Sort the objects inside of the state array based on who voted for Trump.
// -Sort the objects inside of the state array based on those who voted for Hillary.
// -Find the total of everyone who voted.
// -Print the % of the population that voted for each state.
// -Find the five states that voted most for Trump.  Find the five states that voted most for Hillary.

var states = [
  {
    stateName: "Delaware",
    votesForHillary: 14,
    votesForTrump: 123,
    population: 925749
  },
  {
    stateName: "Pennsylvania",
    votesForHillary: 240,
    votesForTrump: 1,
    population: 12773801
  },
  {
    stateName: "New Jersey",
    votesForHillary: 124,
    votesForTrump: 15,
    population: 8899339
  },
  {
    stateName: "Georgia",
    votesForHillary: 12,
    votesForTrump: 353,
    population: 9992167
  },
  {
    stateName: "Connecticut",
    votesForHillary: 23,
    votesForTrump: 135,
    population: 3596080
  },
  {
    stateName: "Massachusetts",
    votesForHillary: 50,
    votesForTrump: 53,
    population: 6692824
  },
  {
    stateName: "Maryland",
    votesForHillary: 424,
    votesForTrump: 23,
    population: 7512548
  },
  {
    stateName: "South Carolina",
    votesForHillary: 0,
    votesForTrump: 1,
    population: 4774839
  },
  {
    stateName: "New Hampshire",
    votesForHillary: 34,
    votesForTrump: 14,
    population: 1323459
  },
  {
    stateName: "Virginia",
    votesForHillary: 233,
    votesForTrump: 153,
    population: 8260405
  },
  {
    stateName: "New York",
    votesForHillary: 253,
    votesForTrump: 15,
    population: 19651127
  },
  {
    stateName: "North Carolina",
    votesForHillary: 5,
    votesForTrump: 404,
    population: 654782
  },
  {
    stateName: "Rhode Island",
    votesForHillary: 4,
    votesForTrump: 6,
    population: 1051511
  },
  {
    stateName: "Vermont",
    votesForHillary: 23,
    votesForTrump: 54,
    population: 626630
  },
  {
    stateName: "Kentucky",
    votesForHillary: 46,
    votesForTrump: 647,
    population: 4395295
  },
  {
    stateName: "Tennessee",
    votesForHillary: 44,
    votesForTrump: 600,
    population: 6495978
  },
  {
    stateName: "Ohio",
    votesForHillary: 35,
    votesForTrump: 45,
    population: 11570808
  },
  {
    stateName: "Louisiana",
    votesForHillary: 65,
    votesForTrump: 56,
    population: 4625470
  },
  {
    stateName: "Indiana",
    votesForHillary: 21,
    votesForTrump: 12,
    population: 6570902
  },
  {
    stateName: "Mississippi",
    votesForHillary: 340,
    votesForTrump: 151,
    population: 2991207
  },
  {
    stateName: "Illinois",
    votesForHillary: 114,
    votesForTrump: 53,
    population: 12882135
  },
  {
    stateName: "Alabama",
    votesForHillary: 35,
    votesForTrump: 1351,
    population: 4833722
  },
  {
    stateName: "Maine",
    votesForHillary: 1,
    votesForTrump: 2,
    population: 1328302
  },
  {
    stateName: "Missouri",
    votesForHillary: 240,
    votesForTrump: 15,
    population: 6044171
  },
  {
    stateName: "Arkansas",
    votesForHillary: 53,
    votesForTrump: 153,
    population: 2959373
  },
  {
    stateName: "Michigan",
    votesForHillary: 35,
    votesForTrump: 647,
    population: 2854954
  },
  {
    stateName: "Florida",
    votesForHillary: 46,
    votesForTrump: 474,
    population: 19552860
  },
  {
    stateName: "Texas",
    votesForHillary: 0,
    votesForTrump: 0,
    population: 26448193
  },
  {
    stateName: "Iowa",
    votesForHillary: 436,
    votesForTrump: 123,
    population: 3090416
  },
];

function quickSort(arr) {
  if (arr.length < 1) {
    return [];
  }
  var left = [];
  var right = [];
  var pivot = arr[0].population;
  for (var i = 1; i < arr.length; i++) {
    if (pivot > arr[i].population) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [].concat(quickSort(left), pivot, quickSort(right));
}

states = quickSort(states);

console.log(states);
