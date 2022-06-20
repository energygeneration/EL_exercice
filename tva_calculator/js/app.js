/*let montantsEntre = document.getElementById("Montants").value;
  console.log( montantsEntre );
let tva ; */
function calculateTva(){

          if(form.ht.value < 0){
                    alert('invalid enter');
                    form.ht.value = "0";
          }else{
                    form.tva.value =  form.ht.value * (18 / 100);

          };
};