function useUrlData(url) {
  let urlData = null;

  if (typeof url !== "undefined" && url != null) {
    const urlArray = url.split("/");
    urlData = urlArray.filter(data => data !== "");
  }

  return urlData;
}

function useExtractUrlData(url) {
  const urlData = useUrlData(url);

  let currentCourse,
    currentChapter,
    currentPage = "index";

  if (urlData.length >= 1) {
    currentCourse = url[0];

    if (urlData.length > 1) {
      currentChapter = urlData[1];
      currentPage = urlData[urlData.length - 1];
    } else {
      currentPage = currentCourse;
    }
  }

  return { course: currentCourse, chapter: currentChapter, page: currentPage };
}

export default useUrlData;
export { useExtractUrlData };

// Change to ExtractUrlData only?

/*



*/
