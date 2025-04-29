import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export function getNavLinks() {
  const navPath = path.resolve(process.cwd(), 'src/content/nav.yaml');
  try {
    const file = fs.readFileSync(navPath, 'utf8');
    const nav = yaml.load(file);
    // For TinaCMS, nav.yaml is an array of objects
    return Array.isArray(nav) ? nav : [];
  } catch (err) {
    console.error('Failed to load navigation:', err);
    return [];
  }
}
