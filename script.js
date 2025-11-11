// ABOUT
let icon1 = document.getElementById("icon1");
let icon2 = document.getElementById("icon2");
let icon3 = document.getElementById("icon3");
let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");
let image4 = document.getElementById("image4");
let aboutText = document.querySelector("b");
let aboutHolder = document.getElementById('about-paragraf')
let aboutTittle = document.querySelector("#about-paragraf h1");
let aboutParagraf = document.querySelector("#about-paragraf p")


icon1.addEventListener("click", function () {
  aboutHolder.style.animation = 'none'; // reset dulu
  void aboutHolder.offsetWidth;
  aboutHolder.style.animation = 'fadeSlideUp 2s'
  aboutText.innerHTML = "SMKN 1 Kedawung";
  aboutText.classList.remove("KDW", "MCC", "WD");
  aboutText.classList.add("KDW");

  aboutTittle.innerHTML = `Profil SMKN 1 Kedawung Cirebon`
  aboutParagraf.innerHTML = `Nama Sekolah: SMK Negeri 1 Kedawung<br>
                            Alamat:Jl. Ir. H. Juanda No. 91, Kedawung, Kabupaten Cirebon, Jawa Barat<br>
                            45173<br>
                            Website:https://smkn1kedawung.sch.id<br><br>
                            SMKN 1 Kedawung adalah salah satu Sekolah Menengah Kejuruan (SMK)
                            negeri favorit di Kabupaten Cirebon yang berfokus pada pendidikan vokasional. Sekolah ini
                            bertujuan mencetak lulusan yang siap kerja, berdaya saing tinggi, dan mampu mengikuti
                            perkembangan teknologi serta dunia industri.<br><br>

                            Visi:Menjadi sekolah kejuruan yang unggul dalam
                            menghasilkan tenaga kerja profesional, berkarakter, dan kompetitif di tingkat nasional
                            maupun
                            internasional.<br><br>
                            Misi:<br>

                            - Meningkatkan mutu pendidikan dan pelatihan kejuruan.<br>
                            - Menjalin kerja sama dengan dunia usaha dan dunia industri (DUDI).<br>
                            - Membentuk lulusan yang disiplin, beretika, dan memiliki kompetensi sesuai jurusannya.<br>
                            - Mengembangkan kreativitas dan inovasi peserta didik melalui kegiatan intrakurikuler dan
                            ekstrakurikuler.<br><br>

                            Prestasi SMKN 1 Kedawung dikenal aktif
                            dalam lomba-lomba kejuruan seperti LKS (Lomba Kompetensi Siswa), lomba desain, lomba
                            jaringan
                            komputer, dan kegiatan kewirausahaan, baik tingkat kabupaten, provinsi, maupun nasional.<br>`


  image1.src = "./Image/Foto-kdw.png"; // Replace with actual image URL
  image2.src = "./Image/Foto-kdw-2.png"; // Replace with actual image URL
});

icon2.addEventListener("click", function () {
  aboutHolder.style.animation = 'none'; // reset dulu
  void aboutHolder.offsetWidth;
  aboutHolder.style.animation = 'fadeSlideUp 2s'
  aboutText.innerHTML = "MCC";
  aboutText.classList.remove("KDW", "MCC", "WD");
  aboutText.classList.add("MCC");

  aboutTittle.innerHTML = `Multimedia Creative Club (MCC)`
  aboutParagraf.innerHTML = `
                                MCC adalah sebuah komunitas antar sesama siswa yang berfokus pada pengembangan kreativitas dan skils di bidang multimedia, MCC memiliki beberapa divisi seperti desain grafis, fotografi, boardcasting, animasi, dan web design.<br><br>
                                
                                Komunitas ini bertujuan untuk memberikan wadah bagi para siswa untuk belajar, berkolaborasi, dan berbagi pengetahuan serta pengalaman dalam industri multimedia.<br><br>
                                
                                Walaupun sudah berganti nama jurusan ke Desain Komunikasi Visual (DKV), MCC tetap menjadi komunitas yang aktif dan berperan penting dalam mengembangkan potensi siswa di bidang multimedia.<br><br>
                                
                                Dengan adanya MCC, siswa dapat meningkatkan keterampilan mereka, memperluas jaringan, dan mempersiapkan diri untuk karir di industri kreatif.`;

  image1.src = "./Image/Progaming.png"; // Replace with actual image URL
  image2.src = "./Image/Progaming.png"; // Replace with actual image URL
});

