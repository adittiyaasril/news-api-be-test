const prisma = require("../prisma");

exports.createCategory = async (req, res) => {
  const { name } = req.body;

  try {
    const category = await prisma.category.create({ data: { name } });
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: "Could not create category" });
  }
};

exports.updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const updatedCategory = await prisma.category.update({
      where: { id: parseInt(id, 10) },
      data: { name },
    });

    res.status(200).json(updatedCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not update category" });
  }
};

exports.deleteCategory = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.category.delete({ where: { id: parseInt(id) } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Could not delete category" });
  }
};

exports.createNews = async (req, res) => {
  const { title, content, categoryId } = req.body;

  try {
    const news = await prisma.news.create({
      data: {
        title,
        content,
        categoryId,
        authorId: req.user.userId,
      },
    });
    res.status(201).json(news);
  } catch (error) {
    res.status(500).json({ error: "Could not create news" });
  }
};

exports.updateNews = async (req, res) => {
  const { id } = req.params;
  const { title, content, categoryId } = req.body;

  try {
    const news = await prisma.news.update({
      where: { id: parseInt(id) },
      data: { title, content, categoryId },
    });
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: "Could not update news" });
  }
};

exports.deleteNews = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.news.delete({ where: { id: parseInt(id) } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Could not delete news" });
  }
};
