//Faq functionality
console.log('hello')
const faqContainer = document.querySelectorAll(".individual_question_container");

faqContainer.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    })
});
