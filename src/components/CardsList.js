import React from "react";
import Card from './Card';

export default function CardsList({ experiences }) {
  return (
    <div className='cards'>
      {experiences.map(exp => <Card {...exp} key={exp.picName} />)}
    </div>
  );
}
