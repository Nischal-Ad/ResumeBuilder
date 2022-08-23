import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	clearError,
	dataCollect,
	getAllResume,
	UpdateResume,
} from '../../actions/resumeAction';
import { getCount } from '../../actions/recommendedAction';
import { toast } from 'react-toastify';
import { StepperContext } from './StepperContext';
import Stepper from './Stepper';
import StepperControl from './StepperControl';
import Basic from './Basic';
import WorkExp from './WorkExp';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';

import Education from './Education';

const Form = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const [display, setDisplay] = useState(true);

	const alert = toast;

	const { id } = useParams();

	const templateId = id;

	const nevigate = useNavigate();

	const dispatch = useDispatch();

	const { error, loading, success } = useSelector((state) => state.dataCollect);

	const [formdata, setformData] = useState({
		name: '',
		email: '',
		github: '',
		job: '',
		linkdin: '',
		phone: '',
		department: '',
		collage: '',
		skills: '',
		startDate: '',
		endDate: '',
		workJob: '',
		companyName: '',
		workDesc: '',
		workstartDate: '',
		workendDate: '',
	});

	const steps = ['Basic Info', 'Education', 'Work Exp'];

	const displayStep = (step) => {
		switch (step) {
			case 1:
				return <Basic />;
			case 2:
				return <Education />;
			case 3:
				return <WorkExp />;

			default:
				return '';
		}
	};

	const submitTemplateData = (e) => {
		e.preventDefault();
		dispatch(dataCollect(formdata, templateId));
	};

	const handleClick = (direction) => {
		var newStep = currentStep;
		direction === 'next' ? newStep++ : newStep--;

		newStep > 0 && newStep <= steps.length + 1 && setCurrentStep(newStep);
	};

	if (success === true) {
		nevigate('/');
		alert.success('resume created');
		dispatch(getCount(id));
		dispatch(getAllResume());
	}

	useEffect(() => {
		if (error) {
			alert.error(error);
			dispatch(clearError());
		}

		if (currentStep === 4) {
			setDisplay(true);
		} else {
			setDisplay(false);
		}
	}, [dispatch, error, alert, currentStep]);

	return (
		<>
			<section className='md:full container mx-auto shadow-xl rounded-2xl p-2'>
				<form onSubmit={submitTemplateData}>
					<div
						className={`horizontal mt-5 ${display === true ? 'hidden' : ''}`}
					>
						<Stepper steps={steps} currentStep={currentStep} />

						<div className='mt-5 px-10 py-5'>
							<StepperContext.Provider
								value={{
									formdata,
									setformData,
								}}
							>
								{displayStep(currentStep)}
							</StepperContext.Provider>
						</div>
					</div>
					<div className={display === true ? 'hidden' : ''}>
						<StepperControl
							handleClick={handleClick}
							currentStep={currentStep}
							steps={steps}
							loading={loading}
						/>
					</div>
				</form>
			</section>
		</>
	);
};

const EditForm = ({
	_id,
	name,
	email,
	github,
	job,
	linkdin,
	phone,
	department,
	collage,
	skills,
	startDate,
	endDate,
	workJob,
	companyName,
	workDesc,
	workstartDate,
	workendDate,
}) => {
	const [currentStep, setCurrentStep] = useState(1);
	const [display, setDisplay] = useState(true);

	const alert = toast;

	const nevigate = useNavigate();

	const dispatch = useDispatch();

	const { isUpdated, loading, error } = useSelector(
		(state) => state.updateResume
	);

	const [formdata, setformData] = useState({
		name: name,
		email: email,
		github: github,
		job: job,
		linkdin: linkdin,
		phone: phone,
		department: department,
		collage: collage,
		skills: skills,
		startDate: startDate,
		endDate: endDate,
		workJob: workJob,
		companyName: companyName,
		workDesc: workDesc,
		workstartDate: workstartDate,
		workendDate: workendDate,
	});
	const steps = ['Basic Info', 'Education', 'Work Exp'];

	const displayStep = (step) => {
		switch (step) {
			case 1:
				return <Basic />;
			case 2:
				return <Education />;
			case 3:
				return <WorkExp />;

			default:
				return '';
		}
	};
	const submitTemplateData = (e) => {
		e.preventDefault();
		dispatch(UpdateResume(_id, formdata));
	};

	const handleClick = (direction) => {
		var newStep = currentStep;
		direction === 'next' ? newStep++ : newStep--;

		newStep > 0 && newStep <= steps.length + 1 && setCurrentStep(newStep);
	};

	useEffect(() => {
		if (error) {
			nevigate('/');
			alert.error(error);
			dispatch(clearError());
		}
		if (isUpdated === true) {
			nevigate('/');
			alert.success('resume updated');

			window.location.reload(false);
		}
		if (currentStep === 4) {
			setDisplay(true);
		} else {
			setDisplay(false);
		}
	}, [dispatch, error, isUpdated, nevigate, alert, currentStep]);

	return (
		<>
			<section className='md:full container mx-auto shadow-xl rounded-2xl p-2'>
				<form onSubmit={submitTemplateData}>
					<div
						className={`horizontal mt-5 ${display === true ? 'hidden' : ''}`}
					>
						<Stepper steps={steps} currentStep={currentStep} />

						<div className='mt-5 px-10 py-5'>
							<StepperContext.Provider
								value={{
									formdata,
									setformData,
								}}
							>
								{displayStep(currentStep)}
							</StepperContext.Provider>
						</div>
					</div>
					<div className={display === true ? 'hidden' : ''}>
						<StepperControl
							handleClick={handleClick}
							currentStep={currentStep}
							steps={steps}
							loading={loading}
						/>
					</div>
				</form>
			</section>
		</>
	);
};

export default Form;
export { EditForm };
