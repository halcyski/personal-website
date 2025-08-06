import React from 'react';

const InfoLine = ({ label, value, isLink = false, href = "#" }) => (
    <div>
        <span className="text-green-400 font-bold">{label.padEnd(12)}</span>
        <span className="text-gray-300">: </span>
        {isLink ?
            <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:underline">{value}</a> :
            <span className="text-gray-300">{value}</span>
        }
    </div>
);

export default InfoLine;