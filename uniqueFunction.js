var _ = require("lodash");

exports.uniqueExtentionFinder = (arrrayOfData) => {
  const groupByDataFileName = Object.keys(
    _.groupBy(arrrayOfData, (obj) => obj.nm)
  );

  const groupingOfFilename = _.groupBy(groupByDataFileName, (obj) =>
    obj.split(".")[1] ? obj.split(".")[1] : "no_extension"
  );
  const fileNameCounter = {};
  // console.log(groupingOfFilename[undefined]);
  Object.keys(groupingOfFilename).map((item) => {
    fileNameCounter[item] = groupingOfFilename[item].length;
  });
  return fileNameCounter;
};
