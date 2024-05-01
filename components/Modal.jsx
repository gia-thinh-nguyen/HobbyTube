'use client';
import React, { useState,useEffect } from "react";

const Modal = ({ showModal, setShowModal,components,onSelectedComponents }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedComponents, setSelectedComponents] = useState(["basketball","soccer","science","programming","cooking"]);
    const handleCheckboxChange = (component) => {
      if (selectedComponents.includes(component)) {
        setSelectedComponents(selectedComponents.filter((c) => c !== component));
      } else {
          setSelectedComponents([...selectedComponents, component]);
      }
    };
  
    const sortedComponents = components.sort((a, b) => {
      const aIndex = selectedComponents.indexOf(a);
      const bIndex = selectedComponents.indexOf(b);
      if (aIndex !== -1 && bIndex === -1) {
        return -1;
      } else if (aIndex === -1 && bIndex !== -1) {
        return 1;
      }
      return 0;
    });
    useEffect(() => {
        onSelectedComponents(selectedComponents);
      }, [selectedComponents]);
  
    return (
      <div className={`modal fixed w-full h-full top-0 left-0 flex items-center justify-center ${showModal ? 'block' : 'hidden'} z-[200]`}>
        <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
        <div className="modal-container bg-white w-5/6 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
          <div className="modal-content py-4 text-left px-6">
            <div className="flex justify-between items-center pb-3">
              <p><strong className="text-2xl">Hobbies </strong>(up to 7)</p>
              <div className="modal-close cursor-pointer z-50" onClick={() => setShowModal(false)}>
                <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                  <path
                    d="M6.414 9l-4.293 4.293a1 1 0 1 0 1.414 1.414L9 10.414l4.293 4.293a1 1 0 1 0 1.414-1.414L10.414 9l4.293-4.293a1 1 0 1 0-1.414-1.414L9 7.586 4.707 3.293a1 1 0 1 0-1.414 1.414L6.414 9z" />
                </svg>
              </div>
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="w-full bg-gray-100 p-2 mb-3"
            />
            {sortedComponents
              .filter((component) => component.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((component, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id={`component-${index}`}
                    checked={selectedComponents.includes(component)}
                    onChange={() => handleCheckboxChange(component)}
                    className="mr-2"
                    disabled={selectedComponents.length >= 7 && !selectedComponents.includes(component)}
                  />
                  <label htmlFor={`component-${index}`}>{component}</label>
                </div>
              ))}
            
          </div>
        </div>
      </div>
    );
  };
  export default Modal;