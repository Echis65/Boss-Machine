import express from "express"
import apiRouter from './server/Routes/minion.js';
import ideaRouter from './server/Routes/ideas.js';
import meetingRouter from './server/Routes/meetings.js'
import morgan from "morgan";
import cors from "cors"
import bodyParser from "body-parser";
const app = express();


export default app;

/* Do not change the following line! It is required for testing and allowing
*  the frontend application to interact as planned with the api server
*/
const PORT = process.env.PORT || 4001;

// Add middleware for handling CORS requests from index.html
app.use(cors())
app.use(morgan('dev'))
// Add middware for parsing request bodies here:
app.use(bodyParser.json())

// Mount your existing apiRouter below at the '/api' path.
app.use('/api', [apiRouter, ideaRouter, meetingRouter])



// This conditional is here for testing purposes:

  // Add your code to start the server listening at PORT below:

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
