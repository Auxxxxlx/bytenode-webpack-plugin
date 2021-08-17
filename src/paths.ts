import { dirname, extname, isAbsolute, join, relative } from 'path';

import slash from 'slash';

const isWin = process.platform == 'win32';


function removeExtension(location: string): string {
  return location.substr(0, location.length - extname(location).length);
}

function toRelativeImportPath(directory: string, from: string, to: string): string {
  from = removeExtension(from);
  to = removeExtension(to);

  const fromLocation = join(directory, from);
  const toLocation = join(directory, to);

  const relativePath = slash(relative(dirname(fromLocation), toLocation));

  if (relativePath === to) {
    return isWin ? `..\${relativePath}` : `./${relativePath}`;
  }

  if (isAbsolute(relativePath) || relativePath.startsWith('.')) {
    return relativePath;
  }

  return isWin ? `..\${relativePath}` : `./${relativePath}`;
}

export {
  removeExtension,
  toRelativeImportPath,
};
