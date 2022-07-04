import { getResume } from '../actions/resumeAction';
import { useDispatch, useSelector } from 'react-redux';

const ResumeData = () => {
	const dispatch = useDispatch();

	const { resume } = useSelector((state) => state.oneResume);

	dispatch(getResume('62b310886df9b88d69cb56fe'));

	const result = [...resume];

	return result;
};

export default ResumeData;
