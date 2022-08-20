const sections = document.querySelector('.sections');

sections.addEventListener('click', function(e){
    handleClick(e);
});
// sections.addEventListener('click', e => handleClick(e));

function handleClick(e) {
  const target = e.target;
  const sectionNum = target.dataset.section;
  const activesection = document.querySelector('.sections .active');
  const activeContent = document.querySelector('.content .visible');
  const currentContent = document.querySelector(`.content_section[data-section='${sectionNum}']`);
  
  if (!sectionNum) {
    return;
  }
  
  activesection.classList.remove('active');
  target.classList.add('active');
  activeContent.classList.remove('visible');
  currentContent.classList.add('visible');
}


console.log(sections)