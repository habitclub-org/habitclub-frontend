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
  .then(resolver => {
      console.log(resolver)
  });
  return new Promise((_resolve, _reject) => {
    callHandler('sendSearchKeyword', ...params)
      .then(function(result) { 
        console.log(JSON.stringify(result));
        _resolve(result); 
      })
      .catch(err => _reject(err));
  });
}