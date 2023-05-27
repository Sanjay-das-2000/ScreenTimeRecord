const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  name: String,
  age: String,
  DOB: String,
  POB: String,
  TOB: String,
  gestation: String,
  deliverymode: String,
  birthweight: String,
  gender: String,
  familytype: String,
  religion: String,
  educationqualificationofparent: {
    father: String,
    mother: String,
  },
  totalchildren: String,
  noofhelpingstaff: String,
  ageofhelpingstaff: String,
  nooffriends: String,
  ageoffriends: String,
  ageofstartingviewmedia: String,
  class: String,
  weekdaytimespanviewingelectronics: {
    tvwatchingtime: String,
    smartphonewatchingtime: String,
    laptopwatchingtime: String,
    tabletwatchingtime: String,
  },
  weekendtimespanviewingelectronics: {
    tvwatchingtime: String,
    smartphonewatchingtime: String,
    laptopwatchingtime: String,
    tabletwatchingtime: String,
  },
  purposeofviewscreenonweekdays: {
    foreducation: String,
    forentertainment: String,
    forplayinggames: String,
    invideocalls: String,
    duringeating: String,
    beforebed: String,
    toengage: String,
  },
  purposeofviewscreenonweekends: {
    foreducation: String,
    forentertainment: String,
    forplayinggames: String,
    invideocalls: String,
    duringeating: String,
    beforebed: String,
    toengage: String,
  },
  willchildreneatbetterwhilewatchinscreen: String,
  screentimeofprimarycaretaker: String,
  contentwatchedbyclild: {
    cartoonswathingtime: String,
    nonanimetedcartoonswatchingtime: String,
    animetedmoviewatchingtime: String,
    nonanimatedmoviewatchingtime: String,
    songslisteningtime: String,
    rhymeslisteningtime: String,
    knowledgebasedcontentwatchingtime: String,
    spiritualwatchingtime: String,
    serialwatchingtime: String,
  },
});

const Child = mongoose.model("child", Schema);

module.exports = Child;
