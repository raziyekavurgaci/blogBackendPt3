import express from "express";
import dotenv from "dotenv";
import categoryRoute from "src/modules/category/route";
import postRoute from "src/modules/post/route";
import commentRoute from "src/modules/comment/route";
import userRoute from "src/modules/user/route";
import tagRoute from "src/modules/tag/route";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/categories", categoryRoute);
app.use("/api/posts", postRoute);
app.use("/api/comments", commentRoute);
app.use("api/users", userRoute);
app.use("api/tags", tagRoute);

app.listen(process.env.PORT || 3000, () => {
  console.log("Sunucu ayakta");
});
