import { app } from "./src/app.js";
import { dbConnection } from "./src/db/db.js";
import dotenv from 'dotenv'
dotenv.config({
    path:'.env'
})

const startingServer = async () => {

  try {
    await dbConnection();
    app.listen(process.env.PORT, () =>
      console.log(`Server is running successfully on port ${process.env.PORT}`)
    );
  } catch (error) {
    console.error(`Server failed to start. Error: ${error.message}`);
  
  }
};

startingServer();
