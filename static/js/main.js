document.addEventListener('DOMContentLoaded',function(){
  const form=document.querySelector('#predict-form');
  const btn=document.querySelector('#submit-btn');
  const result=document.querySelector('#prediction-result');

  if(result && result.textContent.trim().length>0){
    // animate in result
    result.classList.add('show');
  }

  if(form){
    form.addEventListener('submit', function(){
      btn.disabled=true;
      const spinner=document.createElement('span');
      spinner.className='spinner';
      spinner.setAttribute('aria-hidden','true');
      // clear text and append spinner
      btn.querySelector('span')?.remove();
      btn.appendChild(spinner);
    });
  }
});