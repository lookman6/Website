function toggleDetails(id) {
    const details = document.getElementById(id);
    if (details.classList.contains('visible')) {
        details.classList.remove('visible');
    } else {
        details.classList.add('visible');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel-vertical');
    carousels.forEach(carousel => {
        let scrollInterval = setInterval(() => {
            if (carousel.scrollTop + carousel.clientHeight >= carousel.scrollHeight) {
                carousel.scrollTop = 0;
            } else {
                carousel.scrollTop += 1;
            }
        }, 30);
        carousel.addEventListener('mouseenter', () => clearInterval(scrollInterval));
        carousel.addEventListener('mouseleave', () => {
            scrollInterval = setInterval(() => {
                if (carousel.scrollTop + carousel.clientHeight >= carousel.scrollHeight) {
                    carousel.scrollTop = 0;
                } else {
                    carousel.scrollTop += 1;
                }
            }, 30);
        });
    });
});

const pathname=window.location.pathname;
const pagename=pathname.split("/").pop();
if(pagename === "index.html")
{
    //document.querySelector(".home").classList.add("mylink");
}

if(pagename === "about.html")
{
    //document.querySelector(".about").classList.add("mylink");
}

if(pagename === "portfolio.html")
{
    //document.querySelector("portfolio").classList.add("mylink");
}

if(pagename === "index.html")
{
    //document.querySelector(".contact").classList.add("mylink");
}
//

const width=window.screen.width;
if(width<=480){
    document.getElementById("logos").src="logo1.png";
}

function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_cgflhey";
    const templateID = "template_m6x3xzh";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }
  

  let navItems = document.querySelectorAll(".navItem");
      sidebar2 = document.querySelector(".sidebar2")
  navItems.forEach(item=>{
    item.addEventListener("click", ()=>{
         sidebar2.querySelector(".surbrillance").classList.remove("surbrillance");
         item.classList.add("surbrillance");

        })
    })