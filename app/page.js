'use client';
import {useState} from 'react'
import { Inter } from 'next/font/google'
import { resolve } from 'styled-jsx/css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Larrys />
    </div>
  )
}

const Larrys = () => {
  return (   
    <section id="hero-1619">
        <div class="cs-container">
            <div class="cs-content">
                <span class="cs-topper">
                    <svg class="cs-chevron" width="49" height="15" viewBox="0 0 49 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.7">
                        <path d="M0.621948 7.49889L6.40262 15L10.343 15L4.56231 7.49889L10.343 -4.2492e-07L6.40262 -2.52681e-07L0.621948 7.49889Z" fill="var(--chevronColor)"/>
                        <path d="M7.62195 7.49889L13.4026 15L17.343 15L11.5623 7.49889L17.343 -4.2492e-07L13.4026 -2.52681e-07L7.62195 7.49889Z" fill="var(--chevronColor)"/>
                        <path d="M14.7789 7.49889L20.5596 15L24.5 15L18.7193 7.49889L24.5 -4.2492e-07L20.5596 -2.52681e-07L14.7789 7.49889Z" fill="var(--chevronColor)"/>
                        <path d="M22.7789 7.49889L28.5596 15L32.5 15L26.7193 7.49889L32.5 -4.2492e-07L28.5596 -2.52681e-07L22.7789 7.49889Z" fill="var(--chevronColor)"/>
                        <path d="M30.7789 7.49889L36.5596 15L40.5 15L34.7193 7.49889L40.5 -4.2492e-07L36.5596 -2.52681e-07L30.7789 7.49889Z" fill="var(--chevronColor)"/>
                        <path d="M38.7789 7.49889L44.5596 15L48.5 15L42.7193 7.49889L48.5 -4.2492e-07L44.5596 -2.52681e-07L38.7789 7.49889Z" fill="var(--chevronColor)"/>
                        </g>
                    </svg>
                    Just-In-Time Training designed for your Tasks
                    <svg class="cs-chevron" width="49" height="15" viewBox="0 0 49 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.7">
                        <path d="M48.3781 7.49889L42.5974 15L38.657 15L44.4377 7.49889L38.657 -4.2492e-07L42.5974 -2.52681e-07L48.3781 7.49889Z" fill="var(--chevronColor)"/>
                        <path d="M41.3781 7.49889L35.5974 15L31.657 15L37.4377 7.49889L31.657 -4.2492e-07L35.5974 -2.52681e-07L41.3781 7.49889Z" fill="var(--chevronColor)"/>
                        <path d="M34.2211 7.49889L28.4404 15L24.5 15L30.2807 7.49889L24.5 -4.2492e-07L28.4404 -2.52681e-07L34.2211 7.49889Z" fill="var(--chevronColor)"/>
                        <path d="M26.2211 7.49889L20.4404 15L16.5 15L22.2807 7.49889L16.5 -4.2492e-07L20.4404 -2.52681e-07L26.2211 7.49889Z" fill="var(--chevronColor)"/>
                        <path d="M18.2211 7.49889L12.4404 15L8.50004 15L14.2807 7.49889L8.50004 -4.2492e-07L12.4404 -2.52681e-07L18.2211 7.49889Z" fill="var(--chevronColor)"/>
                        <path d="M10.2211 7.49889L4.4404 15L0.500041 15L6.28071 7.49889L0.500042 -4.2492e-07L4.4404 -2.52681e-07L10.2211 7.49889Z" fill="var(--chevronColor)"/>
                        </g>
                    </svg>
                </span>
                <h1 class="cs-title">Revolutionizing Your Workforce with AI-Powered Upskilling</h1>
                <a href="/math/register" class="cs-button-solid">Start Now</a>
            </div>
            <ul class="cs-card-group">
                <li class="cs-item">
                    <img class="cs-icon" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/check-circle.svg" alt="icon" width="48" height="48"></img>
                    <h3 class="cs-h3">Smart Learning, Smarter Working</h3>
                    <p class="cs-item-text">
                    Bobolink is a mentor and learning guide. We recommend learning resources that tailors free educational content to your knowledge levels and interests.
                    </p>
                </li>
                <li class="cs-item">
                    <img class="cs-icon" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/speedometer.svg" alt="icon" width="48" height="48"></img>
                    <h3 class="cs-h3">AI chatbot tutor</h3>
                    <p class="cs-item-text">
                    A chatbot tutor will be available to answer immediate clarifying questions while learners engage with educational content.
                    </p>
                </li>
                <li class="cs-item">
                    <img class="cs-icon" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/Like.svg" alt="icon" width="48" height="48"></img>
                    <h3 class="cs-h3">Adaptive Learning</h3>
                    <p class="cs-item-text">
                    Integrate seamlessly with your task managers, job systems, and Google Calendars. Our AI-driven platform learns what employees need and delivers relevant readings and videos exactly when they're needed.
                    </p>
                </li>
                <li class="cs-item">
                    <img class="cs-icon" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/Like.svg" alt="icon" width="48" height="48"></img>
                    <h3 class="cs-h3">Highly Recommend</h3>
                    <p class="cs-item-text">
                    Our system recommends targeted resources right before your meetings, accessible with a single click. Remember to recommend us if you enjoyed our service!
                    </p>
                </li>
            </ul>
        </div>
        <picture class="cs-background">
            <img decoding="async" src="https://cdn.discordapp.com/attachments/1116071450659536977/1211827915486928936/20160325173424-diversity-workplace-meeting-talking-teamwork.png?ex=65ef9db1&is=65dd28b1&hm=dcad44ac2e464aea96a66ad3b1256717ca6e6818ba3dc56aaf0a4d9581032b67&" alt="meeting" aria-hidden="true"></img>
        </picture>
    </section>                                                  
  )
}

