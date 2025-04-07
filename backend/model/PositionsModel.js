const {model} = require("mongoose")
// const {PositionsModel} =require("../schemas/PositionsModel");
const { PositionsSchema } = require("../schemas/PositionsSchema");
const PositionsModel = new model("position",PositionsSchema)
module.exports = {PositionsModel};