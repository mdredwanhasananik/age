document.querySelector('button').addEventListener('click',function () {
  
  let name= document.querySelector('#afna').value;
  let year= document.querySelector('#afn').value;
  let sal= 2022-year;
  
  
  
  if (name && year){
    if (0 < year && year <= 2022) {
      document.querySelector('h5').innerHTML = name + ' is ' + sal + ' years old.';
    } else {
      document.querySelector('h5').innerHTML = 'Please enter accurate year';
    }
  }else{
    document.querySelector('h5').innerHTML= '<span style="color:red;font-size: 40px;">Fill the above field!</span>';
  }
  
  
  
  
  
  
  
  
})