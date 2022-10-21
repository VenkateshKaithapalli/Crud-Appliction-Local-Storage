import React, { useState } from "react";
import { nanoid } from "nanoid";

const Mix = ({ setRecord, record }) => {
  const [data, setData] = useState([
    {
      name: "",
      email: "",
      password: "",
      gender: 'Male',
      hobbies: "",
      domain: "",
      address: "",
    },
  ]);

  const onSubmit = (e) => {
    e.preventDefault();
   
    const Record = {
      id: nanoid(),
      ...data
    };

    setRecord([...record, Record]);
    console.log(record);

    localStorage.setItem("record", JSON.stringify([...record, Record]));

   
  
  setData({
    name: "",
    email: "",
    password: "",
    gender: '',
    hobbies: "",
    domain: "",
    address: "",
  });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal3"
        >
        <i className="fa-solid fa-user-plus"></i>  
        </button>

        <div
          className="modal fade"
          id="exampleModal3"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-primary" id="exampleModalLabel">
                  Add User
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="name"
                  className="form-control"
                  value={data.name || ''}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
                <br />
                <label>Email</label>
                <input
                  type="email"
                  placeholder="email"
                  className="form-control "
                  value={data.email  || ''}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
                <br />
                <label>password</label>
                <input
                  type="password"
                  placeholder="password"
                  className="form-control "
                  value={data.password  || ''}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
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
                <br />
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
                <br />
                <label>Address</label>
                <textarea
                  className="form-control "
                
                  value={data.address  || ''}
                  onChange={(e) =>
                    setData({ ...data, address: e.target.value })
                  }
                />
                <br />
              </div>
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
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Mix;
