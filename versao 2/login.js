const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const loginB = document.getElementById('loginB');
const html = document.querySelector('html');
const menu = {
    config: document.querySelector('.conf'),
    self: document.querySelector('.menu'),
    isActive: false
}
const options = {
    // merriweather: document.getElementById('bf1'),
    // roboto: document.getElementById('bf2'),
    lightmode: document.getElementById('lm'),
    darkmode: document.getElementById('dm')
}

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
})

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
})

menu.config.addEventListener('click', () => {
    if (menu.isActive) {
        menu.isActive = false;
        menu.config.blur();
        menu.config.classList.remove("active");
        for (let i in options) {options[i].classList.remove("active")};
        setTimeout(() => {menu.self.classList.remove("active-menu")}, 300);
    } else {
        menu.isActive = true;
        menu.self.classList.add("active-menu")
        menu.config.classList.add("active");
        setTimeout(() => {for (let i in options) {options[i].classList.add("active")}}, 1);
        }
})
    
// options.merriweather.addEventListener('click', () => {
//     html.style.setProperty('--font', "'Merriweather', serif");
//     document.cookie = 'fonte = merriweather';
// })

// options.roboto.addEventListener('click', () => {
//     html.style.setProperty('--font', "'Roboto Slab', serif");
//     document.cookie = 'fonte = roboto';
// })

options.darkmode.addEventListener('click', () => {
    document.cookie = 'mode = darkmode';
	html.style.setProperty('--bColorL', '#21222c');
	html.style.setProperty('--signinColor', '#8be9fd');
	html.style.setProperty('--signupColor', '#50fa7b');
	html.style.setProperty('--overlayBgColor', '#866adf');
	html.style.setProperty('--formColor', '#282a36');
	html.style.setProperty('--inputColor', '#21222c');
	html.style.setProperty('--overlayMainColor', '#302b44');
	html.style.setProperty('--inputFontColor', '#f1fa8c');
	html.style.setProperty('--buttonMainColor', '#ff79c6');
	html.style.setProperty('--overlayH1Color', '#f1fa8c');
	html.style.setProperty('--deniedColor', '#f55656');
})

options.lightmode.addEventListener('click', () => {
    document.cookie = 'mode = lightmode';
	html.style.setProperty('--bColorL', '#f6f5f7');
	html.style.setProperty('--signinColor', '#5b446c');
	html.style.setProperty('--signupColor', '#5b446c');
	html.style.setProperty('--overlayBgColor', '#5b446c');
	html.style.setProperty('--formColor', '#FFF');
	html.style.setProperty('--inputColor', '#eee');
	html.style.setProperty('--overlayMainColor', '#fff');
	html.style.setProperty('--inputFontColor', '#545454');
	html.style.setProperty('--buttonMainColor', '#5b446c');
	html.style.setProperty('--overlayH1Color', '#fff');
	html.style.setProperty('--deniedColor', '#e83c3c');
})

document.addEventListener('keypress', (key) => {
    if (key.key == 'Enter') {
        loginB.click();
    }
})

function passwordchecker() {
	const checkNumber = /[1-9]/;
	const checkUpper = /[A-Z]/;
	const inputs = container.querySelector('form')
	.querySelectorAll('input[type="password"]');
    const pwrq = {
        passwordmatch: document.querySelector(".passwordmatch"),
        upch: document.querySelector(".upch"),
        numch: document.querySelector(".numch")
    };
	
	if (inputs[0].value != inputs[1].value) {
		pwrq.passwordmatch.classList.remove("allowed");
		pwrq.passwordmatch.style.display = "block";
		setTimeout(() => {
			pwrq.passwordmatch.classList.add("denied");
		}, 1);
	} else if (inputs[0].value == inputs[1].value && inputs[0].value != "") {
		pwrq.passwordmatch.classList.remove("denied");
		pwrq.passwordmatch.classList.add("allowed")
		setTimeout(() => {
			pwrq.passwordmatch.style.display = "none";
		}, 170);
	};
	if (checkUpper.test(inputs[0].value)) {
		pwrq.upch.classList.remove("denied");
		pwrq.upch.classList.add("allowed")
		setTimeout(() => {
			pwrq.upch.style.display = "none";
		}, 170);
	} else {
		pwrq.upch.classList.remove("allowed");
		pwrq.upch.style.display = "block";
		setTimeout(() => {
			pwrq.upch.classList.add("denied");
		}, 1);
	};
	if (checkNumber.test(inputs[0].value)) {
		pwrq.numch.classList.remove("denied");
		pwrq.numch.classList.add("allowed")
		setTimeout(() => {
			pwrq.numch.style.display = "none";
		}, 170);
	} else {
		pwrq.numch.classList.remove("allowed");
		pwrq.numch.style.display = "block";
		setTimeout(() => {
			pwrq.numch.classList.add("denied");
		}, 1);
	};
};

// if (document.cookie.split('; ').find(row => row.startsWith('fonte=')) != undefined) {
//     const fonte = document.cookie.split('; ').find(row => row.startsWith('fonte=')).split('=')[1];
//     options[fonte].click();
// }
if (document.cookie.split('; ').find(row => row.startsWith('mode=')) != undefined) {
    const mode = document.cookie.split('; ').find(row => row.startsWith('mode=')).split('=')[1];
    options[mode].click();
}