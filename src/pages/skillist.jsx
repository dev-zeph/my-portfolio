import React from "react";
import '../App.css';

function Skillist() {
  const items = [
    { title: 'Software Development', description: 'Java, React.js, SQL, Database Management (AWS), Standard Giflow/Github understanding, CMS integration.' },
    { title: 'Fundraising', description: 'Door to Door Campaining for Diabetes Canada' },
    { title: 'Service', description: '' }
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

export default Skillist;
