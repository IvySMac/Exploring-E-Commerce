const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
    });

    if (!categoryData) {
      res.status(404).json({ message: "No category found with that id!" });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});
// create a new category

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then((category) => {
    if (req.body.tagIds && req.body.tagIds.length) {
      Category.findAll({
        where: { category_id: req.params.id },
      }).then((category) => {
        // create filtered list of new tag_ids
        const categoryIds = category.map(({ tag_id }) => tag_id);
        const newCategory = req.body.categoryIds
          .filter((tag_id) => !categoryIds.includes(tag_id))
          .map((tag_id) => {
            return {
              category_id: req.params.id,
              tag_id,
            };
          });

        // figure out which ones to remove
        const categoryToRemove = category
          .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
          .map(({ id }) => id);
        // run both actions
        return Promise.all([
          Category.destroy({ where: { id: categoryToRemove } }),
          Category.bulkCreate(newCategory),
        ]);
      });
    }

    return res.json(category);
  });
});
router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
