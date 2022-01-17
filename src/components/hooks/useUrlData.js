function useUrlData(url) {
  let urlData = null;

  if (typeof url !== "undefined" && url != null) {
    const urlArray = url.split("/");
    urlData = urlArray.filter(data => data !== "");
  }

  return urlData;
}

export default useUrlData;
