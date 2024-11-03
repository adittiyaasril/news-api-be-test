const express = require("express");
const app = express();
const prisma = require("./prisma");
const setupSwaggerDocs = require("./swagger");

const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the News Portal API");
});

setupSwaggerDocs(app);

const PORT = 8080;

async function startServer() {
  try {
    await prisma.$connect();
    console.log("Connected to the database");

    await prisma.$executeRaw`SELECT 1`;
    console.log("Database is ready");

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  startServer();
}

module.exports = app;
