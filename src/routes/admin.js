const express = require("express");
const adminController = require("../controllers/adminController");
const authenticateToken = require("../middleware/auth");
const router = express.Router();

function isAdmin(req, res, next) {
  if (req.user?.role !== "ADMIN") {
    return res.status(403).json({ error: "Access denied" });
  }
  next();
}
/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: News and Category management for administrators
 */

/**
 * @swagger
 * /admin/categories:
 *   post:
 *     summary: Create a new category
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Sports"
 *     responses:
 *       201:
 *         description: Category created successfully
 *       403:
 *         description: Access denied
 */
router.post(
  "/categories",
  authenticateToken,
  isAdmin,
  adminController.createCategory
);
/**
 * @swagger
 * /admin/categories/{id}:
 *   put:
 *     summary: Update an existing category
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the category to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Updated Category"
 *     responses:
 *       200:
 *         description: Category updated successfully
 *       403:
 *         description: Access denied
 */
router.put(
  "/categories/:id",
  authenticateToken,
  isAdmin,
  adminController.updateCategory
);
/**
 * @swagger
 * /admin/categories/{id}:
 *   delete:
 *     summary: Delete a category
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the category to delete
 *     responses:
 *       200:
 *         description: Category deleted successfully
 *       403:
 *         description: Access denied
 */
router.delete(
  "/categories/:id",
  authenticateToken,
  isAdmin,
  adminController.deleteCategory
);
/**
 * @swagger
 * /admin/news:
 *   post:
 *     summary: Create a new news article
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Breaking News"
 *               content:
 *                 type: string
 *                 example: "This is the content of the news article."
 *               categoryId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: News article created successfully
 *       403:
 *         description: Access denied
 */
router.post("/news", authenticateToken, isAdmin, adminController.createNews);
/**
 * @swagger
 * /admin/news/{id}:
 *   put:
 *     summary: Update an existing news article
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the news article to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Updated News Title"
 *               content:
 *                 type: string
 *                 example: "Updated content of the news article."
 *               categoryId:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       200:
 *         description: News article updated successfully
 *       403:
 *         description: Access denied
 */
router.put("/news/:id", authenticateToken, isAdmin, adminController.updateNews);
/**
 * @swagger
 * /admin/news/{id}:
 *   delete:
 *     summary: Delete a news article
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the news article to delete
 *     responses:
 *       200:
 *         description: News article deleted successfully
 *       403:
 *         description: Access denied
 */
router.delete(
  "/news/:id",
  authenticateToken,
  isAdmin,
  adminController.deleteNews
);

module.exports = router;
