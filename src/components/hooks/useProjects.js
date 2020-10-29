export default pageData => {
  const projects = []
  pageData.chapters.forEach(chapter => {
    chapter.pages.forEach(page => {
      if (page.type === "project") {
        const projectPage = {...page};
        projectPage.link = `${chapter.link}/${page.link}`
        projects.push(projectPage)
      }
    })
  })
  return projects
}
