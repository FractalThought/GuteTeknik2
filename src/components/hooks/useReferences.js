export default pageData => {
  const references = []

  pageData.chapters.forEach(chapter => {
    if (chapter.references !== null) {
      chapter.references.forEach(reference => {
        references.push(reference)
      })
    }
  })

  return removeDuplicates(references, "link")
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
