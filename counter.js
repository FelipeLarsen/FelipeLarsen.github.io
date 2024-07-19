document.addEventListener('DOMContentLoaded', () => {
  let visitCount = localStorage.getItem('visitCount');

  if (visitCount === null) {
    visitCount = 0;
  }

  visitCount = parseInt(visitCount) + 1;
  localStorage.setItem('visitCount', visitCount);

  console.log(`Você é o visitante número: ${visitCount}`);
});
