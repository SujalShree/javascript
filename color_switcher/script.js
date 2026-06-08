const buttons=document.querySelectorAll('.btn');
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.classList.contains('btn-danger')){
            document.body.style.backgroundColor='red';
            document.body.style.color='white';
        }
        else if(button.classList.contains('btn-success')){
            document.body.style.backgroundColor='green';
            document.body.style.color='white';
        }
        else if(button.classList.contains('btn-primary')){
            document.body.style.backgroundColor='blue';
            document.body.style.color='white';
        }
        else if(button.classList.contains('btn-warning')){
            document.body.style.backgroundColor='yellow';
            document.body.style.color='white';
        }
        else if(button.classList.contains('btn-info')){
            document.body.style.backgroundColor='skyblue';
            document.body.style.color='white';
        }
        else{
            document.body.style.backgroundColor='white';
            document.body.style.color='black';
        }
    });
});