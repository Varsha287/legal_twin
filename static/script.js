// =========================================
// LEGAL KNOWLEDGE TWIN
// script.js
// =========================================


// =========================
// Smooth Scroll
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// =========================
// Navbar Shadow
// =========================

window.addEventListener("scroll", ()=>{

    const navbar=document.querySelector(".navbar");

    if(window.scrollY>50){

        navbar.style.boxShadow="0 8px 25px rgba(0,0,0,0.18)";

    }

    else{

        navbar.style.boxShadow="none";

    }

});


// =========================
// Active Navbar Link
// =========================

const navLinks=document.querySelectorAll(".navbar ul li a");

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.forEach(item=>item.classList.remove("active"));

        link.classList.add("active");

    });

});


// =========================
// Fade In Sections
// =========================

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.2
});


const sections=document.querySelectorAll("section");

sections.forEach(section=>{

    section.style.opacity="0";

    section.style.transform="translateY(40px)";

    section.style.transition="0.8s";

    observer.observe(section);

});


// =========================
// Button Hover Effect
// =========================

const buttons=document.querySelectorAll(".primary-btn,.secondary-btn,.btn");

buttons.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-4px)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0px)";

    });

});


// =========================
// Hero Image Animation
// =========================

const heroImage=document.querySelector(".hero-image img");
s
if(heroImage){

    heroImage.addEventListener("mousemove",()=>{

        heroImage.style.transform="scale(1.03)";

    });

    heroImage.addEventListener("mouseleave",()=>{

        heroImage.style.transform="scale(1)";

    });

}


// =========================
// Console Message
// =========================

console.log("Legal Knowledge Twin Loaded Successfully.");