const express = require("express");
const app = express();

app.use(express.json());

let items = [];
let id = 1;

// CREATE an item
app.post("/items", (req, res) => {
  const { name, description } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  const item = { id: id++, name, description };
  items.push(item);

  res.status(201).json(item);
});

// READ all items
app.get("/items", (req, res) => {
  res.json(items);
});

// READ one item
app.get("/items/:id", (req, res) => {
  const item = items.find(i => i.id === Number(req.params.id));

  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }

  res.json(item);
});

// UPDATE an item
app.put("/items/:id", (req, res) => {
  const item = items.find(i => i.id === Number(req.params.id));

  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }

  if (req.body.name) item.name = req.body.name;
  if (req.body.description) item.description = req.body.description;

  res.json(item);
});

// DELETE an item
app.delete("/items/:id", (req, res) => {
  const item = items.find(i => i.id === Number(req.params.id));

  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }

  items = items.filter(i => i.id !== item.id);
  res.json(item);
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
