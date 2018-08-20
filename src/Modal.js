import React, { Component } from "react";
import "./App.css";

class Modal extends Component {
   constructor() {
      super();
      this.state = {
         name: "",
         department: ""
      };
   }
   render() {
      return (
         <div>
            <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#exampleModal">
               Add
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
               <div className="modal-dialog" role="document">
                  <div className="modal-content">
                     <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                           Add contact <i className="fas fa-plus" />
                        </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                           <span aria-hidden="true">&times;</span>
                        </button>
                     </div>
                     <div className="modal-body">
                        <div>
                           <img src="https://api.adorable.io/avatars/40/sa@adorable.io.png" style={{ borderRadius: "5px" }} alt="Alt text" />
                        </div>
                        <div className="input-group mb-3">
                           <input onInput={this.inputHandler} name="name" type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="input-group mb-3">
                           <input onInput={this.inputHandler} name="department" type="text" className="form-control" placeholder="Department" />
                        </div>
                     </div>
                     <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">
                           Close
                        </button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.props.clickHandler}>
                           Add
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }

   inputHandler = e => {
      this.setState({ [e.target.name]: e.target.value });
   };
}

export default Modal;
