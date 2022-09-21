type Mods = Record<string, string | boolean>

export const classNames = (
  cls: string,
  mods: Mods,
  addition: string[]
): string => {
  return [
    cls,
    ...addition,
    ...Object.entries(mods)
      .filter((className, value) => Boolean(value))
      .map((className) => className)
  ].join(' ')
}
