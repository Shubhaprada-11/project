import React from "react";
import { useState, useEffect } from "react";

const API = "http://localhost:8000/api";
const assignmentId = "633efb26c56cf8de7bf06aa6";
const assignmentId2 = "6340d42ec1fe7c53798d397d";
const userId = "633e3946e6834326fd628855";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzNlMzk0NmU2ODM0MzI2ZmQ2Mjg4NTUiLCJpYXQiOjE2NjUwNzE4MzZ9.DhKPBvMw-yWzClfjfNmpUTfSY002dPiIiEearSa0plk";
// const userId = isAutheticated() && isAutheticated().user._id;
// const token = isAutheticated() && isAutheticated().token;
const url1 = `${API}/assignment/${assignmentId}/${userId}`;
const url2 = `${API}/user/${userId}`;
const urlc = `${API}/assignment/${assignmentId2}/comment/${userId}`;
let checkboxes = [],  subdiv = [];
// const newArray=[];
// newArray.len=checkboxes.len ;
// for(let j =0; j<newArray.len;j++){
//       newArray[j]="<input type= 'checkbox' checked={checkboxes[0]}> </input>";
// }

const Details = () => {
  const [getData, setData] = useState([]);
  const [checked, setChecked] = useState([]);
  const [value, setValue] = useState("");
  const fetchingData = async () => {
    const config = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    };
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
    } catch (err) {
      console.log("inside error");
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target];
    } else {
      updatedList.splice(checked.indexOf(event.target), 1);
    }
    console.log(`${checkboxes}`);
    setChecked(updatedList);
  };
  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  const handleClick = (event) => {
    event.preventDefault();
    setValue(event.target.value);
    console.log(event.target.value);
  };

  //edited

  const handleValueChange = (event) => {
      setValue(event.target.value);
      console.log(event.target.value);
    };
    //getData={};
    return (
      <div>
      <h1>Job Details and Updation</h1>
          <div align="center"><h3>JobID</h3>{getData._id}</div><br />
          <div align="center"><h3>Job Status</h3>{getData.status}</div>
        <div align="center" >
         <h3>SubDivisions</h3>
          {checkboxes.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleCheck} />
  
              {/* {console.log(`${checkboxes}`)}; */}
            </div>
          ))}
          {`Subdivisions checked are ${checkedItems}`}
        </div>
        
        <div align="center">
          <form>
            <h3>Comments</h3>
            <br></br>
            <textarea cols="55" rows="15"
              id="message"
              name="message"
              value={value}
              onChange={handleValueChange}
            />
            <br></br>
            <button onClick={handleClick}>Submit</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Details;