import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const chatEngineResponse = await axios.get( `${process.env.CHATENGIN}/me`,
      {
        headers: {
          "Project-ID":process.env.PROJECT_ID,
          "User-Name": username,
          "User-Secret": password,
        },
      }
    );

    res.status(200).json({ response: chatEngineResponse.data });
  } catch (error) {
    console.error("error", error);
    res.status(500).json({ error: error.message });
  }
});

router.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username,password)

    const chatEngineResponse = await axios.post(
      `${process.env.CHATENGIN}/`,
      {
        username: username,
        secret: password,
      },
      {
        headers: { "Private-Key":process.env.PRIVATE_KEY },
      }
    );
    console.log(chatEngineResponse)
    console.log(res);
    res.status(200).json({ response: chatEngineResponse.data });
  } catch (error) {
    console.error("error", error.message);
    res.status(500).json({ error: error.message });
  }
});

export default router;