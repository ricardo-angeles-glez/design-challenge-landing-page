import fs from "fs";
import path from "path";

const ROOT_DIR = path.resolve(".");
const OUTPUT_FILE = "TREE.md";

const IGNORE = [
  "node_modules",
  ".git",
  "css",
  "TREE.md"
];

function generateTree(dir, prefix = "") {
  const items = fs.readdirSync(dir, { withFileTypes: true })
    .filter(item => !IGNORE.includes(item.name));

  return items.map((item, index) => {
    const isLast = index === items.length - 1;
    const pointer = isLast ? "└── " : "├── ";
    const nextPrefix = prefix + (isLast ? "    " : "│   ");

    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      return (
        `${prefix}${pointer}${item.name}/\n` +
        generateTree(fullPath, nextPrefix)
      );
    }

    return `${prefix}${pointer}${item.name}\n`;
  }).join("");
}

const tree = `# Project Tree\n\n\`\`\`\n${generateTree(ROOT_DIR)}\`\`\`\n`;

fs.writeFileSync(OUTPUT_FILE, tree);
console.log("✔ Project tree updated");
