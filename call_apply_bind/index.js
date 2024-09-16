const employee = {

    fname:"shareef",
    lname:"shaik",
    getFullname: function(district,state){
    console.log(`${this.fname} ${this.lname} district is ${district} state is ${state}`);
    }
}
 const customer ={
    fname:"khaja",
    lname:"shareef"
 }
 //function barrow

 employee.getFullname.call(customer,"Nellore","A.P");
 employee.getFullname.apply(customer,["kadapa","A.P"]);
 const bindmethod = employee.getFullname.bind(customer);
 bindmethod("kurnool", "A.P");