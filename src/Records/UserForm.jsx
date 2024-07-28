import React from "react";
function userForm() {
  return (
    <div className="form-container">
      <h1>User Detail Form</h1>
      <form>
        <div style={{backgroundColor:"greenyellow", padding:'20px'}}>
            <div style={{backgroundColor:"lightgray", marginTop:"10px",padding:"10px"}}>
          <label htmlFor="username">Fname</label>
          <input style={{marginLeft:'5px', padding:"10px" ,width:"10%"}}type="text" id="username" name="username" />
          <label  htmlFor="username">Mname</label>
          <input style={{marginLeft:'5px', padding:"10px",width:"10%"}} type="text" id="Mname" name="Mname" />
          </div>
          <div style={{backgroundColor:"lightgray", marginTop:"10px",padding:"10px"}}>
         
          </div>
          <div style={{backgroundColor:"lightgray", marginTop:"10px",padding:"5px"}}>
          <label htmlFor="email">Lname</label>
          <input style={{marginLeft:'5px', padding:"10px",width:"10%"}} type="text" id="Lname" name="Lname" />
          </div>
        </div>

        <button style={{width:"10%",height:"12%",textColor:"pink"}} type="submit">Register</button>
      </form>
    </div>
  );
}

export default userForm;
