// ========typing Animation=====
var typed = new Typed('.typing', {
  strings: ['', 'Web Developer', 'Programmer', 'Web Designer'],
  typespeed: 80,
  backspeed: 50,
  loop: true,
});

// ========Aside=====
const nav = document.querySelector('.nav');
const navList = nav.querySelectorAll('li');
const totalNavList = navList.length;

const allSection = document.querySelectorAll('.section');
const totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector('a');
  a.addEventListener('click', function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector('a').classList.contains('active')) {
        addBackSection(j);
        // allSection[j].classList.add('back-section');
      }
      navList[j].querySelector('a').classList.remove('active');
    }
    this.classList.add('active');
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}
function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove('back-section');
  }
}
function addBackSection(num) {
  allSection[num].classList.add('back-section');
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove('active');
  }

  const target = element.getAttribute('href').split('#')[1];
  document.querySelector('#' + target).classList.add('active');
}

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector('a').classList.remove('active');
    const target = element.getAttribute('href').split('#')[1];
    if (
      target ===
      navList[i].querySelector('a').getAttribute('href').split('#')[1]
    ) {
      navList[i].querySelector('a').classList.add('active');
    }
  }
}

document.querySelector('.hire-me').addEventListener('click', function () {
  const sectionIndex = this.getAttribute('data-section-index');
  //   console.log(sectionIndex);
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});

const navTogglerBtn = document.querySelector('.nav-toggler'),
  aside = document.querySelector('.aside');
navTogglerBtn.addEventListener('click', () => {
  asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
  aside.classList.toggle('open');
  navTogglerBtn.classList.toggle('open');
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle('open');
  }
}

function sendMail() {
  const name = document.getElementById('fullname').value;
  const email = document.getElementById('email_id').value;
  const message = document.getElementById('message').value;
  var params = {
    from_name: name,
    email_id: email,
    message: message,
  };
  if (name == '' || email == '' || message == '') {
    alert('Please fill all the fields');
  } else {
    emailjs.send('service_eik0jog', 'template_030clzq', params).then(
      function (res) {
        alert('Success!' + res.text);
      },
      function (error) {
        console.log('FAILED...', error);
      }
    );
  }
}

// var btnContainer = document.getElementById('nav');

// var btns = btnContainer.getElementsByClassName('sidebarbtn');
// var btn = btnContainer.getElementsByClassName('btn11');
// var fa = btnContainer.getElementsByClassName('fa');

// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener('click', function () {
//     var current = document.getElementsByClassName('active');
//     console.log(current[0]);
//     console.log(fa);
//     console.log(current[0].className);
//     console.log(current[0].fa[0].className);
//     current[0].className = current[0].className.replace(' active', '');
//     this.className += ' active';
//   });
// }
