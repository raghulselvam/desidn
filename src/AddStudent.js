import React from 'react';
import "./AddStudent.css";
function AddStudent() {
    return (
        <div className="student1">
            <div className="student_header1">
               <p className="student_logo">LEAD Logo</p>
                <div className="student_person1">
                     <img className="bell_icon1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUvs4qL_VOS-ZzL5mxbIMvQwXNH2UCjELrlQ&usqp=CAU"/>
                     <img className="person_icon1" src="https://cdn4.vectorstock.com/i/1000x1000/96/63/human-sociability-man-avatar-black-color-icon-icon-vector-20569663.jpg"/>
                     <p className="person_name1">Person Name</p>
                </div>
            </div>
          <div className="student_table1">
              <div className="left_table1">
                 <table className="table2" >
                   <tr>
                    <td>Students</td>
                   </tr>
                   <tr>
                    <td>-View Students </td>
                   </tr>
           
                   <tr>
         
                      <td className="add_student">-Add Student </td>
             
                   </tr>
           
           
                  <tr>
                    <td>
                        
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                  </tr>
                 <tr>
                   <td></td>
                 </tr>
                <tr>
                    <td></td>
                </tr>
               <tr>
                  <td></td>
               </tr>
                <tr>
                  <td></td>
               </tr>
               <tr>
                 <td></td>
               </tr>
               <tr>
                <td></td>
               </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
               <td></td>
              </tr>
           <tr>
               <td></td>
           </tr>
           <tr>
               <td></td>
           </tr>
           <tr>
               <td></td>
           </tr>
           <tr>
               <td></td>
           </tr>
           <tr>
               <td></td>
           </tr>
           <tr>
               <td></td>
           </tr>
           <tr>
               <td></td>
           </tr> <tr>
               <td></td>
           </tr>

       </table>
     </div>
    
     <div className="addstudent">
         <h3>Add Student</h3>
        <form>
           <table className="table_border">
               
               <tr>
                   <td className="first_first">
                       <label for="first_name">First name</label>
                   </td>
                   <td className="first_second">
                       <input type="text"/>
                   </td>
               </tr>
               <tr>
                   <td className="second_first">
                       <label>Date of Birth</label>
                   </td>

                   <td className="second_second">
                       <input type="text"/>
                   </td>
                   <td className="seconds_firsts">
                       <img className="seconds_first"src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtnRiMekQsTmC1id5jWNERSfE3OrqiEirkHA&usqp=CAU"/>

                   </td>
               </tr>
               <tr>
                   <td className="third_first">
                       <label>School</label>
                   </td>
                   <td className="third_second1">
                    
                       <select className="third_second">
                           <option value="Select" selected>Select</option>
                           <option value="Select" >Select</option>

                       </select>
                      
                       
                   </td>
               </tr>
               <tr>
                   <td className="fourth_first">
                       <label>Class</label>
                   </td>
                   <td className="fourth_second1">
                    
                       <select className="fourth_second">
                           <option value="Select" selected>Select</option>
                           <option value="Select" >Select</option>

                       </select>
                      
                       
                   </td>
               </tr>
               <tr>
                   <td className="five_first">
                       <label>Divison</label>
                   </td>
                   <td className="five_second1">
                    
                       <select className="five_second">
                           <option value="Select" selected>Select</option>
                           <option value="Select" >Select</option>

                       </select>
                      
                       
                   </td>
               </tr>
               <tr>
                   <td className="six_first">
                      <label>Status</label>
                   </td>
                   <td className="six_second">
                       <input className="checkbox_first" type="checkbox"/>
                       <thead>Active</thead>
                   
                   <thead className="six_third">
                       <input className="checkbox_second" type="checkbox"/>
                       <thead>Inactive</thead>
                   </thead>
                   </td>
               </tr>
               <tr>
                   <td className="seven">
                      <label> <button>Save</button></label>
                   </td>
               </tr>
               </table>
           </form>
         </div>  
      
      </div>
            
            
     </div>


    )
}

export default AddStudent
