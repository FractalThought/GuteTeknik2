export default pageData => {
  const projects = []
  pageData.chapters.forEach(chapter => {
    chapter.pages.forEach(page => {
      if (page.type === "project") {
        page.link = `${chapter.link}/${page.link}`
        projects.push(page)
      }
    })
  })
  return projects
}
