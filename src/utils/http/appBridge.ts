const getHandler = () => {
  if (typeof window != null) {
    return (window as any).flutter_inappwebview.callHandler;
  }
}

export function pressCamera(params: any) {
  const callHandler = getHandler();
  callHandler('pressCamera', ...params);
}
export async function getSearchKeywordList(params: any) {
  const callHandler = getHandler();
  callHandler('sendSearchKeyword', ...params)
    .then((resolver: any) => {
      console.log(resolver)
    });
  return new Promise((_resolve, _reject) => {
    callHandler('sendSearchKeyword', ...params)
      .then(function(result: unknown) { 
        console.log(JSON.stringify(result));
        _resolve(result); 
      })
      .catch((err: any) => _reject(err));
  });
}
export async function pressCalendar() {
  const callHandler = getHandler();
  return new Promise((_resolve, _reject) => {
    callHandler('pressCalendar')
      .then(function(result: unknown) { 
        _resolve(result); 
      })
      .catch((err: any) => _reject(err));
  });
}
export async function getCalendarDate() {
  const callHandler = getHandler();
  return new Promise((_resolve, _reject) => {
    callHandler('getCalendarDate')
      .then(function(result: unknown) { 
        console.log(JSON.stringify(result));
        _resolve(result); 
      })
      .catch((err: any) => _reject(err));
  });
}