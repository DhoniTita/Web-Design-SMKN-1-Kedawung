const items = document.querySelectorAll('.item-name');
const contents = document.querySelectorAll('.item-content');
const backButtons = document.querySelectorAll('.btn-back');

items.forEach(item => {
  item.addEventListener('click', () => {
    const target = item.dataset.target;
    document.querySelector('.item').style.display = 'none';
    contents.forEach(c => c.style.display = 'none');
    document.querySelector('.' + target).style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

backButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    contents.forEach(c => c.style.display = 'none');
    document.querySelector('.item').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
