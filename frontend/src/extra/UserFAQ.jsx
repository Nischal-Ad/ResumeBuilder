import React, { useState } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

const UserFAQ = ({ qst, ans }) => {
	const [show, setShow] = useState(false);
	return (
		<>
			<div className="bg-gray-200 rounded-lg md:w-1/2 w-full p-4 mt-4">
				<div className="flex justify-between" onClick={() => setShow(!show)}>
					<h4>{qst}</h4>
					{show ? <AiOutlineUp /> : <AiOutlineDown />}
				</div>

				{show && <p>{ans}</p>}
			</div>
		</>
	);
};

export default UserFAQ;
