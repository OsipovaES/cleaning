import express from "express";
import bcrypt from "bcrypt";
import { registerUser, findUserByUsername } from "../db/queries.js";

const router = express.Router();

// Регистрация
router.post("/register", async (req, res) => {
  const { name, phone, email, username, password } = req.body;

  try {
    const existingUser = await findUserByUsername(username);
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Пользователь с таким логином уже существует" });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = await registerUser({
      name,
      phone,
      email,
      username,
      passwordHash,
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Ошибка сервера", error });
  }
});

// Авторизация
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await findUserByUsername(username);
    if (!user) {
      return res.status(401).json({ message: "Неверный логин или пароль" });
    }

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res.status(401).json({ message: "Неверный логин или пароль" });
    }

    res.json({
      message: "Авторизация успешна",
      user: { id: user.id, username: user.username },
    });
  } catch (error) {
    res.status(500).json({ message: "Ошибка сервера", error });
  }
});

export default router;
