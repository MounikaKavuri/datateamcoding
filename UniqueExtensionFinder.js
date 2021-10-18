const { uniqueExtentionFinder } = require("./uniqueFunction");

const dataGenerator = async () => {
  let arrrayOfData = [];
  let lineReader = require("readline").createInterface({
    input: require("fs").createReadStream("./log.json"),
  });

  for await (const line of lineReader) {
    arrrayOfData.push(JSON.parse(line));
  }
  return arrrayOfData;
};

dataGenerator().then((obj) => console.log(uniqueExtentionFinder(obj)));
