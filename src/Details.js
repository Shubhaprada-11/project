const axios = require('axios').default
const API = "http://localhost:8000/api";


// const userId = isAutheticated() && isAutheticated().user._id;
// const token = isAutheticated() && isAutheticated().token;
const getData = axios.get('${API}/assignment/${assignmentId}/${userId}').then(response => response.data);
const checkboxes=[];
checkboxes=getData.checkboxes;
const userData=axios.get('${API}/user/${userId}').then(response =>response.data);
const subdiv=[];
subdiv=userData.subdivisions;
function Details(){
return(
      <div>
      {getData.map((data)=>(<li key={data._id}>
            <div>
                  {data.status}
            </div>
      </li>))}
      </div>
)
            {/* <p>Assignment Id</p>
      <pre>
            <code>
                  {JSON.stringify(getData._id,null,2)}
                  </code>
            </pre>
            <p>Assignment Id</p>
      <pre>
            <code>
                  {JSON.stringify(getData.status,null,2)}
                  </code>
            </pre>
            <p>Assignment Id</p>
      <pre>
            <code>
                  {JSON.stringify(getData.checkboxes,null,2)}
                  </code>
            </pre>
      </div> */}
      
            
         /* <p>Job ID ${getData.job}</p> 
         <p>Assignemnt ID ${getData._id}</p> 
         <p>Status ${getData.status}</p>
         
         <input type="checkboxes"></input>
         
         <p>${getData.comments}</p> 
         axios.post("/assignment/:assignmentId/comment/:userId");  */
     
      

}

export default Details;