var getElement = window.frameElement;

const getData = (url) =>
	new Promise((resolve, reject) => {
		fetch(url)
			.then((response) => response.json())
			.then((json) => resolve(json))
			.catch((error) => reject(error));
	});

const id = getElement.getAttribute('id');

const url = `http://localhost:5000/api/v1/getmyresume/${id}`;

getData(url)
	.then((data) => {
		const formData = (document.getElementById('name').innerHTML =
			data.resume.name);
		document.getElementById('email').innerHTML = data.resume.email;
		document.getElementById('collage').innerHTML = data.resume.collage;
		document.getElementById('companyName').innerHTML = data.resume.companyName;
		document.getElementById('department').innerHTML = data.resume.department;
		document.getElementById('endDate').innerHTML = data.resume.endDate;
		document.getElementById('github').innerHTML = data.resume.github;
		document.getElementById('job').innerHTML = data.resume.job;
		document.getElementById('linkdin').innerHTML = data.resume.linkdin;
		document.getElementById('phone').innerHTML = data.resume.phone;
		document.getElementById('skills').innerHTML = data.resume.skills;
		document.getElementById('startDate').innerHTML = data.resume.startDate;
		document.getElementById('workDesc').innerHTML = data.resume.workDesc;
		document.getElementById('workJob').innerHTML = data.resume.workJob;
		document.getElementById('workendDate').innerHTML = data.resume.workendDate;
		document.getElementById('workstartDate').innerHTML =
			data.resume.workstartDate;
		return formData;
	})
	.catch((error) => {});