icon3.addEventListener("click", function () {
  aboutHolder.style.animation = 'none'; // reset dulu
  void aboutHolder.offsetWidth;
  aboutHolder.style.animation = 'fadeSlideUp 2s'
  aboutText.innerHTML = "Web Design";
  aboutText.classList.remove("KDW", "MCC", "WD");
  aboutText.classList.add("WD");

  aboutTittle.innerHTML = `Web Design (WD)`
  aboutParagraf.innerHTML = `
                                WD adalah salah satu divisi di dalam Multimedia Creative Club (MCC) yang berfokus pada pembuatan dan pengembangan situs web.<br><br>
                                
                                Divisi ini bertujuan untuk memberikan pemahaman mendalam tentang desain antarmuka pengguna (UI), pengalaman pengguna (UX), serta pengembangan front-end dan back-end.<br><br>
                                
                                Siswa yang terlibat dalam divisi web design akan belajar tentang HTML, CSS, JavaScript, dan berbagai framework serta alat yang digunakan dalam industri web saat ini.<br><br>
                                
                                Dengan keterampilan ini, siswa dapat menciptakan situs web yang menarik, responsif, dan fungsional.`;

  image1.src = "./Image/Progaming.png"; // Replace with actual image URL
  image2.src = "./Image/Progaming.png"; // Replace with actual image URL
});

function show_img() {
  document.getElementById('imgBtn').classList.toggle('active')
  let imgHolder = document.querySelector('.img-holder');
  imgHolder.classList.toggle('show');
  if (imgHolder.classList.contains('none')) {
    document.getElementById("ImgShow").innerText = "Lihat Foto";
  } else {
    document.getElementById("ImgShow").innerText = "Sembunyikan Foto";
  }
}

// SCROLLBAR

const home = document.querySelector('li a[href="#home"]');
const about = document.querySelector('li a[href="#about"]');
const lesson = document.querySelector('li a[href="#lesson"]');
const person = document.querySelector('li a[href="#person"]');
const project = document.querySelector('li a[href="#project"]');

const main = document.querySelector('main');

let activeSection = null;

function replayAnimation(el, animation) {
  if (!el) return;
  el.style.animation = 'none';
  void el.offsetWidth;
  el.style.animation = animation;
}

main.addEventListener('scroll', () => {
  const top = main.scrollTop;
  let currentSection;

  if (top < 712) currentSection = 'home';
  else if (top < 1424) currentSection = 'about';
  else if (top < 2136) currentSection = 'lesson';
  else if (top < 2848) currentSection = 'person';
  else currentSection = 'project';


  if (currentSection !== activeSection) {
    activeSection = currentSection;

    document.querySelector('.active').classList.remove('active');
    document.querySelector(`li a[href="#${currentSection}"]`)?.classList.add('active');

    switch (currentSection) {
      case 'home':
        document.querySelector('.active').classList.remove('active');
        document.querySelector(`li a[href="#${currentSection}"]`)?.classList.add('active');

        replayAnimation(document.querySelector('.about-text'), 'fadeSlideleft 1s');
        replayAnimation(document.querySelector('.about-menu'), 'fadeSlideright 1s');
        replayAnimation(document.getElementById('about-paragraf'), 'fadeSlideUp 1s');
        break;

      case 'about':
        document.querySelector('.active').classList.remove('active');
        document.querySelector(`li a[href="#${currentSection}"]`)?.classList.add('active');

        replayAnimation(document.querySelector('.lesson-text'), 'fadeSlideUp 2s');
        replayAnimation(document.querySelector('.lesson-menu'), 'fadeSlideUp 1s');
        break;

      case 'lesson':
        document.querySelector('.active').classList.remove('active');
        document.querySelector(`li a[href="#${currentSection}"]`)?.classList.add('active');

        replayAnimation(document.querySelector('.cards-container'), 'fadeSlideUp 1s');
        replayAnimation(document.querySelector('.person-text h1'), 'fadeSlideright 1s');
        replayAnimation(document.querySelector('.person-text p'), 'fadeSlideleft 1s');
        break;

      case 'person':
        document.querySelector('.active').classList.remove('active');
        document.querySelector(`li a[href="#${currentSection}"]`)?.classList.add('active');

        break;

      case 'project':
        document.querySelector('.active').classList.remove('active');
        document.querySelector(`li a[href="#${currentSection}"]`)?.classList.add('active');

        break;
    }
  }
});


