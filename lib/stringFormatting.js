const truncate = (string, max) =>
  string.length > max ? string.slice(0, max).concat('...') : string;

export { truncate };
