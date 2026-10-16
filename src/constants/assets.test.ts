import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { BRAND_ASSETS, APP_SCREENSHOTS } from './assets';

describe('Official Local Assets (RN-001 / CA-007)', () => {
  it('maps all brand logos and app screenshots to existing local files in public/assets', () => {
    const allPaths = [...Object.values(BRAND_ASSETS), ...Object.values(APP_SCREENSHOTS)];
    for (const relPath of allPaths) {
      expect(relPath.startsWith('/assets/')).toBe(true);
      const diskPath = path.resolve(process.cwd(), 'public', relPath.slice(1));
      expect(fs.existsSync(diskPath), `Missing asset file: ${diskPath}`).toBe(true);
    }
  });
});
