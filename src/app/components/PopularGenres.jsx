import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import GenresCard from "./GenresCard";

function PopularGenres() {
    const [currentIndex, setCurrentIndex] = useState(1);

    const genres = [
        { bg: "#DDB4B4", title: "Romance", images: ['genrescard1img1','genrescard1img2','genrescard1img3'] },
        { bg: "#B1B4BC", title: "Angst", images: ['genrescard2img1','genrescard2img2','genrescard2img3'] },
        { bg: "#CABD9A", title: "Humor", images: ['genrescard3img1','genrescard3img2','genrescard3img3'] },
        { bg: "#B0C5B2", title: "Adventure", images: ['genrescard4img1','genrescard4img2','genrescard4img3'] },
        { bg: "#E2C3A0", title: "Mystery", images: ['genrescard1img1','genrescard1img2','genrescard1img3'] },
        { bg: "#B8A1D9", title: "Fantasy", images: ['genrescard2img1','genrescard2img2','genrescard2img3'] },
        { bg: "#D7A1A1", title: "Drama", images: ['genrescard3img1','genrescard3img2','genrescard3img3'] },
        { bg: "#B9D8B1", title: "Slice of Life", images: ['genrescard4img1','genrescard4img2','genrescard4img3'] },
    ];

    return (
        <div className="popular">
            <div className="custom_container">
                <img src="/images/book.svg" alt="" className="book_img" />
                <h1 className="heading">Popular Genres</h1>
                <p className="para">Lorem ipsum dolor sit amet consectetur.</p>
                <div className="custom_pagination">
                        <button className="genres-prev">
                            <img src="/images/arrow_left.svg" alt="Prev" />
                        </button>
                        <span className="page_count">
                            {currentIndex} / {genres.length}
                        </span>
                        <button className="genres-next">
                            <img src="/images/arrow_right.svg" alt="Next" />
                        </button>
                    </div>
                <div className="genres_cards">
                    <div className="gradient_right"></div>
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={true}
                        navigation={{
                            prevEl: ".genres-prev",
                            nextEl: ".genres-next",
                        }}
                        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex + 1)}
                        onInit={(swiper) => setCurrentIndex(swiper.realIndex + 1)}
                        breakpoints={{
                            650: { 
                                slidesPerView: 2,
                                spaceBetween: 20,
                             },
                            1050: { 
                                slidesPerView: 3,
                                spaceBetween: 20,
                             },
                            1650: { 
                                slidesPerView: 4,
                                spaceBetween: 300,
                             },
                        }}
                        className="genres_swiper"
                    >
                        {genres.map((item, i) => (
                            <SwiperSlide key={i}>
                                <GenresCard
                                    bgColor={item.bg}
                                    title={item.title}
                                    images={item.images}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    
                </div>
            </div>
        </div>
    );
}

export default PopularGenres;
