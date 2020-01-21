export  class Registration
{
     
    public id:number;
    public firstname:string;
    public lastname:string;
    public password:string;
    public confirmPassword:string;
    public cities:string[];
   
    
    constructor(id,firstname,lastname,password,confirmPassword,cities)
    { 
        this.id=id;
        this.firstname=firstname;
        this.lastname=lastname;
        this.password=password;
        this.confirmPassword=confirmPassword;
        this.cities=cities;
      


        }
   
    


}