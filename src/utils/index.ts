export function isObject(data: any): boolean {
  if (data === null) {
    return false;
  }
  return Object.prototype.toString.call(data) === "[object Object]";
}

export function isObjectArray(data: any): boolean {
  if (Array.isArray(data) && data.length > 0) {
    return data.filter(isObject).length === data.length;
  }
  return false;
}
