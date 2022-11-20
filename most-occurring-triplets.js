const logFile = [
  ["/", "user_1"],
  ["/about", "user_1"],
  ["/", "user_3"],
  ["/features", "user_1"],
  ["/about", "user_2"],
  ["/purchase", "user_2"],
  ["/purchase", "user_1"],
  ["/thank-you", "user_1"],
  ["/about", "user_3"],
  ["/thank-you", "user_2"],
  ["/purchase", "user_3"],
  ["/thank-you", "user_3"],
];

function incrementTripletInMap(tripletMap, triplet) {
  const tripletKey = triplet.join("\\");

  if (!tripletMap.has(tripletKey)) {
    tripletMap.set(tripletKey, 1);
    return;
  }

  tripletMap.set(tripletKey, tripletMap.get(tripletKey) + 1);
}

function mostOccurringTriplets(requestLog, limit) {
  const requestsPerUser = requestLog.reduce((acc, [request_path, user_id]) => {
    if (!acc[user_id]) acc[user_id] = [];

    acc[user_id].push(request_path);

    return acc;
  }, {});

  const tripletCountByTripletArray = Object.values(requestsPerUser).reduce(
    (acc, request_paths) => {
      for (let i = 0; i < request_paths.length - 2; i++) {
        const triplet = request_paths.slice(i, i + 3);
        incrementTripletInMap(acc, triplet);
      }
      return acc;
    },
    new Map()
  );

  const sortedTriplets = [...tripletCountByTripletArray.entries()].sort(
    ([, aCount], [, bCount]) => bCount - aCount
  );

  return sortedTriplets
    .map(([tripletJoin]) => tripletJoin.split("\\"))
    .slice(0, limit);
}

console.log(mostOccurringTriplets(logFile, 10));
