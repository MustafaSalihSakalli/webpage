import React from "react";

export const UI = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">UI/UX Design</h3>
      <div className="skills__box ui__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Balsamiq</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Figma</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Origami</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
