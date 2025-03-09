// menubar functionality for small device
function menuToggle() {
    document.getElementById('mobileMenu').classList.toggle('mobileActive');
}


// Who is it for section ==> image change functionality for each tab
function changeImage (imageType) {
    let image = document.getElementById('toggleImage');
    let tab1 = document.getElementById('tab1');
    let tab2 = document.getElementById('tab2');
    let tab3 = document.getElementById('tab3');

    if(imageType == 'interdum'){
        image.src = "./Assets/Frame (1).png";
        tab2.classList.remove("special_description");
        tab3.classList.remove("special_description");
        
    }
    else if(imageType == 'laoreet'){
        image.src = "./Assets/edited MockUp (1).png";
        tab2.classList.add("special_description");
        tab1.classList.remove("special_description");
        tab3.classList.remove("special_description");
        
    }
    else if(imageType == 'ligula'){
        image.src = "./Assets/edited MockUp (2).png";
        tab3.classList.add("special_description");
        tab1.classList.remove("special_description");
        tab2.classList.remove("special_description");
    }

    // tabs.forEach(tab => tab.classList.add("special_description"));
    
}

// Load more functionality on mobile device
function loadMore() {
    let reviewDiv = document.querySelectorAll('.common_width');

    reviewDiv.forEach(review => {
        review.classList.add('visible');
    });

    document.getElementById("load_btn").style.display = "none";
}

//Faq functionality
const faqContainer = document.querySelectorAll(".individual_question_container");

faqContainer.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    })
});
