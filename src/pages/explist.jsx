import React from "react";
import '../App.css';

function Explist() {
  const items = [
    { title: 'Founder', description: 'Revive - Multifaceted non-profit organizaion' },
    { title: 'Senior Developer', description: 'DalNotes - Note Sharing Platform form for Dalhousie Students to access Notes' },
    { title: 'Junior Developer', description: 'Dalhousie Consulting Association - Created and maintaned dynamic content using Strapi CMS, Developed Front end code, Managed front end and back end integration using Node.js, Designed front end UI' }

  ];

  return (
    <ol className="custom-list">
      {items.map((item, index) => (
        <li key={index} className="exlist">
          <span className="number">{String(index + 1).padStart(2, '0')}</span>
          <div className="text-content">
            <h3 className="listheader">{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default Explist;
