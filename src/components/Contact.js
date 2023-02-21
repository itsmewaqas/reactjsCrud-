import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { userFetch, userUpdateMultiple } from '../redux/Actions/index';
import loader from '../assets/img/loader.gif';

function Contact(props) {

  const [name, Setname] = useState('');
  const [email, Setemail] = useState('');
  const [getIDS, SetgetIDS] = useState([]);
  const [show, setShow] = useState(false);
  const [key, setKey] = useState(false);

  const modalHide = () => {
    setShow(false)
  }

  const modalShow = () => {
    setShow(true)
  }

  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state
  });

  var isChecked = '';
  var chkBox = false;
  const getIDSHandle = (e, item) => {
    isChecked = e.target.checked;
    item.chkBox = e.target.checked;
    let apidata = data.userFetchReducer?.userFetchList;
    let conditionArray = isChecked ? // if isChecked is true
      [...getIDS, item.ID] : // add element
      getIDS.filter(e => e !== item.ID); // remove the elements that are equal to item
    SetgetIDS(conditionArray);
  }

  var iChecked = '';
  const SACHandle = (e) => {
    iChecked = e.target.checked;
    chkBox = false;
    var olddata = getIDS;
    console.log('>before', getIDS);
    var number = olddata.length;
    for (var i = 0; i < number; i++) {
      getIDS.pop();
    }
    console.log('>after', getIDS);
    let selectedList = data.userFetchReducer?.userFetchList;
    for (var i = 0; i < selectedList.length; i++) {
      if (iChecked == true) {
        selectedList[i].chkBox = true;
        getIDS.push(selectedList[i].ID);
      }
      else {
        selectedList[i].chkBox = false;
        getIDS.pop();
      }
    }
    SetgetIDS(selectedList => [...selectedList]);
    console.log('all', getIDS);
  }

  const updateEMPL = () => {
    if (name != '' &&
      email != '') {
      dispatch(userUpdateMultiple(
        name,
        email,
        getIDS
      ))
      setShow(false)
      setTimeout(() => {
        dispatch(userFetch());
        setKey(chkBox => !chkBox);
        SetgetIDS([]);
      }, 1000);
    }
    else {
      return false
    }
  }

  useCallback(() => {
    dispatch(userFetch());
  }, [])

  return (
    <div>
      {show &&
        <div>
          <div className='overlay'></div>
          <div className='modalContent'>
            <div>
              <p>
                <label>Select Name</label>
                {data.userFetchReducer?.userFetchList == null ?
                  <p>task list not found</p>
                  :
                  <select
                    value={name}
                    onChange={(e) => { Setname(e.target.value) }}>
                    <option value="">Select One...</option>
                    {data.userFetchReducer?.userFetchList.map((item, index) => {
                      return (
                        <option key={index.toString()} value={item.name}>
                          {item.name}
                        </option>
                      )
                    })}
                  </select>
                }
              </p>
              <p>
                <label>Select Email</label>
                {data.userFetchReducer?.userFetchList == null ?
                  <p>task list not found</p>
                  :
                  <select
                    value={email}
                    onChange={(e) => { Setemail(e.target.value) }}>
                    <option value="">Select One...</option>
                    {data.userFetchReducer?.userFetchList.map((item, index) => {
                      return (
                        <option key={index.toString()} value={item.email}>
                          {item.email}
                        </option>
                      )
                    })}
                  </select>
                }
              </p>
              <p>
                <button onClick={modalHide}>Close</button>
                <button onClick={() => updateEMPL()}>Update</button>
              </p>
            </div>
          </div>
        </div>
      }
      <div className='container'>
        <div>
          {getIDS.length > 0 ?
            <button style={{ float: 'right' }} onClick={modalShow}>Update EMP</button>
            :
            null}
        </div>
        <div>
          <div className='loaderContainer'>
            <div className='loader'>
              <div>{data.userFetchReducer?.loading && <img src={loader} />}</div>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={iChecked ? true : undefined}
                    onChange={SACHandle}
                  />
                </th>
                <th>name</th>
                <th>email</th>
                <th>cell</th>
              </tr>
            </thead>
            {data.userFetchReducer?.userFetchList == null || data.userFetchReducer?.userFetchList.length == 0 ?
              <p>data not found</p> :
              <tbody>
                {data.userFetchReducer?.userFetchList.map((item, index) => {
                  return (
                    <tr key={index.toString()}>
                      <td>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          key={item.chkBox}
                          checked={item.chkBox}
                          onChange={(e) => getIDSHandle(e, item)}
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.cell}</td>
                    </tr>
                  )
                })
                }
              </tbody>
            }
          </table>
        </div>
      </div>
    </div>
  );
}

export default Contact;
