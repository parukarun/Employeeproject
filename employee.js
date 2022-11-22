// To add details of employee to local storage

function addEmp(){

    employee={
        id:empid.value,
        empname:empname.value,
        empaddress:empaddr.value,
        empdesg:empdesg.value,
        empexp:empexp.value,
        empsal:empsal.value
    }

    // To store empobject in local storage

   if(employee.id in localStorage){
    alert("id already exist")
   }else{
    localStorage.setItem(employee.id,JSON.stringify(employee));
    alert("employee added successfully")
   }
}

function search(){
    // get search key
    key=searchId.value;

    // to check key in local storage
    if(key in localStorage){
        employee=JSON.parse(localStorage.getItem(key));
        result.innerHTML=`Employee name : ${employee.empname}`;
    }
    else{
        result.innerHTML=""
        alert("Not found");
    }

}



