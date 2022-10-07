import React from "react";
import { useState, useEffect } from "react";
const API = "http://localhost:8000/api";
const assignmentId = "633efb26c56cf8de7bf06aa6";
const userId = "633e3946e6834326fd628855";
const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzNlMzk0NmU2ODM0MzI2ZmQ2Mjg4NTUiLCJpYXQiOjE2NjUwNzE4MzZ9.DhKPBvMw-yWzClfjfNmpUTfSY002dPiIiEearSa0plk";
// const userId = isAutheticated() && isAutheticated().user._id;
// const token = isAutheticated() && isAutheticated().token;

const url1 = `${API}/assignment/${assignmentId}/${userId}`;
const url2 = `${API}/user/${userId}`;
let  checkboxes=[], subdiv=[];
// const newArray=[];
// newArray.len=checkboxes.len ;  
// for(let j =0; j<newArray.len;j++){
//       newArray[j]="<input type= 'checkbox' checked={checkboxes[0]}> </input>";
// }

const Details = () => {
      const [getData, setData] = useState([]);
      const fetchingData = async () => {
            const config ={
                        method: 'GET',
                        headers: {
                              'Authorization': 'Bearer ' + token,
                        }
            }
            try {
              const res1 = await fetch(`${url1}`);
              if (!res1.ok) {
                throw new Error("Something went wrong");
              }
              const newGetData = await res1.json();

              //getData = newGetData;
              console.log(newGetData);
              const newcheckboxes = newGetData.checkboxes;
              checkboxes = newcheckboxes;
              console.log(checkboxes);
              
              /*const newSubdiv = newGetData.subdivisions;
              subdiv = newSubdiv;
              console.log(subdiv);*/
              setData(newGetData);

              
             /* const res2 = await fetch(`${url2}`);
              if (!res2.ok) {
                throw new Error("Something went wrong");
              }
              const userData = await res2.json();
          
              const newSubdiv = userData.subdivisions;
              subdiv = newSubdiv;
              console.log(subdiv);*/
            }
            catch (err) {
              console.log("inside error");
              console.log(err.message);
            }
      };

      useEffect(() => {
            fetchingData();
          }, [])
      
          let text = "";
          for (let i = 0; i < checkboxes.length; i++) {
            text += "<input type= 'checkbox' checked={checkboxes[0]}>hello </input><br />";
          } 
          
      //getData={};
      return (
            <div>
              <li key={getData._id}>
                <div>{getData._id}</div>
                <div>{getData.status}</div>
                <p id="demo"></p>
                <script type="text/javascript">func();
                function func(){
                  document.getElementById("demo").innerHTML = text;
                };
                </script>
                <div>

                

                </div>
              </li>
              
            </div>

          );
          
        };

      
     
   
export default Details;