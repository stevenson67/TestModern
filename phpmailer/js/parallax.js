const parallaxDescktop = window.matchMedia('(min-width: 1440px)')
if (parallaxDescktop.matches) {
  let fog1 = document.querySelector('.clients__item1');
  let fog2 = document.querySelector('.clients__item2');
  let fog3 = document.querySelector('.clients__item3');
  let fog4 = document.querySelector('.clients__item4');
  let fog5 = document.querySelector('.clients__item5');
  let fog6 = document.querySelector('.clients__item6');
  let fog7 = document.querySelector('.clients__item7');
  let fog8 = document.querySelector('.clients__item8');
  let fog9 = document.querySelector('.clients__item9');
  let fog10 = document.querySelector('.clients__item10');
  let fog11 = document.querySelector('.clients__item11');
  let fog12 = document.querySelector('.clients__item12');
  let fog13 = document.querySelector('.clients__item13');
  let fog14 = document.querySelector('.clients__item14');
  let fog15 = document.querySelector('.clients__item15');
  window.addEventListener('mousemove', function(e) {
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;  
      fog1.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
      fog2.style.transform = 'translate(+' + x * 50 + 'px, -' + y * 50 + 'px)';
      fog3.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
      fog4.style.transform = 'translate(+' + x * 50 + 'px, -' + y * 50 + 'px)';
      fog5.style.transform = 'translate(+' + x * 50 + 'px, -' + y * 50 + 'px)';
      fog6.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
      fog7.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
      fog8.style.transform = 'translate(+' + x * 50 + 'px, -' + y * 50 + 'px)';
      fog9.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
      fog10.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
      fog11.style.transform = 'translate(+' + x * 50 + 'px, -' + y * 50 + 'px)';
      fog12.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
      fog13.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
      fog14.style.transform = 'translate(+' + x * 50 + 'px, -' + y * 50 + 'px)';
      fog15.style.transform = 'translate(+' + x * 20 + 'px, -' + y * 20 + 'px)';
  });
}