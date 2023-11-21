let myForm=document.getElementById('my-form');
let inputAmount=document.getElementById('amount');
let inputDesc=document.getElementById('description');
let inputCategory=document.getElementById('category');
let itemLists=document.getElementById('listofitems');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    let amount=e.target.amount.value;
    let description=e.target.description.value;
    let category=e.target.category.value;
    let user ={
        amount,
        description,
        category
    };
    axios.post("http://localhost:3000/expense/add-expence", user, {
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then((responce) => {
        console.log('item added');
        console.log(responce);
        showExpenceOnScreen(responce.data.expences);
    })
}
window.addEventListener('DOMContentLoaded', () => {
    axios.get("http://localhost:3000/expense/get-expence")
        .then((responce) => {
            console.log(responce);
            for(var i=0;i<responce.data.expences.length;i++){
                showExpenceOnScreen(responce.data.expences[i]);
            }
        })
        .catch((error) => {
            console.log(error);
        })
})
function showExpenceOnScreen(expence){
   let li=document.createElement('li');
   let details=document.createTextNode(`${expence.amount} : ${expence.description} : ${expence.category}`);
   let deleteBtn=document.createElement('input');
   deleteBtn.type='button';
   deleteBtn.value="Delete";
   deleteBtn.onclick = () => {
    axios.delete(`http://localhost:3000/expense/delete-expence/${expence.id}`)
        .then((res) => {
            console.log('remove child')
            itemLists.removeChild(li);
        })
        .catch((error) => {
            console.log(error);
        })
   }
   li.appendChild(details);
   li.appendChild(deleteBtn);
   itemLists.appendChild(li);
   inputAmount.value=' ';
   inputDesc.value=' ';
   inputCategory.value=' ';   
}
