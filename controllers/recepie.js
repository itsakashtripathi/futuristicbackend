const cheerioUtil = require("../utils/cheerioUtil");
const { sequelize } = require("../models");
const model = require("../models");
const Recepie = model.recepie;

module.exports = {

    createRecepie: async (req, res) => {
        try {
            const recipeData = await cheerioUtil.scrapeRecepie(req.body.url);
            let recipeSteps = [];
            recipeData.recipeInstructions.forEach(element => recipeSteps = [...recipeSteps, ...element.itemListElement]);
            recipeSteps.forEach((item) => {
                delete item["@type"];
                delete item["name"];
                delete item["url"];
            });
            let recepie = (await Recepie.create({
                recepie_name: recipeData.name,
                image: recipeData.image[0] || null,
                description: recipeData.description,
                recepie: recipeSteps,
            }))?.toJSON();
            res.status(200).json({ success: true, data: recepie, message: `Recepie Saved Successfully` });
        } catch (error) {
            console.log("Error In Creating Recepie:: ", error);
            res.status(500).json({ success: false, data: null, message: error.message })
        }
    },

}