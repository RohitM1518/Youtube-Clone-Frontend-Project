import React, { useState } from 'react';
import { format } from 'timeago.js';

const Description = ({ views, createdAt, desc }) => {
    // State to manage whether the description is expanded or not
    const [isExpanded, setIsExpanded] = useState(false);

    // Function to toggle the expanded state
    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    // Limit the number of characters displayed when not expanded
    const MAX_LENGTH = 100;

    return (
        <div className=' bg-custom-gray-2 p-2 text-white rounded-lg'>
            <div className='flex gap-3 text-white font-bold'>
                <h1>{views} Views</h1>
                <h1>{format(createdAt)}</h1>
            </div>
            <div>
                {/* Check if the description length is greater than MAX_LENGTH and if it is not expanded */}
                {desc.length > MAX_LENGTH && !isExpanded ? (
                    <>
                        {`${desc.substring(0, MAX_LENGTH)}... `}
                        <button onClick={toggleReadMore} style={{ color: 'blue', cursor: 'pointer' }}>Read More</button>
                    </>
                ) : (
                    <>
                        {desc}
                        {/* Only show the "Read Less" button if the description was originally longer than MAX_LENGTH */}
                        {desc.length > MAX_LENGTH && (
                            <button onClick={toggleReadMore} style={{ color: 'blue', cursor: 'pointer' }}>Read Less</button>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Description;