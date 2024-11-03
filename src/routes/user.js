const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: User
 *   description: Viewing news and search functionality
 */

/**
 * @swagger
 * /user/news:
 *   get:
 *     summary: Get list of news articles
 *     tags: [User]
 *     responses:
 *       200:
 *         description: List of news articles
 */
router.get("/news", userController.getNewsList);
/**
 * @swagger
 * /user/news/{id}:
 *   get:
 *     summary: Get news article details
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the news article
 *     responses:
 *       200:
 *         description: News article details
 */
router.get("/news/:id", userController.getNewsDetails);
/**
 * @swagger
 * /user/search:
 *   get:
 *     summary: Search for news articles
 *     tags: [User]
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         description: The search term
 *     responses:
 *       200:
 *         description: List of matching news articles
 */
router.get("/search", userController.searchNews);

module.exports = router;
