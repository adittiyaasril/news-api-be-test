const prisma = require("../prisma");

exports.getNewsList = async (req, res) => {
  try {
    const news = await prisma.news.findMany({
      include: { category: true },
      orderBy: { publishedAt: "desc" },
    });
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: "Could not fetch news" });
  }
};

exports.getNewsDetails = async (req, res) => {
  const { id } = req.params;

  try {
    const news = await prisma.news.findUnique({
      where: { id: parseInt(id) },
      include: { category: true },
    });
    if (!news) return res.status(404).json({ error: "News not found" });
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: "Could not fetch news details" });
  }
};

exports.searchNews = async (req, res) => {
  const { query } = req.query;

  try {
    const news = await prisma.news.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: "insensitive" } },
          { content: { contains: query, mode: "insensitive" } },
        ],
      },
      include: { category: true, author: true },
    });
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: "Could not search for news" });
  }
};
