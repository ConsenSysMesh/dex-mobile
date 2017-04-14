/*
  line_grpah_data
  params:
    time: (unix timestamp)
    price: (market price)
*/
export let line_graph_data = [];

export function appendLineGraph(time, price) {
  console.log('appending data point', time, price)
  line_graph_data.push({
    time: time,
    prie: price
  })
}
