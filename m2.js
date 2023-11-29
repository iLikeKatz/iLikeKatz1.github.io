
// JavaScript
let currentPage = 1; // กำหนดข้อเริ่มต้น

// ฟังก์ชันสำหรับแสดงข้อ
function showPage(pageNumber) {
  const pages = document.querySelectorAll(".page");
  pages.forEach(page => {
    page.style.display = "none"; // ซ่อนทุกข้อ
  });
  document.getElementById(`page${pageNumber}`).style.display = "block"; // แสดงข้อที่เลือก
  
}

// ฟังก์ชันสำหรับไปยังข้อถัดไป
function goToNextPage() {
  currentPage++; // เพิ่มค่าข้อปัจจุบัน
  if (currentPage > 3) {
    currentPage = 1; // ถ้าเราอยู่ที่ข้อสุดท้ายให้กลับไปที่ข้อแรก
  }
  showPage(currentPage); // แสดงข้อใหม่

  if (currentPage==1) {
    document.body.style.background = 'darkred';
    let changebtor = document.querySelector('.yellowbutt')
    changebtor.setAttribute('class', 'nextButton')
  } else if (currentPage==2) {
    document.body.style.background = 'skyblue';
   let changertob = document.querySelector('.nextButton')
   changertob.setAttribute('class', 'bluebutt')
  }else if (currentPage==3) {
    document.body.style.background = 'plum';
    let changebtoy = document.querySelector('.bluebutt')
    changebtoy.setAttribute('class', 'yellowbutt')

  }
}

// เรียกใช้ฟังก์ชันแสดงข้อในครั้งแรก
showPage(currentPage);

// เพิ่มการตรวจสอบเมื่อคลิกที่ปุ่ม
document.getElementById("nextButton").addEventListener("click", goToNextPage);



function comr2() {
    let r2v = r2.value;
    let x = Math.sqrt(r2v);
    document.getElementById('ansr2').innerHTML = "The answer is" + " " + x;
}

function comr3() {
    let r3v = r3.value;
    let x = Math.cbrt(r3v)
    document.getElementById('ansr3').innerHTML = "The answer is" + " " + x;
}
function compytha1() {
    let hand1 = handofcorner1.value;
    let hand2 = handofcorner2.value;
    let ans1 = (hand1**2) + (hand2**2)
    document.getElementById("anspytha1").innerHTML = "The answer is" + " " +  ans1 + "^2" + " " + "=" + " " + Math.sqrt(ans1)
    handofcorner1.value = ""
    handofcorner2.value = ""
    
}

  function compytha2() {
    let hand1n90 = handbutnot901.value;
    let hand2n90 = handbutnot902.value;
    let ans2 = (hand1n90**2) - (hand2n90**2)
    document.getElementById("anspytha2").innerHTML = "The answer is" + " " +  ans2 + "^2" + " " + "=" + " " + Math.sqrt(ans2)
    handbutnot901.value = ""
    handbutnot902.value = ""
  }
  