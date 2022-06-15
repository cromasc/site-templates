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
    merriweather: document.getElementById('bf1'),
    roboto: document.getElementById('bf2'),
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
    
options.merriweather.addEventListener('click', () => {
    html.style.setProperty('--font', "'Merriweather', serif");
    document.cookie = 'fonte = merriweather';
})

options.roboto.addEventListener('click', () => {
    html.style.setProperty('--font', "'Roboto Slab', serif");
    document.cookie = 'fonte = roboto';
})

options.darkmode.addEventListener('click', () => {
    document.cookie = 'mode = darkmode';
	html.style.setProperty('--bColorL', '#262835');
	html.style.setProperty('--mainColor', '#7fd8eb');
	html.style.setProperty('--spanColor', '#89788f');
	html.style.setProperty('--overlayBgColor', '#866bdf');
	html.style.setProperty('--formColor', '#302b44');
	html.style.setProperty('--inputColor', '#514260');
	html.style.setProperty('--menuFontColor', '#262835');
	html.style.setProperty('--overlayMainColor', '#302b44');
	html.style.setProperty('--inputFontColor', '#bfbfbf');
	html.style.setProperty('--buttonMainColor', '#e589ff');
	html.style.setProperty('--overlayH1Color', '#f1fa8c');
})

options.lightmode.addEventListener('click', () => {
    document.cookie = 'mode = lightmode';
	html.style.setProperty('--bColorL', '#f6f5f7');
	html.style.setProperty('--mainColor', '#5b446c');
	html.style.setProperty('--spanColor', '#262835');
	html.style.setProperty('--overlayBgColor', '#5b446c');
	html.style.setProperty('--formColor', '#FFF');
	html.style.setProperty('--inputColor', '#eee');
	html.style.setProperty('--menuFontColor', '#fff');
	html.style.setProperty('--overlayMainColor', '#fff');
	html.style.setProperty('--inputFontColor', '#545454');
	html.style.setProperty('--buttonMainColor', '#5b446c');
	html.style.setProperty('--overlayH1Color', '#fff');
})

document.addEventListener('keypress', (key) => {
    if (key.key == 'Enter') {
        loginB.click();
    }
})

function passwordchecker() {
	const checkNumber = /[1-9]/;
	const checkUpper = /[A-Z]/;
    const pwrq = {
        passwordmatch: document.querySelector(".passwordmatch"),
        upch: document.querySelector(".upch"),
        numch: document.querySelector(".numch")
    };

	if (inputs[0].value != inputs[1].value) {
		pwrq.passwordmatch.classList.remove("allowed");
		pwrq.passwordmatch.classList.add("denied");
	} else if (inputs[0].value == inputs[1].value) {
		pwrq.passwordmatch.classList.remove("denied");
		pwrq.passwordmatch.classList.add("allowed")
	};
	if (checkUpper.test(inputs[0].value)) {
		pwrq.upch.classList.remove("denied");
		pwrq.upch.classList.add("allowed");
	} else {
		pwrq.upch.classList.remove("allowed");
		pwrq.upch.classList.add("denied");	
	};
	if (checkNumber.test(inputs[0].value)) {
		pwrq.numch.classList.remove("denied");
		pwrq.numch.classList.add("allowed");
	} else {
		pwrq.numch.classList.remove("allowed");
		pwrq.numch.classList.add("denied");
	};
};

if (document.cookie.split('; ').find(row => row.startsWith('fonte=')) != undefined) {
    const fonte = document.cookie.split('; ').find(row => row.startsWith('fonte=')).split('=')[1];
    options[fonte].click();
}
if (document.cookie.split('; ').find(row => row.startsWith('mode=')) != undefined) {
    const mode = document.cookie.split('; ').find(row => row.startsWith('mode=')).split('=')[1];
    options[mode].click();
}