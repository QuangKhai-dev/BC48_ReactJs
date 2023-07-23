// import React from 'react';

// class Header extends React.Component {
//   // đối với các component được tạo ra luôn phải có một phương thức tên là render để return về một đoạn layout
//   render() {
//     return <div>Hello Cybersoft</div>;
//   }
// }

// export default Header;

// câu lệnh tạo class component: rcc (react class component)
import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    // jsx nó có một số thuộc tính của react bên trong: props, className.....
    console.log(<div></div>);
    return (
      <div className="bg-danger p-4 text-white fs-3">
        <div className="modal" tabIndex={-1}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
