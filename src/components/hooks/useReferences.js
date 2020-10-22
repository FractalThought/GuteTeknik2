export default pageData => {
  return removeDuplicates(
    pageData.chapters.map(chapter => {
      return chapter.references
    }),
    "link"
  )[0]
}

function removeDuplicates(myArr, prop) {
  return myArr.filter((obj, pos, arr) => {
    return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos
  })
}
