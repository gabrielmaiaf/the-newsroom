export function capitalizer(s: string) {
  return s && s[0].toUpperCase() + s.slice(1);
}

export function truncate(s: string) {
  if (s.length > 120) {
    return s.substr(0, 120) + "...";
  }

  return s;
}

export function slicer(s: string, char: string) {
  return s.split(char)[0];
}
