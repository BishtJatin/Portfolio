import React from 'react';
import { TiArrowRightOutline } from "react-icons/ti";
import Card from './Card';


const Projects = () => {
   
    const data = [
        {
          "image":"https://github.com/user-attachments/assets/8fa54f4e-2530-4370-b80f-25014adc8c34",
          "name": "StudyNotion",
          "description": "A full-stack EdTech application that enables users to access and manage online courses",
          "socialLinks": {
            "github": "https://github.com/BishtJatin/StudyNotion",
            "live": "https://study-notion-frontend-psi-three.vercel.app/"
          }
        },
        {
          "image": "https://private-user-images.githubusercontent.com/109663578/344579879-a796a42c-e5c5-4bc4-bba6-f165418ce7d4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjQ3NjMzODksIm5iZiI6MTcyNDc2MzA4OSwicGF0aCI6Ii8xMDk2NjM1NzgvMzQ0NTc5ODc5LWE3OTZhNDJjLWU1YzUtNGJjNC1iYmE2LWYxNjU0MThjZTdkNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwODI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDgyN1QxMjUxMjlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hOTFhNjE4NmUzY2ZjNTcxNDBiNTFiMmVjOGE5YWUwZTNiZmJmOTgwYmI1YWZkYjIzOWRiZmQ3OTMzNzVlMjFjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.gSigXIIHwBhdsZgWPH-Wr9hRA7z4nk3taLbH5PQbGuU",
          "name": "Netflix-Gpt",
          "description": "This project allows users to search for movies, get movie suggestions",
          "socialLinks": {
            "github": "https://github.com/BishtJatin/Netflix-Gpt",
            "live": "netflix-gpt-pi-sand.vercel.app"
          }
        },
        {
          "image": "https://github.com/user-attachments/assets/30337fb2-1c11-43ab-9594-725659880722",
          "name": "Youtubeclone",
          "description": "A fully responsive YouTube clone built with React, offering video streaming, intuitive browsing.",
          "socialLinks": {
            "github": "https://github.com/BishtJatin/Youtubeclone",
            "live": "https://github.com/BishtJatin/Youtubeclone"
          }
        },
        {
          "image": "https://github.com/user-attachments/assets/e692b783-de58-46ff-a028-f4088286dfcf",
          "name": "Mclarenwebsite",
          "description": "McLaren Sports Car Website Landing Page. The page features a dynamic video background.",
          "socialLinks": {
            "github": "https://github.com/username/project-four",
            "live": "https://supercarmclaren.netlify.app/"
          }
        }
    ];
      
    return (
        <div className="mt-12 md:mt-16  w-full px-5">
            <div className="text-gray-400 text-2xl md:text-3xl font-bold flex group mb-8">
                <p>Projects</p>
                <span className="ml-2 mt-1 group-hover:text-[#FF5252]">
                    <TiArrowRightOutline />
                </span>
            </div>

            <div className="grid grid-cols-1 ml-8 sm:grid-cols-2 gap-8">
                {data.map(card => (
                    <Card
                        key={card.name} // Unique key prop for React
                        image={card.image}
                        name={card.name}
                        description={card.description}
                        socialLinks={card.socialLinks}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;
