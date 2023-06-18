const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
//login sign in
const form = document.querySelector("form");
const password = document.querySelector(".password");
const email = document.querySelector(".email");
const sign_btn = document.querySelector(".sign_btn");


let arr = [];

if (JSON.parse(localStorage.getItem("arr")) !== null) {
	arr = JSON.parse(localStorage.getItem("arr"));
}

sign_btn.addEventListener("click", (e) => {
	let obj = {
		email: "",
		password: ""
	}
	obj.email = email.value;
	obj.password = password.value;
	arr.push(obj);

	localStorage.setItem("arr", JSON.stringify(arr));
	console.log("arr");
	console.log(JSON.parse(localStorage.getItem("arr")));

	e.preventDefault();
})

//login sign up
const form2 = document.querySelector("form");
const name = document.querySelector("#name");
const password2 = document.querySelector("#password");
const email2 = document.querySelector("#email");
const signup_btn = document.querySelector(".signup_btn");


let Array = [];

if (JSON.parse(localStorage.getItem("Array")) !== null) {
	Array = JSON.parse(localStorage.getItem("Array"));
}

signup_btn.addEventListener("click", (e) => {
	let obj = {
		name: "",
		email: "",
		password: ""
	}
	obj.name = name.value;
	obj.email = email2.value;
	obj.password = password2.value;
	Array.push(obj);

	localStorage.setItem("Array", JSON.stringify(Array));
	console.log("Array");
	console.log(JSON.parse(localStorage.getItem("Array")));

	e.preventDefault();
})