// PERSON
const students = [
  {
    nama: "Abdul Haris",
    kelas: "X MPLB 1",
    foto: "./Image/KDW-logo.png",
    wa: "https://wa.me/08123456789",
    ig: "https://instagram.com/abdulharis",
    github: "",
    myweb: ""
  },
  {
    nama: "Afifah Putri",
    kelas: "X MPLB 1",
    foto: "./Image/KDW-logo.png",
    wa: "https://wa.me/08987654321",
    ig: "https://instagram.com/afifahputri",
    github: "https://github.com/afifahputri",
    myweb: "Mantap"
  },
  {
    nama: "Ali Akbar",
    kelas: "X MPLB 1",
    foto: "./Image/KDW-logo.png",
    wa: "https://wa.me/08211234567",
    ig: "https://instagram.com/aliakbar",
    github: "https://github.com/aliakbar",
    myweb: ""
  },
  {
    nama: "Itaking",
    kelas: "X MPLB 1",
    foto: "./Image/KDW-logo.png",
    wa: "https://wa.me/08211234567",
    ig: "https://instagram.com/aliakbar",
    github: "https://github.com/aliakbar",
    myweb: ""
  },
  {
    nama: "Abdul Haris",
    kelas: "X MPLB 1",
    foto: "./Image/KDW-logo.png",
    wa: "https://wa.me/08123456789",
    ig: "https://instagram.com/abdulharis",
    github: "https://github.com/abdulharis",
    myweb: ""
  },
  {
    nama: "Afifah Putri",
    kelas: "X MPLB 1",
    foto: "./Image/KDW-logo.png",
    wa: "https://wa.me/08987654321",
    ig: "https://instagram.com/afifahputri",
    github: "https://github.com/afifahputri",
    myweb: ""
  },
  {
    nama: "Ali Akbar",
    kelas: "X MPLB 1",
    foto: "./Image/KDW-logo.png",
    wa: "https://wa.me/08211234567",
    ig: "https://instagram.com/aliakbar",
    github: "https://github.com/aliakbar",
    myweb: ""
  },
  {
    nama: "Itaking",
    kelas: "X MPLB 1",
    foto: "./Image/KDW-logo.png",
    wa: "https://wa.me/08211234567",
    ig: "https://instagram.com/aliakbar",
    github: "https://github.com/aliakbar",
    myweb: "mantap"
  }

];

const cardsContainer = document.getElementById("cardsContainer");
const searchInput = document.getElementById("searchInput");

//DOm card
function renderCards(data) {
  cardsContainer.innerHTML = "";
  data.forEach(student => {
    const card = document.createElement("div");
    card.classList.add("card");

    let socialsHTML = "";

    if (student.wa)
      socialsHTML += `
        <a href="${student.wa}" target="_blank" data-name="WhatsApp" class="wa">
          <i class="bi bi-whatsapp"></i><p>Whatsapp</p>
        </a>`;
    if (student.ig)
      socialsHTML += `
        <a href="${student.ig}" target="_blank" data-name="Instagram" class="ig">
          <i class="bi bi-instagram"></i><p>Instragram</p>
        </a>`;
    if (student.github)
      socialsHTML += `
        <a href="${student.github}" target="_blank" data-name="GitHub" class="gh">
          <i class="bi bi-github"></i><p>Github</p>
        </a>`;
    if (student.myweb)
      socialsHTML += `
        <a href="${student.myweb}" target="_blank" data-name="My-Web" class="mw">
          <i class="bi bi-person-fill"></i><p>My Web</p>
        </a>`;
    card.innerHTML = `
      <img src="${student.foto}" alt="${student.nama}">
      <h3>${student.nama}</h3>
      <p>${student.kelas}</p>
      <div class="socials">
        ${socialsHTML}
      </div>
    `;

    cardsContainer.appendChild(card);
  });
}

