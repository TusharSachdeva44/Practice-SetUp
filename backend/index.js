import express from 'express'
import 'dotenv/config'

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Successfully working...")
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
  {
    "id": 1,
    "title": "Why did the JavaScript developer go broke?",
    "joke": "Because he didn’t ‘typeof’ his expenses."
  },
  {
    "id": 2,
    "title": "How do programmers like their coffee?",
    "joke": "Just like their code—strong and without too many bugs."
  },
  {
    "id": 3,
    "title": "What did the variable say when it was redeclared?",
    "joke": "Here we go again…"
  },
  {
    "id": 4,
    "title": "Why do JavaScript developers hate going to restaurants?",
    "joke": "Because they hate callbacks!"
  },
  {
    "id": 5,
    "title": "Why was the function sad?",
    "joke": "Because it didn’t get invoked!"
  }
    ]
    res.json(jokes)
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})