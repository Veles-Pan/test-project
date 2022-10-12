type Mods = Record<string, boolean | string>

export const classNames = (
  cls: string,
  mods: Mods = {},
  addition: string[] = [],
): string => [
  cls,
  ...addition.filter(Boolean),
  ...Object.entries(mods)
    .filter(([, value]) => Boolean(value))
    .map(([className]) => className),
].join(' ');
