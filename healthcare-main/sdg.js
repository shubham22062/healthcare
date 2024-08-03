

// script.js

document.addEventListener("DOMContentLoaded", function() {
    const slides = [
        "img/doctors-image.jpg",
         "img/physicalHealth.jpg",
        "https://www.nikkistalk.co.in/wp-content/uploads/2024/02/Orange-Brown-Colorful-Fashion-Business-Blog-Banner-2.jpg",
        "https://yoga.ayush.gov.in/public/assets/front/blog/eys.jpg"
    ];


    let currentSlide = 0;
    const sliderImage = document.getElementById("sliderImage");
    sliderImage.src = slides[currentSlide];

    // Change slide every 6 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        sliderImage.src = slides[currentSlide];
    }, 6000);

    // Mock data for news articles
    const newsData = [
        {
            date: "July 27, 2024",
            news: "New Study Reveals the Benefits of Morning Exercise"
        },
        {
            date: "July 25, 2024",
            news: "10 Superfoods to Boost Your Immune System"
        },
        {
            date: "July 22, 2024",
            news: "The Importance of Mental Health in the Workplace"
        },
        {
            date: "July 20, 2024",
            news: "How to Create a Balanced Diet Plan for Weight Loss"
        },
        {
            date: "July 18, 2024",
            news: "Meditation Techniques for Reducing Stress and Anxiety"
        },
        {
            date: "July 15, 2024",
            news: "Understanding the Impact of Sleep on Overall Health"
        }
    ];

    // Populate news articles
    const newsContainer = document.getElementById("newsContainer");
    newsData.forEach(item => {
        const newsItem = document.createElement("div");
        newsItem.className = "innerright";
        newsItem.innerHTML = `
            <p class="date">${item.date}</p>
            <p class="news">${item.news}</p>
        `;
        newsContainer.appendChild(newsItem);
    });
});
