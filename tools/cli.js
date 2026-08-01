#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const schemasDir = path.join(root, "schemas");

function listSchemas() {
  if (!fs.existsSync(schemasDir)) {
    return [];
  }
  return fs.readdirSync(schemasDir).filter((f) => f.endsWith(".schema.json"));
}

function printHelp() {
  console.log("Sovereign Systems CLI (v1 scaffold)");
  console.log("");
  console.log("Commands:");
  console.log("  help                     Show this help");
  console.log("  validate                 Parse all schema files");
  console.log("  new-record               Show shared record contract");
  console.log("  lineage:add-person       Scaffold lineage person input");
  console.log("  newsroom:new-article     Scaffold newsroom article input");
  console.log("  discipline:log           Scaffold discipline entry input");
  console.log("  sim:run                  Scaffold regenerative simulation run");
  console.log("  story:prompt             Output story inquiry prompts");
}

function validateSchemas() {
  const schemas = listSchemas();
  if (!schemas.length) {
    console.error("No schema files found in /schemas.");
    process.exitCode = 1;
    return;
  }

  let errors = 0;
  for (const file of schemas) {
    const fullPath = path.join(schemasDir, file);
    try {
      const raw = fs.readFileSync(fullPath, "utf8");
      JSON.parse(raw);
      console.log("OK:", file);
    } catch (err) {
      errors += 1;
      console.error("INVALID:", file);
      console.error(" ", err.message);
    }
  }

  if (errors > 0) {
    process.exitCode = 1;
  } else {
    console.log("All schema files parsed successfully.");
  }
}

function showRecordContract() {
  console.log("Shared Sovereign Record fields:");
  console.log("- id");
  console.log("- type");
  console.log("- payload");
  console.log("- created_at");
  console.log("- updated_at");
  console.log("- source_refs[]");
  console.log("- agent_refs[]");
  console.log("- hash");
  console.log("- parent_hash");
}

function printStub(label, payload) {
  const now = new Date().toISOString();
  const record = {
    id: "replace-with-id",
    type: label,
    payload,
    created_at: now,
    updated_at: now,
    source_refs: [],
    agent_refs: [],
    hash: "",
    parent_hash: null
  };
  console.log(JSON.stringify(record, null, 2));
}

const command = process.argv[2] || "help";

switch (command) {
  case "help":
    printHelp();
    break;
  case "validate":
    validateSchemas();
    break;
  case "new-record":
    showRecordContract();
    break;
  case "lineage:add-person":
    printStub("lineage.person", {
      full_name: "",
      birth_date: "",
      death_date: "",
      locations: [],
      relationships: [],
      notes: ""
    });
    break;
  case "newsroom:new-article":
    printStub("newsroom.article", {
      headline: "",
      slug: "",
      body: "",
      tags: [],
      fact_checks: [],
      genealogy_of_thought: []
    });
    break;
  case "discipline:log":
    printStub("discipline.entry", {
      date: "",
      practices: [],
      sleep_hours: 0,
      recovery_notes: ""
    });
    break;
  case "sim:run":
    printStub("regenerative.scenario", {
      name: "",
      starting_resources: {
        food: 0,
        water: 0,
        energy: 0,
        social_trust: 0
      },
      decision_points: []
    });
    break;
  case "story:prompt":
    printStub("story.character", {
      name: "",
      role: "",
      goal: "",
      conflict: "",
      hagen_questions: [
        "Who am I?",
        "What are the circumstances?",
        "What are my relationships?",
        "What do I want?",
        "What is my obstacle?",
        "What do I do to get what I want?",
        "What is at stake?",
        "Where am I now?",
        "What changed?"
      ],
      world_notes: ""
    });
    break;
  default:
    console.error("Unknown command:", command);
    console.error("Run `npm run cli -- help`");
    process.exitCode = 1;
}
