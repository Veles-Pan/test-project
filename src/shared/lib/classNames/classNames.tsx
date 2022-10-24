export type Mods = Record<string, boolean | string | undefined>

export const classNames = (
  cls: string | undefined,
  mods: Mods = {},
  addition: Array<string | undefined> = [],
): string => [
  cls,
  ...addition.filter(Boolean),
  ...Object.entries(mods)
    .filter(([, value]) => Boolean(value))
    .map(([className]) => className),
].join(' ');
