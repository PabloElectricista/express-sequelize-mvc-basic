import app from "./app.js";
import "./database/index.js";

app.listen(process.env.PORT || 3000, function () {
  console.log(`server running on http://localhost:${this.address().port}`);
});
