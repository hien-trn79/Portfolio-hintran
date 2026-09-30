const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3001;
const DATA_DIR = path.join(__dirname, "data");

// ─── Middleware ─────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json({ limit: "10mb" }));

// ─── Helpers ────────────────────────────────────────────────────────────────
function readJSON(filename) {
  const filePath = path.join(DATA_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw);
}

function writeJSON(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
}

// ─── ME routes ──────────────────────────────────────────────────────────────
app.get("/api/me", (req, res) => {
  try {
    const data = readJSON("me.json");
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to read me data" });
  }
});

app.put("/api/me", (req, res) => {
  try {
    const updated = { ...readJSON("me.json"), ...req.body };
    writeJSON("me.json", updated);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update me data" });
  }
});

// ─── PROJECTS routes ────────────────────────────────────────────────────────
app.get("/api/projects", (req, res) => {
  try {
    const data = readJSON("projects.json");
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to read projects" });
  }
});

app.get("/api/projects/:id", (req, res) => {
  try {
    const data = readJSON("projects.json");
    const project = data.find((p) => p.id === parseInt(req.params.id));
    if (!project) return res.status(404).json({ error: "Project not found" });
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: "Failed to read project" });
  }
});

app.put("/api/projects/reorder", (req, res) => {
  try {
    const data = readJSON("projects.json");
    const { ids } = req.body;
    const projectIds = data.map((project) => project.id);
    const isValidOrder =
      Array.isArray(ids) &&
      ids.length === data.length &&
      new Set(ids).size === data.length &&
      ids.every((id) => projectIds.includes(id));

    if (!isValidOrder) {
      return res.status(400).json({ error: "Invalid project order" });
    }

    const reordered = ids.map((id) =>
      data.find((project) => project.id === id),
    );
    writeJSON("projects.json", reordered);
    res.json(reordered);
  } catch (err) {
    res.status(500).json({ error: "Failed to reorder projects" });
  }
});

app.post("/api/projects", (req, res) => {
  try {
    const data = readJSON("projects.json");
    const newProject = {
      id: data.length > 0 ? Math.max(...data.map((p) => p.id)) + 1 : 1,
      ...req.body,
    };
    data.push(newProject);
    writeJSON("projects.json", data);
    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).json({ error: "Failed to create project" });
  }
});

app.put("/api/projects/:id", (req, res) => {
  try {
    const data = readJSON("projects.json");
    const idx = data.findIndex((p) => p.id === parseInt(req.params.id));
    if (idx === -1) return res.status(404).json({ error: "Project not found" });
    data[idx] = { ...data[idx], ...req.body, id: data[idx].id };
    writeJSON("projects.json", data);
    res.json(data[idx]);
  } catch (err) {
    res.status(500).json({ error: "Failed to update project" });
  }
});

app.delete("/api/projects/:id", (req, res) => {
  try {
    let data = readJSON("projects.json");
    const idx = data.findIndex((p) => p.id === parseInt(req.params.id));
    if (idx === -1) return res.status(404).json({ error: "Project not found" });
    data.splice(idx, 1);
    writeJSON("projects.json", data);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete project" });
  }
});

// ─── SKILLS routes ──────────────────────────────────────────────────────────
app.get("/api/skills", (req, res) => {
  try {
    const data = readJSON("skills.json");
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to read skills" });
  }
});

app.put("/api/skills", (req, res) => {
  try {
    writeJSON("skills.json", req.body);
    res.json(req.body);
  } catch (err) {
    res.status(500).json({ error: "Failed to update skills" });
  }
});

app.post("/api/skills", (req, res) => {
  try {
    const data = readJSON("skills.json");
    const newCat = {
      id: data.length > 0 ? Math.max(...data.map((s) => s.id)) + 1 : 1,
      ...req.body,
    };
    data.push(newCat);
    writeJSON("skills.json", data);
    res.status(201).json(newCat);
  } catch (err) {
    res.status(500).json({ error: "Failed to create skill category" });
  }
});

app.delete("/api/skills/:id", (req, res) => {
  try {
    let data = readJSON("skills.json");
    data = data.filter((s) => s.id !== parseInt(req.params.id));
    writeJSON("skills.json", data);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete skill category" });
  }
});

// ─── EDUCATION routes ────────────────────────────────────────────────────────
app.get("/api/education", (req, res) => {
  try {
    const data = readJSON("education.json");
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to read education" });
  }
});

app.put("/api/education/:id", (req, res) => {
  try {
    const data = readJSON("education.json");
    const idx = data.findIndex((e) => e.id === parseInt(req.params.id));
    if (idx === -1)
      return res.status(404).json({ error: "Education not found" });
    data[idx] = { ...data[idx], ...req.body, id: data[idx].id };
    writeJSON("education.json", data);
    res.json(data[idx]);
  } catch (err) {
    res.status(500).json({ error: "Failed to update education" });
  }
});

app.post("/api/education", (req, res) => {
  try {
    const data = readJSON("education.json");
    const newEdu = {
      id: data.length > 0 ? Math.max(...data.map((e) => e.id)) + 1 : 1,
      ...req.body,
    };
    data.push(newEdu);
    writeJSON("education.json", data);
    res.status(201).json(newEdu);
  } catch (err) {
    res.status(500).json({ error: "Failed to create education" });
  }
});

app.delete("/api/education/:id", (req, res) => {
  try {
    let data = readJSON("education.json");
    data = data.filter((e) => e.id !== parseInt(req.params.id));
    writeJSON("education.json", data);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete education" });
  }
});

// ─── TRANSLATIONS routes ─────────────────────────────────────────────────────
app.get("/api/translations", (req, res) => {
  try {
    const data = readJSON("translations.json");
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to read translations" });
  }
});

app.put("/api/translations", (req, res) => {
  try {
    const current = readJSON("translations.json");
    const updated = deepMerge(current, req.body);
    writeJSON("translations.json", updated);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update translations" });
  }
});

// ─── Deep merge helper ──────────────────────────────────────────────────────
function deepMerge(target, source) {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    if (
      source[key] &&
      typeof source[key] === "object" &&
      !Array.isArray(source[key]) &&
      target[key] &&
      typeof target[key] === "object"
    ) {
      result[key] = deepMerge(target[key], source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}

// ─── Start ──────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅ Admin Backend running at http://localhost:${PORT}`);
  console.log(`   GET /api/me`);
  console.log(`   GET/POST/PUT/DELETE /api/projects`);
  console.log(`   GET/PUT/POST/DELETE /api/skills`);
  console.log(`   GET/PUT/POST/DELETE /api/education`);
  console.log(`   GET/PUT /api/translations`);
});
