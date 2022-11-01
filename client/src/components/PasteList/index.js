import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const PasteList = ({ pastes }) => {
      const [theme, setTheme] = useState('paste-text-dark');
  const toggleTheme = () => {
    if (theme === 'paste-text-dark') {
      setTheme('past-text');
    } else {
      setTheme('paste-text-dark');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

    if (!pastes.length) {
        return    <div className='e-div fa-fade '>
                       <div className="error">
                        
                            <h4><b>Lets Get Crusty</b></h4>
                            <h4><b>You have no pastes yet</b></h4>
                            <h4><b>Create your first paste this way <Link to="/paste"><i class={`${theme} fa-solid fa-arrow-right`}></i></Link></b></h4>
                        </div>
                            
                    </div>

    }

    return (
            

                <div className="row justify-content-center">
                     
                    {pastes &&
                        pastes.map(paste => (
                            
                            <div key={paste.uuid}  className="col-8 my-5 mx-5">
                                <p >
                                    Paste{' '}
                                    <Link
                                        to={`/paste/${paste.uuid}`}
                                        style={{ fontWeight: 700 }}
                                        
                                    >#{paste.uuid}</Link><br/>
                                    Expires on {paste.expires}
                                </p>
                                <div className=" row justify-content-center ">
                                     <div className="copy-button" onClick={() => {
                                            navigator.clipboard.writeText(`http://localhost:3000/paste/${paste.uuid}`);}}><span>
                                            <i className="fa-solid fa-copy"></i>
                                            </span>
                                        </div>
                                    <textarea className={`${theme} col-12`} rows="20" readOnly={true} defaultValue={paste.text} />
                                    <Link to={`/update-paste/${paste.uuid}`}>
                                    <button className={`col-12 paste-button-delete`} type="edit">Edit</button></Link>{' '}
                                    <button className=" mt-5 col-12 paste-button-delete" type="delete">Delete</button>
                                </div>
                            </div>
                        ))}
                        
                </div>

            
    );
};
//   <div key={paste.uuid} className="card">
//             <p className="card-header">
//                 Paste #{paste.uuid}<br/>
//                 Expires on {paste.expires}
//             </p>
//             <div className="card-body">
//                 <textarea className="paste-text" rows="20" readOnly={true} defaultValue={paste.text} />
//             </div>
//         </div>



export default PasteList;