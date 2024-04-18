import React from 'react';
import '../ContactSection/FacultyContact.css'

const FacultyContact = () => {
  return (
    <>
      <div className="scene">
        <div className="left-zone">
          <ul className="list">
            <li className="item">
              <input
                type="radio"
                id="radio_strawberry"
                name="basic_carousel"
                value="strawberry"
                checked="checked"
              />
              <label  htmlFor="radio_strawberry">
                Prof. Ashvini Bamnikar
              </label>
              <div className="content content_strawberry">
                {/* <span className="picto"></span> */}
                <h1>Prof. Ashvini Bamnikar</h1>
                <p>
                  Lorem ipsum dolor sit amet.
                  8908098348
                </p>
              </div>
            </li>
            <li className="item">
              <input
                type="radio"
                id="radio_banana"
                name="basic_carousel"
                value="banana"
              />
              <label  htmlFor="radio_banana">
                Prof. Aditya R Jadhav
              </label>
              <div className="content content_banana">
                {/* <span className="picto"></span> */}
                <h1>Prof. Aditya R Jadhav</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, provident.
                  7893479239
                </p>
              </div>
            </li>
            <li className="item">
              <input
                type="radio"
                id="radio_apple"
                name="basic_carousel"
                value="apple"
              />
              <label  htmlFor="radio_apple">
              Prof. R.M.Kawale
              </label>
              <div className="content content_apple">
                {/* <span className="picto"></span> */}
                <h1>Prof. R.M.Kawale</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  8903083409
                </p>
              </div>
            </li>
            <li className="item">
              <input
                type="radio"
                id="radio_orange"
                name="basic_carousel"
                value="orange"
              />
              <label  htmlFor="radio_orange">
                Prof. Sayuri Kamble
              </label>
              <div className="content content_orange">
                {/* <span className="picto"></span> */}
                <h1>Prof. Sayuri Kamble</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, tenetur?
                  89297397498
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="middle-border"></div>
        <div className="right-zone"></div>
      </div>
    </>
  );
}

export default FacultyContact