renderCards(students);

// Search
searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.toLowerCase();
  const filtered = students.filter(student => student.nama.toLowerCase().includes(searchText));
  renderCards(filtered);
});

// PROJECT
// Baris atas
const topProjects = [
  {
    title: "Website Portfolio",
    img: "./Project/project1.jpg",
    desc: "Website portfolio pribadi dengan animasi interaktif dan layout modern.",
    link: "https://contoh-portfolio.com"
  },
  {
    title: "Landing Page E-Commerce",
    img: "./Project/project2.jpg",
    desc: "Landing page toko online dengan desain responsif dan CTA kuat.",
    link: "https://contoh-store.com"
  },
  {
    title: "Dashboard Admin Panel",
    img: "./Project/project3.jpg",
    desc: "Dashboard interaktif berbasis data untuk memantau statistik penjualan.",
    link: "#"
  },
  {
    title: "Website Company Profile",
    img: "./Project/project4.jpg",
    desc: "Website company profile untuk memperkenalkan perusahaan dan layanan.",
    link: "#"
  },
];

// Baris bawah
const bottomProjects = [
  {
    title: "Aplikasi Mobile UI",
    img: "./Project/project5.jpg",
    desc: "Desain antarmuka aplikasi mobile menggunakan prinsip Material Design.",
    link: "#"
  },
  {
    title: "Portfolio Designer",
    img: "./Project/project6.jpg",
    desc: "Website portfolio kreatif untuk desainer grafis dan ilustrator.",
    link: "#"
  },
  {
    title: "Website Blog",
    img: "./Project/project7.jpg",
    desc: "Blog pribadi dengan sistem kategori dan mode gelap.",
    link: "#"
  },
  {
    title: "Sistem Absensi Sekolah",
    img: "./Image/Logo wd nobg.png",
    desc: "Aplikasi web absensi siswa dengan database MySQL dan tampilan admin.",
    link: "#",
    creator: "Abdul"
  },
];

// DOM 
function generateProjects(containerId, reverse = false, list) {
  const container = document.getElementById(containerId);
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project-container");
  projectContainer.style.setProperty("--quantity", list.length);

  list.forEach((p, i) => {
    const item = document.createElement("div");
    item.classList.add("project-items");
    item.style.setProperty("--position", i + 1);
    item.dataset.title = p.title;
    item.dataset.desc = p.desc;
    item.dataset.link = p.link;
    item.dataset.creator = p.creator;
    item.innerHTML = `<img src="${p.img}" alt="${p.title}">`;
    item.addEventListener("click", () => openPopup(p));
    projectContainer.appendChild(item);
  });

  container.appendChild(projectContainer);
}

// Popup
const popup = document.getElementById("projectPopup");
const popupImg = document.getElementById("popupImg");
const popupTitle = document.getElementById("popupTitle");
const popupDesc = document.getElementById("popupDesc");
const popupLink = document.getElementById("popupLink");
const popupcreator = document.getElementById("popupcreator");

const closeBtn = document.querySelector(".popup .close");

function openPopup(p) {
  popupImg.src = p.img;
  popupTitle.textContent = p.title;
  popupDesc.textContent = p.desc;
  popupLink.href = p.link;
  popupcreator.href = p.creator
  popup.style.display = "flex";
}

closeBtn.addEventListener("click", () => (popup.style.display = "none"));
popup.addEventListener("click", e => {
  if (e.target === popup) popup.style.display = "none";
});

// Run
generateProjects("projectTop", false, topProjects);
generateProjects("projectBottom", true, bottomProjects);

