import { readFile, readdir, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";

const outputDirectory = "out";
const basePath = (process.env.GITHUB_PAGES_BASE_PATH ?? "").replace(/\/$/, "");
const textExtensions = new Set([".css", ".html", ".js", ".json", ".map", ".svg", ".txt", ".xml"]);

const publicRoots = [
  "assets",
  "work",
  "og.png",
  "favicon.svg",
  "file.svg",
  "globe.svg",
  "window.svg",
];

function addBasePath(source) {
  if (!basePath) return source;

  const preservedBasePath = "__GITHUB_PAGES_BASE_PATH__";
  let result = source.replaceAll(`${basePath}/`, preservedBasePath);

  for (const root of publicRoots) {
    result = result.replaceAll(`/${root}`, `${basePath}/${root}`);
  }

  result = result
    .replaceAll(`href="/"`, `href="${basePath}/"`)
    .replaceAll(`href:"/"`, `href:"${basePath}/"`)
    .replaceAll(`href:'/'`, `href:'${basePath}/'`)
    .replaceAll(`"/#`, `"${basePath}/#`)
    .replaceAll(`'/#`, `'${basePath}/#`);

  return result.replaceAll(preservedBasePath, `${basePath}/`);
}

async function rewriteDirectory(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  await Promise.all(entries.map(async (entry) => {
    const path = join(directory, entry.name);

    if (entry.isDirectory()) {
      await rewriteDirectory(path);
      return;
    }

    if (!textExtensions.has(extname(entry.name))) return;

    const source = await readFile(path, "utf8");
    const rewritten = addBasePath(source);

    if (rewritten !== source) {
      await writeFile(path, rewritten);
    }
  }));
}

await rewriteDirectory(outputDirectory);
await writeFile(join(outputDirectory, ".nojekyll"), "");

console.log(`Prepared GitHub Pages output${basePath ? ` for ${basePath}` : ""}.`);
