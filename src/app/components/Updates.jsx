import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import UpdatesCard from "./UpdatesCard";

function Updates() {
    const [currentIndex, setCurrentIndex] = useState(1);

    const updates = [
        { img: "updates_card_img1", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img2", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img3", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img4", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img1", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img2", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img3", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img4", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img1", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img2", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img3", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img4", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img1", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img2", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img3", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img4", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img1", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img2", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img3", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img4", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img1", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img2", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img3", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img4", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img1", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img2", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img3", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img4", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img1", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img2", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img3", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img4", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img1", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img2", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img3", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img4", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img1", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img2", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img3", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img4", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img1", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img2", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img3", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img4", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img1", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img2", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img3", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
        { img: "updates_card_img4", name: "Lorem ipsum dolor sit amet consectetur. Ornare id dictumst vel egestas. Amet odio enim etiam fermentum.", chapters: "364", updated: "12 hours ago" },
    ];

    // 👇 Group updates into chunks of 4
    const groupedUpdates = [];
    for (let i = 0; i < updates.length; i += 4) {
        groupedUpdates.push(updates.slice(i, i + 4));
    }

    return (
        <div className="updates">
            <div className="custom_container">
                <img src="/images/paper.svg" alt="" className="paper_img" />
                <h1 className="heading">Last Updates</h1>
                <p className="para">Lorem ipsum dolor sit amet consectetur.</p>

                <div className="update_cards">
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={true}
                        navigation={{
                            prevEl: ".update-prev",
                            nextEl: ".update-next",
                        }}
                        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex + 1)}
                        onInit={(swiper) => setCurrentIndex(swiper.realIndex + 1)}
                        className="updates_swiper"
                        breakpoints={{
                            650: { 
                                slidesPerView: 2,
                                spaceBetween: 12,
                             },
                            1050: { 
                                slidesPerView: 3,
                                spaceBetween: 12,
                             },
                            1250: { 
                                slidesPerView: 3,
                                spaceBetween: 20,
                             },
                            1450: { 
                                slidesPerView: 4,
                                spaceBetween: 20,
                             },
                        }}
                    >
                        {groupedUpdates.map((group, i) => (
                            <SwiperSlide key={i}>
                                <div className="updates_card_wrapper">
                                    {group.map((item, j) => (
                                        <UpdatesCard
                                            key={j}
                                            img={item.img}
                                            name={item.name}
                                            chapters={item.chapters}
                                            updated={item.updated}
                                        />
                                    ))}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="custom_pagination">
                        <button className="update-prev">
                            <img src="/images/arrow_left.svg" alt="Prev" />
                        </button>
                        <span className="page_count">
                            {currentIndex} / {groupedUpdates.length}
                        </span>
                        <button className="update-next">
                            <img src="/images/arrow_right.svg" alt="Next" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Updates;
