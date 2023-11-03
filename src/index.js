const comments = document.querySelectorAll('#comments #sections #contents')
const relatedVideos = document.querySelectorAll('#secondary #related')
const shorts = document.querySelectorAll(
  'ytd-rich-section-renderer #content #dismissible'
)

const targets = [...comments, ...relatedVideos, ...shorts]

targets.forEach((target) => {
  target.style.display = 'none'
})
