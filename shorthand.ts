export const queryParamBuilder = <T extends Record<string, string>>(
  paramsObj: T
) : string => {
  const params = new URLSearchParams();

  for (const key in paramsObj) {
    const value = paramsObj[key];
    if (value !== null || value !== undefined) {
      params.set(key, paramsObj[key]);
    }
  }

  const queryStrings = params.toString();
  return queryStrings ? `?${queryStrings}` : "";
};
