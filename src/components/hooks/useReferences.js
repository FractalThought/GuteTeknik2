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


/*
  create array
  map through chapters and map through their references
  check if reference exists in array, if not, add reference to array (check on reference.link)
*/