export  class Registration
{
     
    public id:number;
    public firstname:string;
    public lastname:string;
    public password:string;
    public confirmPassword:string;
    public hobbies:string[];
   
    
    constructor(id,firstname,lastname,password,confirmPassword,hobbies)
    { 
        this.id=id;
        this.firstname=firstname;
        this.lastname=lastname;
        this.password=password;
        this.confirmPassword=confirmPassword;
        this.hobbies=hobbies;
      


        }
   
    


}