// file where data objects live


/*
  line_grpah_data
  params:
    time: (unix timestamp)
    price: (market price)
*/
let line_graph_data = {};

export function appendLineGraph(time, price) {
  console.log('appending data point')
  line_graph_data.push({
    time: time,
    prie: price
  })
}
