import React from 'react';
import { useParams } from 'react-router-dom';

const data = [
    { id: '1', name: 'B.Tech Block (Administrative Block)', description: '<ul><li>eiufhiu</li><li>kkfiuehf</li></ul><br/> ' },
    { id: '2', name: 'Library', description: '<ul><li>NCC Office – 2<sup>nd</sup> Floor</li><li>NSS Office - Top floor</li><li>Basement - Semester Book’s Availability</li><li>Time : <i>Working Days</i> : 8am - 9pm, <i>Holidays</i> : 8 am – 5 pm</li></ul>' },
    { id: '3', name: 'Item 3', description: 'Description for Item 3' },
];

const Details = () => {
    const { id } = useParams();

    // Find the item based on the id from the URL
    const item = data.find((d) => d.id === id);

    return (
        <div>
            {item ? (
                <>
                    <h1>{item.name}</h1>
                    {/* Using dangerouslySetInnerHTML to render HTML content */}
                    <div dangerouslySetInnerHTML={{ __html: item.description }} />
                </>
            ) : (
                <p>Item not found!</p>
            )}
        </div>
    );
};

export default Details;