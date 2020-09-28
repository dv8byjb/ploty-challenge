function init() {
    // Use the list of sample names to populate the select options
    var dropdown = d3.select("#selDataset");

    d3.json("samples.json").then((namedata) => {
        var sampleNames = namedata.names;
        console.log(sampleNames);

        sampleNames.forEach((sample) => {
            dropdown
                .append("option")
                .text(sample)
                .property("value", sample)
        })

        var firstid = sampleNames[0]
        dtables(firstid)

    })


}
init();

function dtables(sampleid) {
    d3.json("samples.json").then((m) => {
        var metadat = m.metadata;
        console.log(metadat);
        var filterdata = metadat.filter(x => x.id == sampleid)
        console.log(filterdata);

        var instertable = d3.select("#sample-metadata")
        Object.entries(filterdata[0]).forEach(([key, value]) => {
            row = instertable.append("tr");
            var cell = row.append("td");
            cell.text(key);
            var cell = row.append("td");
            cell.text(`:${value}`);
        });
    });
}
function chart(){
var trace1 = {
    x: 
    
    y: 
    
    type: "bar"
  };
  
  var data = [trace1];
  
  var layout = {
    title: "'Bar' Chart"
  }