const chai = require("chai");
const { uniqueExtentionFinder } = require("../uniqueFunction");
const expect = chai.expect;

describe("testing", () => {
  it("should test the testing data and give the output as ext:1 and pdf:1", () => {
    expect(uniqueExtentionFinder(testingData)).deep.equal({
      ext: 1,
      pdf: 1,
    });
  });
});

const testingData = [
  {
    ts: 1551140352,
    pt: 55,
    si: "3380fb19-0bdb-46ab-8781-e4c5cd448074",
    uu: "0dd24034-36d6-4b1e-a6c1-a52cc984f105",
    bg: "77e28e28-745a-474b-a496-3c0e086eaec0",
    sha: "abb3ec1b8174043d5cd21d21fbe3c3fb3e9a11c7ceff3314a3222404feedda52",
    nm: "phkkrw.ext",
    ph: "/efvrfutgp/expgh/phkkrw",
    dp: 2,
  },

  {
    ts: 1551140352,
    pt: 55,
    si: "3380fb19-0bdb-46ab-8781-e4c5cd448074",
    uu: "0dd24034-36d6-4b1e-a6c1-a52cc984f105",
    bg: "77e28e28-745a-474b-a496-3c0e086eaec0",
    sha: "abb3ec1b8174043d5cd21d21fbe3c3fb3e9a11c7ceff3314a3222404feedda52",
    nm: "asdf.pdf",
    ph: "/efvrfutgp/asdf.pdf",
    dp: 2,
  },

  {
    ts: 1551140352,
    pt: 55,
    si: "3380fb19-0bdb-46ab-8781-e4c5cd448074",
    uu: "0dd24034-36d6-4b1e-a6c1-a52cc984f105",
    bg: "77e28e28-745a-474b-a496-3c0e086eaec0",
    sha: "abb3ec1b8174043d5cd21d21fbe3c3fb3e9a11c7ceff3314a3222404feedda52",
    nm: "phkkrw.ext",
    ph: "/efvrfutgp/expgh/phkkrw",
    dp: 2,
  },
];
