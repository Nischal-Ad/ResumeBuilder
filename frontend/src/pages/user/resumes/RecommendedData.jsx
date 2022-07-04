import React, { useEffect } from 'react';
import { clearError } from '../../../actions/recommendedAction';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../extra/Loading';
import { Recommended } from '../../../extra/sample/SampleMain';
import { RiCheckboxMultipleBlankLine } from 'react-icons/ri';

const RecommendedData = () => {
	const dispatch = useDispatch();

	const { error, loading, data } = useSelector((state) => state.allRecommended);
	const { templatedata } = useSelector((state) => state.template);

	useEffect(() => {
		if (error) {
			alert.error(error);
			dispatch(clearError());
		}
	}, [dispatch, error]);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<>
					<section className='container mx-auto pt-20' id='samples'>
						<div className='font-poppins flex items-center text-sm font-bold text-green-800'>
							<RiCheckboxMultipleBlankLine />
							&nbsp; Samples
						</div>
						<h2 className='pb-2'>Samples</h2>
						<div className='md:grid lg:grid-cols-3 md:grid-cols-2 gap-4 content-between'>
							{data
								?.sort((a, b) => (a.count < b.count ? 1 : -1))
								?.slice(0, 3)
								?.map((recom, index) => {
									return (
										<Recommended
											key={index}
											{...recom}
											index={index}
											templatedata={templatedata}
										/>
									);
								})}
						</div>
					</section>
				</>
			)}
		</>
	);
};

export default RecommendedData;
