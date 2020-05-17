import { GenerateOptions } from "./@types";
import { isObject, isObjectArray } from './utils';

/**
 *
 * @param data 要转换为声明类型的数据
 * @param options 可选项 用于生成声明类型的选项
 */
const GenerateInterfaceByData: (
  data: any,
  options?: GenerateOptions
) => string[] = (data, options = { rootName: "RootObject" }) => {
  // 对传入数据的合法性做校验
  if (!isObject(data) && !isObjectArray(data)) {
    throw new Error("Invalid Input! Check your data!")
  }
  return [];
};


GenerateInterfaceByData([
  {
      "CityID": 1,
      "CityName": "东城区"
  },
  {
      "CityID": 3,
      "CityName": "崇文区"
  }
])