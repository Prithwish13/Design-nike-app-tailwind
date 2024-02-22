import React, { useState } from 'react';

const Collapsible = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-300 rounded p-4 w-1/2">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Question</h2>
        <button
          className="text-blue-500 focus:outline-none"
          onClick={toggleCollapsible}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transform rotate-90 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}
        </button>
      </div>
      <div
        className={`mt-4 border-t border-gray-300 pt-4 ${
          isOpen ? 'block' : 'hidden'
        } transition-all duration-1300`}
      >
        <p className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe sequi sunt beatae quaerat, quae est eligendi eum quibusdam odio veniam rem repellendus explicabo quam dolores natus et a voluptatem maxime.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sint distinctio incidunt harum, accusamus praesentium? Fugiat optio adipisci fugit enim laboriosam repellendus sunt quasi nam ut expedita iusto, harum distinctio?
        </p>
      </div>
    </div>
  );
};

export default Collapsible;
