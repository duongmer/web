document.addEventListener("DOMContentLoaded", function () {
  console.log("Website đã tải thành công!");

  // sự kiện click nút Mua
  const buyButtons = document.querySelectorAll(".btn-success");
  buyButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      console.log("Đã click mua hàng");
    });
  });
});

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

//suwj kien form login voi regeiter
document.addEventListener("DOMContentLoaded", () => {
  const loginFormContainer = document.getElementById("login-form-container");
  const registerFormContainer = document.getElementById(
    "register-form-container"
  );
  //mwor form dang kys
  const showRegisterLink = document.getElementById("show-register");
  const showLoginLink = document.getElementById("show-login");
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  // const toggleForms = (showLogin) => {
  //   if (showLogin) {
  //     registerFormContainer.classList.remove("form-active");
  //     registerFormContainer.classList.add("form-hidden");
  //     setTimeout(() => {
  //       loginFormContainer.classList.remove("form-hidden");
  //       loginFormContainer.classList.add("form-active");
  //     }, 500);
  //   } else {
  //     loginFormContainer.classList.remove("form-active");
  //     loginFormContainer.classList.add("form-hidden");
  //     setTimeout(() => {
  //       registerFormContainer.classList.remove("form-hidden");
  //       registerFormContainer.classList.add("form-active");
  //     }, 500);
  //   }
  // };

  //suk ien
  showRegisterLink.addEventListener("click", (e) => {
    e.preventDefault();
    toggleForms(false);
  });

  showLoginLink.addEventListener("click", (e) => {
    e.preventDefault();
    toggleForms(true);
  });

  // loginForm.addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   const email = document.getElementById("loginEmail").value;
  //   const password = document.getElementById("loginPassword").value;
  //   console.log("Login attempt:", { email, password });
  //   alert(`Logged in with Email: ${email}`);
  // });

  //form dang ky

  // registerForm.addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   const name = document.getElementById("registerName").value;
  //   const email = document.getElementById("registerEmail").value;
  //   const password = document.getElementById("registerPassword").value;
  //   const confirmPassword = document.getElementById("confirmPassword").value;

  //   if (password !== confirmPassword) {
  //     alert("Mật khẩu không khớp!");
  //     return;
  //   }

  //   console.log("Registration attempt:", { name, email, password });
  //   alert(`Registered with Name: ${name}, Email: ${email}`);
  // });
});
