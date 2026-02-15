import logo from '../assets/logo.png'
import me from '../assets/me.jpeg'
import qrCode from '../assets/qr-code.png'
import foodDeliveryApp from '../assets/food-del-app.png'
import fitnessApp from '../assets/fitness-app.png'
import aiAgent from '../assets/aiagent.png'
import bookFair from '../assets/bookfair.png'
import resume from '../assets/Hasani Madhumali-Resume.pdf'


export const assets = {
    logo,
    me,
    qrCode,
    resume
}

export const projectsList = [
  {
    id: 1,
    title: "Food Delivery App",
    description:
      "A food delivery application built with React, allowing users to  view menus, and place orders for delivery or pickup.",
    image: foodDeliveryApp,
    technologies: [
      "MERN Stack",
      "JavaScript",
      "REST API",
      "JWT Authentication",
    ],
    demo: "https://yummy-food-delivery-app-frontend.vercel.app",
  },
  {
    id: 2,
    title: "Fitness App",
    description:
      "A fitness tracking application developed using React, enabling users to monitor their workouts, set fitness goals, and track their progress over time.",
    image: fitnessApp,
    technologies: ["React", "TypeScript", "Strapi"],
    demo: "https://fitness-tracker-eight-azure.vercel.app",
  },
  {
    id: 3,
    title: "AI Agent for Personalized Learning",
    description:
      "An AI-powered learning assistant that personalizes educational content and adapts to each student's learning pace and preferences.",
    image: aiAgent,
    technologies: ["Python", "Streamlit", "PostgreSQL", "AI Models"],
    demo: "https://example.com/ai-agent-demo",
    gitHub: "https://github.com/example/ai-agent-personalized-learning",
  },
  {
    id: 4,
    title: "Bookfair Stall Reservation System",
    description:
      "A web application for managing reservations at bookfair stalls, allowing users to browse available stalls, make reservations, and manage their bookings.",
    image: bookFair,
    technologies: [
      "React",
      "TypeScript",
      "REST API",
      "JWT Authentication",
      "SQL",
    ],
    demo: "https://example.com/bookfair-stall-reservation-demo",
    gitHub: "https://github.com/example/bookfair-stall-reservation",
  },
];