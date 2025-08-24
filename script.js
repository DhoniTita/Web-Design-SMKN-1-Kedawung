// ABOUTCONTENT

let icon1 = document.getElementById("icon1");
let icon2 = document.getElementById("icon2");
let icon3 = document.getElementById("icon3");
let aboutText = document.querySelector("b");
let aboutParagraf = document.getElementById("about-paragraf");
let image1 = document.getElementById("image1")
let image2 = document.getElementById("image2")
let image3 = document.getElementById("image3")
let image4 = document.getElementById("image4")

icon1.addEventListener("click", function() {
    document.querySelector('#image1').classList.toggle('click')
    document.querySelector('#image2').classList.toggle('click')
    document.querySelector('#image3').classList.toggle('click')
    document.querySelector('#image4').classList.toggle('click')
    aboutText.innerHTML = "SMKN 1 Kedawung";
    aboutText.classList.remove("KDW","MCC","WD");
    aboutText.classList.add("KDW");
    aboutParagraf.innerHTML = 
    "Profil SMKN 1 Kedawung Cirebon Nama Sekolah: SMK Negeri 1 Kedawung Alamat: Jl. Ir. H. Juanda No. 91, Kedawung, Kabupaten Cirebon, Jawa Barat Website: https://smkn1kedawung.sch.id .SMKN 1 Kedawung adalah salah satu Sekolah Menengah Kejuruan (SMK) negeri favorit di Kabupaten Cirebon yang berfokus pada pendidikan vokasional. Sekolah ini bertujuan mencetak lulusan yang siap kerja, berdaya saing tinggi, dan mampu mengikuti perkembangan teknologi serta dunia industri.Visi:Menjadi sekolah kejuruan yang unggul dalam menghasilkan tenaga kerja profesional, berkarakter, dan kompetitif di tingkat nasional maupun internasional.Misi:- Meningkatkan mutu pendidikan dan pelatihan kejuruan, - Menjalin kerja sama dengan dunia usaha dan dunia industri (DUDI),- Membentuk lulusan yang disiplin, beretika, dan memiliki kompetensi sesuai jurusannya,- Mengembangkan kreativitas dan inovasi peserta didik melalui kegiatan intrakurikuler dan ekstrakurikuler, Prestasi SMKN 1 Kedawung dikenal aktif dalam lomba-lomba kejuruan seperti LKS (Lomba Kompetensi Siswa), lomba desain, lomba jaringan komputer, dan kegiatan kewirausahaan, baik tingkat kabupaten, provinsi, maupun nasional."
    image1.src = "./Image/Foto-kdw.png"; // Replace with actual image URL
    image2.src = "./Image/Foto-kdw-2.png"; // Replace with actual image URL
});
icon2.addEventListener("click", function() {
    document.querySelector('#image1').classList.toggle('click')
    document.querySelector('#image2').classList.toggle('click')
    document.querySelector('#image3').classList.toggle('click')
    document.querySelector('#image4').classList.toggle('click')
    aboutText.innerHTML = "MCC";
    aboutText.classList.remove("KDW","MCC","WD");
    aboutText.classList.add("MCC");
    aboutParagraf.innerHTML = "Multimedia Creative Club (MCC) adalah sebuah komunitas antar sesama siswa yang berfokus pada pengembangan kreativitas dan skils di bidang multimedia,MCC memiliki beberapa divisi seperti desain grafis, fotografi, boardcasting, animasi, dan web design. Komunitas ini bertujuan untuk memberikan wadah bagi para siswa untuk belajar, berkolaborasi, dan berbagi pengetahuan serta pengalaman dalam industri multimedia. walaupun sudah berganti nama jurusan ke Desain Komunikasi Visual (DKV), MCC tetap menjadi komunitas yang aktif dan berperan penting dalam mengembangkan potensi siswa di bidang multimedia. Dengan adanya MCC, siswa dapat meningkatkan keterampilan mereka, memperluas jaringan, dan mempersiapkan diri untuk karir di industri kreatif.";
    image1.src = "./Image/Progaming.png"; // Replace with actual image URL
    image2.src = "./Image/Progaming.png"; // Replace with actual image URL
});
icon3.addEventListener("click", function() {
    document.querySelector('#image1').classList.toggle('click')
    document.querySelector('#image2').classList.toggle('click')
    document.querySelector('#image3').classList.toggle('click')
    document.querySelector('#image4').classList.toggle('click')
    aboutText.innerHTML = "Web Design";
    aboutText.classList.remove("KDW","MCC","WD");
    aboutText.classList.add("WD");
    aboutParagraf.innerHTML = "Web design adalah salah satu divisi di dalam Multimedia Creative Club (MCC) yang berfokus pada pembuatan dan pengembangan situs web. Divisi ini bertujuan untuk memberikan pemahaman mendalam tentang desain antarmuka pengguna (UI), pengalaman pengguna (UX), serta pengembangan front-end dan back-end. Siswa yang terlibat dalam divisi web design akan belajar tentang HTML, CSS, JavaScript, dan berbagai framework serta alat yang digunakan dalam industri web saat ini. Dengan keterampilan ini, siswa dapat menciptakan situs web yang menarik, responsif, dan fungsional.";
    image1.src = "./Image/Progaming.png"; // Replace with actual image URL
    image2.src = "./Image/Progaming.png"; // Replace with actual image URL
});

function show_img() {
    let imgHolder = document.querySelector('.img-holder');
    imgHolder.classList.toggle('none');
    if (imgHolder.classList.contains('none')) {
        document.getElementById("ImgShow").innerText = "Lihat Foto";
    } else {
        document.getElementById("ImgShow").innerText = "Sembunyikan Foto";
    }
}

const home = document.querySelector('.home');
const about = document.querySelector('.about');
const lesson = document.querySelector('.lesson');
const person = document.querySelector('.person');
const project = document.querySelector('.project');

main = document.querySelector('main');
main.addEventListener('scroll', () => {

    if(main.scrollTop < 746.4000244140625){
        document.querySelector('.active').classList.remove('active')
        home.classList.add('active')
    }
    else if(main.scrollTop < 1492.800048828125){
        document.querySelector('.active').classList.remove('active')
        about.classList.add('active')
    }
    else if(main.scrollTop < 2239.199951171875){
        document.querySelector('.active').classList.remove('active')
        lesson.classList.add('active')
    }
    else if(main.scrollTop < 2985.60009765625){
        document.querySelector('.active').classList.remove('active')
        person.classList.add('active')
    }
    else{
        document.querySelector('.active').classList.remove('active')
        project.classList.add('active')
    }
})