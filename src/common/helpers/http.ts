export function generateRequestParamsString<T>(params:T):string{
  const paramsData = [];
  for(const item in params){
    if(params[item] !== null && params[item] !== undefined){
      paramsData.push(`${item}=${params[item]}`);
    }
  }
  return paramsData.join('&');
}