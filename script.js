const loginBox = document.getElementById("login-box");
const registerBox = document.getElementById("register-box");

document.getElementById("show-register").onclick = function (e) {
  e.preventDefault();
  loginBox.classList.add("form-hidden");
  registerBox.classList.remove("form-hidden");
};

document.getElementById("show-login").onclick = function (e) {
  e.preventDefault();
  registerBox.classList.add("form-hidden");
  loginBox.classList.remove("form-hidden");
};

// Login → chuyển trang
document.getElementById("login-form").onsubmit = function (e) {
  e.preventDefault();
  window.location.href = "./index.html";
};

//chueyrn đỏi ânhr
function changeImage(element) {
  document
    .querySelectorAll(".product-thumb")
    .forEach((el) => el.classList.remove("active"));
  element.classList.add("active");
  // Change main image src
  document.getElementById("mainImage").src = element.src.replace(
    "200x150",
    "800x500"
  );
}

const categories = [
  "Web quần áo",
  "Web cà phê",
  "Web thiết bị số",
  "Web làm đẹp",
  "Web hoa quả",
  "Web giày dép",
  "Web máy tính",
];

const products = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  title: "Website tin tức",
  image: `https://picsum.photos/400/300?random=${i + 15}`,
}));

// Render Categories
const catContainer = document.getElementById("category-filters");
categories.forEach((cat, idx) => {
  const div = document.createElement("div");
  div.className = "form-check mb-1";
  div.innerHTML = `
        <input class="form-check-input" type="checkbox" id="cat${idx}">
        <label class="form-check-label text-secondary small cursor-pointer" for="cat${idx}">${cat}</label>
    `;
  catContainer.appendChild(div);
});

// Render Ratings Filter
const ratingContainer = document.getElementById("rating-filters");
[5, 4, 3, 2].forEach((rating) => {
  const div = document.createElement("div");
  div.className = "form-check mb-1 d-flex align-items-center gap-2";

  let starsHtml = "";
  for (let i = 0; i < 5; i++) {
    const colorClass =
      i < rating ? "text-yellow-400" : "text-secondary opacity-25";
    starsHtml += `<i class="bi bi-star-fill small ${colorClass}" style="font-size: 0.8rem;"></i>`;
  }

  div.innerHTML = `
        <input class="form-check-input mt-0" type="checkbox" id="rate${rating}">
        <label class="form-check-label d-flex gap-1" for="rate${rating}">
            ${starsHtml}
        </label>
    `;
  ratingContainer.appendChild(div);
});

AOS.init({ duration: 1000, once: false, mirror: true });

// 2. Màn hình chờ
window.onload = () => {
  document.getElementById("loader").style.display = "none";
};

// 3. Con trỏ chuột tùy chỉnh
const dot = document.getElementById("cursor-dot");
const outline = document.getElementById("cursor-outline");
window.addEventListener("mousemove", (e) => {
  dot.style.left = e.clientX + "px";
  dot.style.top = e.clientY + "px";
  outline.animate(
    { left: e.clientX + "px", top: e.clientY + "px" },
    { duration: 500, fill: "forwards" }
  );
});

// 4. Thanh tiến trình cuộn
window.onscroll = () => {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("scroll-bar").style.width = scrolled + "%";
};

// 5. Hiệu ứng Typewriter đơn giản
const words = ["Website", "Landing Page", "Mobile App", "Thương Hiệu"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
function type() {
  currentWord = words[i];
  if (isDeleting) {
    document.getElementById("typewriter").textContent = currentWord.substring(
      0,
      j - 1
    );
    j--;
    if (j == 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
  } else {
    document.getElementById("typewriter").textContent = currentWord.substring(
      0,
      j + 1
    );
    j++;
    if (j == currentWord.length) {
      isDeleting = true;
      setTimeout(type, 2000);
      return;
    }
  }
  setTimeout(type, isDeleting ? 100 : 200);
}
type();

//phaanf aboutt
// Thay đổi Navbar khi Scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("shadow-sm");
    navbar.style.padding = "10px 0";
  } else {
    navbar.classList.remove("shadow-sm");
    navbar.style.padding = "20px 0";
  }
});

// phaanf PHorduct

function changeImage(element) {
  // Lấy ID mainImage
  const mainImg = document.getElementById("mainImage");
  mainImg.src = element.src;

  mainImg.style.opacity = "0";
  setTimeout(() => {
    mainImg.style.opacity = "1";
  }, 50);

  document.querySelectorAll(".product-thumb").forEach((thumb) => {
    thumb.classList.remove("active");
  });
  element.classList.add("active");
}

//  Scroll Navbar
window.onscroll = function () {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.classList.add("bg-white", "shadow");
  } else {
    nav.classList.remove("shadow");
  }
};
