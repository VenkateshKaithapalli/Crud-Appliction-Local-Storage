import React, { useState, useEffect } from "react";
import Edit from "../CRUD/Edit";
import Mix from "../CRUD/Mix";

// import Add from "../CRUD/Add";


// import Modal from "../CRUD/Modal";
import "./DashBaord.css";


const DashBoard = () => {

 
  const [data, setData] = useState([
    {
      name:'' ,
      email:'',
      password:'' ,
      gender: '',
      hobbies: "",
      domain: "",
      address: ''
    },
  ]);


  // const [add, setAdd] = useState(false);

  const [edit, setEdit] = useState(false);

  const [record, setRecord] = useState([]);

  const getUsers = JSON.parse(localStorage.getItem("record"));
  useEffect(() => {
    if (getUsers === null) {
      setRecord([]);
    } else {
      setRecord(getUsers);
    }
  }, []);

  const remove = (id) => {
    const deleteRecord = record.filter((a) => a.id !== id);
    setRecord(deleteRecord);
    localStorage.setItem("record", JSON.stringify(deleteRecord));
  };

  // const onAdd = () => {
  //   setAdd(true);
  // };

  const [editId, setEditId] = useState(null);
  
  const onEdit = (ele) => {
   
    setEditId(ele.id);
    setEdit(true)
   
     setData({
      name:ele.name ,
      email:ele.email,
      password:ele.password ,
      gender: ele.gender,
      hobbies: ele.hobbies,
      domain: ele.domain,
      address: ele.address
     }
     )
  };

  return (
    <div>
      <div className="dash_main">
   
    &emsp;  <Mix  setRecord={setRecord} record={record} />
     
  
      

        <br />
        <div>
          {record.length < 1 ? (
            <h3 className="text-danger text-center">No data Found</h3>
          ) : (
            <table className="table align-middle mb-0 bg-white">
              <thead className="bg-light">
                <tr>
                 
                  <th>Name</th>

                  <th>Gender</th>
                  <th>Hobbies</th>
                  <th>Domain</th>

                  <th>Address</th>
                  <th>Actions</th>
                </tr>
              </thead>
              {record.map((ele) => (
                <tbody key={ele.id}>
                  <tr>
                 
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                          className="rounded-circle"
                          alt=""
                          style={{ width: "25px", height: "25px" }}
                        />
                        <div className="ms-3">
                          <p className="fw-bold mb-1">{ele.name}</p>
                          <p className="text-muted mb-0">{ele.email}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="fw-normal mb-1">{ele.gender}</p>
                    </td>
                    <td>
                      <p className="fw-normal mb-1">{ele.hobbies }</p>
                    </td>
                    <td>
                      <p className="fw-normal mb-1">{ele.domain}</p>
                    </td>

                    <td>
                      <p className="fw-normal mb-1">{ele.address}</p>
                    </td>

                    <td>
                      <button
                        type="button"
                        onClick={() => onEdit(ele)}
                        className="btn "
                      >
                <i className="fa-solid fa-pen-to-square"></i>
                         
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => remove(ele.id)}
                        className="btn "
                      >
                      <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          )}
          <br />
        </div>
      </div>

      <br />

     

      <div className="dash_container bg-light">
    
        {/* {add && <Add setAdd={setAdd} setRecord={setRecord} record={record} />} */}
 
        {edit && (
          <Edit
            setEdit={setEdit}
            setRecord={setRecord}
            record={record}
            id={editId}
            data={data}
            setData={setData}
          />
        )}

       
    </div>
    </div>
  );
};

export default DashBoard;
