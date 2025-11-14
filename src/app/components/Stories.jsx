import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import UpdatesCard from "./UpdatesCard";
import StoryCard from "./StoryCard";

function Stories() {
    const [currentIndex, setCurrentIndex] = useState(1);

    const stories = [
        {
            tags: ["Action", "Adventure"],
            likes: 120,
            dislikes: 10,
            name: "Mob Psycho 100: Reborn",
            para: "Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.",
            img: "story_img1",
            rating: 4.5,
            chapters: 12,
            words: 45000,
            lastUPD: "Nov 10",
            author: "John Doe",
        },
        {
            tags: ["Action", "Adventure"],
            likes: 120,
            dislikes: 10,
            name: "BERSERK — THE BLACK SWORDSMAN ",
            para: "Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.",
            img: "story_img1",
            rating: 4.5,
            chapters: 12,
            words: 45000,
            lastUPD: "Nov 10",
            author: "John Doe",
        },
        {
            tags: ["Action", "Adventure"],
            likes: 120,
            dislikes: 10,
            name: "Tokyo Ghoul — Lost City",
            para: "Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.",
            img: "story_img1",
            rating: 4.5,
            chapters: 12,
            words: 45000,
            lastUPD: "Nov 10",
            author: "John Doe",
        },
        {
            tags: ["Action", "Adventure"],
            likes: 120,
            dislikes: 10,
            name: "Fullmetal Alchemist: Resurgence",
            para: "Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.",
            img: "story_img1",
            rating: 4.5,
            chapters: 12,
            words: 45000,
            lastUPD: "Nov 10",
            author: "John Doe",
        },
        {
            tags: ["Action", "Adventure"],
            likes: 120,
            dislikes: 10,
            name: "Vinland Saga — The Journey North",
            para: "Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.",
            img: "story_img1",
            rating: 4.5,
            chapters: 12,
            words: 45000,
            lastUPD: "Nov 10",
            author: "John Doe",
        },
        {
            tags: ["Action", "Adventure"],
            likes: 120,
            dislikes: 10,
            name: "Grand Blue",
            para: "Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.",
            img: "story_img1",
            rating: 4.5,
            chapters: 12,
            words: 45000,
            lastUPD: "Nov 10",
            author: "John Doe",
        },
        {
            tags: ["Action", "Adventure"],
            likes: 120,
            dislikes: 10,
            name: "Grand Blue",
            para: "Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.",
            img: "story_img1",
            rating: 4.5,
            chapters: 12,
            words: 45000,
            lastUPD: "Nov 10",
            author: "John Doe",
        },
        {
            tags: ["Action", "Adventure"],
            likes: 120,
            dislikes: 10,
            name: "Grand Blue",
            para: "Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.",
            img: "story_img1",
            rating: 4.5,
            chapters: 12,
            words: 45000,
            lastUPD: "Nov 10",
            author: "John Doe",
        },
        {
            tags: ["Action", "Adventure"],
            likes: 120,
            dislikes: 10,
            name: "Grand Blue",
            para: "Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.",
            img: "story_img1",
            rating: 4.5,
            chapters: 12,
            words: 45000,
            lastUPD: "Nov 10",
            author: "John Doe",
        },
        {
            tags: ["Action", "Adventure"],
            likes: 120,
            dislikes: 10,
            name: "Story 2",
            para: "Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.",
            img: "story_img1",
            rating: 4.3,
            chapters: 10,
            words: 40000,
            lastUPD: "Nov 8",
            author: "Jane Doe",
        },
        {
            tags: ["Action", "Adventure"],
            likes: 120,
            dislikes: 10,
            name: "Story 1",
            para: "Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.",
            img: "story_img1",
            rating: 4.5,
            chapters: 12,
            words: 45000,
            lastUPD: "Nov 10",
            author: "John Doe",
        },
        {
            tags: ["Action", "Adventure"],
            likes: 120,
            dislikes: 10,
            name: "Story 2",
            para: "Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.Lorem ipsum dolor sit amet consectetur. Tellus sed suspendisse vulputate sit dui ut malesuada eget. Aliquam aenean potenti sed quis.",
            img: "story_img1",
            rating: 4.3,
            chapters: 10,
            words: 40000,
            lastUPD: "Nov 8",
            author: "Jane Doe",
        },


    ];

    const groupedStories = [];
    for (let i = 0; i < stories.length; i += 3) {
        groupedStories.push(stories.slice(i, i + 3));
    }

    return (
        <div className="stories">
            <div className="custom_container">
                <h1 className="heading">Latest Stories</h1>
                <p className="para">Lorem ipsum dolor sit amet consectetur.</p>

                <div className="story_cards">
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={1}
                        loop={true}
                        spaceBetween={10}
                        navigation={{
                            prevEl: ".stories-prev",
                            nextEl: ".stories-next",
                        }}
                        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex + 1)}
                        onInit={(swiper) => setCurrentIndex(swiper.realIndex + 1)}
                        className="stories_swiper"
                        breakpoints={{
                            850: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1050: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            1250: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        {groupedStories.map((group, i) => (
                            <SwiperSlide key={i}>
                                <div
                                    className="stories_card_wrapper"
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "20px",
                                    }}
                                >
                                    {group.map((item, j) => (
                                        <StoryCard
                                            key={j}
                                            tags={item.tags}
                                            likes={item.likes}
                                            dislikes={item.dislikes}
                                            name={item.name}
                                            para={item.para}
                                            img={item.img}
                                            rating={item.rating}
                                            chapters={item.chapters}
                                            words={item.words}
                                            lastUPD={item.lastUPD}
                                            author={item.author}
                                        />
                                    ))}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="custom_pagination">
                        <button className="stories-prev">
                            <img src="/images/arrow_left.svg" alt="Prev" />
                        </button>
                        <span className="page_count">
                            {currentIndex} / {groupedStories.length}
                        </span>
                        <button className="stories-next">
                            <img src="/images/arrow_right.svg" alt="Next" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stories;
