import React, { useState } from "react";

const Edit = ({ setEdit, setRecord, record, id,data,setData}) => {
  const[showpsw,setShowPsw]=useState('password')

 const showHandle=()=>{
      if(showpsw==='password'){
        setShowPsw('text')
      }
      else{
        setShowPsw('password')
      }
    }

  
  const submitHandle = (e) => {
    e.preventDefault();
   
    const items = {
      id: id,...data
      
    };
  
    const newItem = [...record];
    const index = record.findIndex((a) => a.id === id);

    newItem[index] = items;
    setRecord(newItem);

    localStorage.setItem("record", JSON.stringify(newItem));
    setEdit(false);
  };
  return (
    <div>
    <div>
      {/* <div className="d-flex justify-content-between">
       
        <h2 className="text-secondary  ">Edit Data</h2>
        <div className="ml-auto">
         <button
          className="btn"
          onClick={() => setEdit(false)}
        >
       <i className="fa-solid fa-xmark"></i>
        </button>
        </div> */}
            <div className="modal-header">
                <h5 className="modal-title text-primary" id="exampleModalLabel">
                  Edit User
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setEdit(false)}
                ></button>
              </div>


      </div>
      <form onSubmit={submitHandle}>
        <label>Name</label>
        <input
          type="text"
          className="form-control "
          value={data.name } 
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <br />
       

        <label>Email</label>
        <input
          type="email"
          className="form-control "
          value={data.email || ''}
          onChange={(e) =>
            setData({ ...data, email: e.target.value })
          }
        />
        <br />
        <label>Password</label>
        <input
          type={showpsw}
          className="form-control "
          value={data.password || ''}
          onChange={(e) =>
            setData({ ...data, password: e.target.value })
          }
        />
        <input type='checkbox' onClick={showHandle}/><label className="text-primary">show Password...</label>
        <br/>
        <br />

        <label>Gender-</label>&emsp;
                <input
                  type="radio"
                  className="form-check-input"
                  name="gender"
                  value="Male"
                  checked={data.gender === 'Male'}
                  onChange={(e) => setData({ ...data, gender: e.target.value })}
                />{" "}
                Male &emsp;
                <input
                  type="radio"
                  className="form-check-input"
                  name="gender"
                  value="Female"
                  checked={data.gender === 'Female'}
                  onChange={(e) => setData({ ...data, gender: e.target.value })}
                />{" "}
                Female
           <br/>
           <label>Hobbies-</label>&emsp;
                <input
                  type="checkbox"
                  className="form-check-input"
                  value="Watching Movies"
                  checked={data.hobbies ==="Watching Movies" }
                  onChange={(e) =>
                    setData({ ...data, hobbies: e.target.value })
                  }
                />
                Watching Movies &emsp;
                <input
                  type="checkbox"
                  className="form-check-input"
                  value="Reading "
                  checked={data.hobbies ==="Reading " }
                  onChange={(e) =>
                    setData({ ...data, hobbies: e.target.value })
                  }
                />{" "}
                Reading &emsp;
                <input
                  type="checkbox"
                  className="form-check-input"
                  value="Swimming"
                  checked={data.hobbies ==="Swimming" }
                  onChange={(e) =>
                    setData({ ...data, hobbies: e.target.value })
                  }
                />
                Swimming
                <br />
                <label>Domain</label>
                <select
                  className="form-select"
                  value={data.domain  || ''}
                  onChange={(e) => setData({ ...data, domain: e.target.value })}
                >
                  <option defaultValue={"Open this select menu"}>
                    Open this select menu
                  </option>
                  <option value="ReactJs">ReactJs</option>
                  <option value="Angular">Angular</option>
                  <option value="JAVA">JAVA</option>
                  <option value="NODE js">NODE js</option>
                  <option value="Python">Python</option>
                </select>



        <label>Address</label>
        <textarea
          className="form-control "
          value={data.address || ''}
          onChange={(e) =>
            setData({ ...data, address: e.target.value })
          }
        />
        <br />
        {/* <button className="btn btn-info btn-sm">Submit</button>&emsp; */}
        <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => setEdit(false)}
                >
                  Close
                </button>
       </div>
      </form>
    </div>
  );
};

export default Edit;
