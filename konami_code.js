const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  document.body.addEventListener('keydown', function(e){
    const key = parseInt(e.detail || e.which)
    for(var i = 0; i < code.length; i++){
      if(code[i] === key){
      alert("heyyy!!")
      };
    }
  });
};
