const obj = {
  1: {
    4: 40,
    3: 30,
    2: 15,
    6: 100,
  },
  2: {
    6: 50,
  },
  3: {
    4: 5,
    6: 95,
  },
  4: {
    5: 70,
  },
  5: {
    6: 10,
  },
  6: {},
};

const findCheapestWay = (graph, start, end) => {
  const processed = [];

  const findLowestCostNode = (nodes) => {
    const unprocessed = Object.keys(nodes)
      .reduce((acc, key) => (processed.includes(key) ? acc : { ...acc, [key]: nodes[key] }), {});
    const lowestValue = Math.min(...Object.values(unprocessed));
    return Object.keys(unprocessed).find(key => nodes[key] === lowestValue);
  };
  const costs = Object.keys(graph)
    .reduce((acc, key) => (key === start
      ? acc
      : { ...acc, [key]: graph[start][key] || Infinity }), {});

  const parents = Object.keys(graph[start])
    .reduce((acc, key) => ({ ...acc, [key]: start }), {});

  while (findLowestCostNode(costs)) {
    const node = findLowestCostNode(costs);
    const cost = costs[node];
    const neighbors = graph[node];

    Object.keys(neighbors).forEach((n) => {
      const newCost = cost + neighbors[n];
      if (newCost < costs[n]) {
        costs[n] = newCost;
        parents[n] = node;
      }
    });

    processed.push(node);
  }
  const path = (node) => {
    if (node === start) {
      return node;
    }
    const previousNode = parents[node];
    return `${path(previousNode)} ==> ${node}`;
  };
  console.log(`The cheapest path is ${path(end)}, its value is ${costs[end]}`);
  return costs[end];
};

findCheapestWay(obj);
