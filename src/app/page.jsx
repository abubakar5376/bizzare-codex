"use client";
import React, { useState } from "react";
import TabCard from "./components/TabCard";
import TabDetail from "./components/TabDetail";
import Collection from "./components/Collection";
import Creators from "./components/Creators";
import PopularGenres from "./components/PopularGenres";
import Welcome from "./components/Welcome";
import Updates from "./components/Updates";
import Stories from "./components/Stories";

export default function Page() {
  const tabs = [
    {
      name: "Berserk — the black swordsman",
      img: 'tabimg1',
      likes: "5,2K",
      dislikes: "1,2K",
      views: "5M",
      plus: true,
      rating: "18+",
      vols: "43",
      chapters: "364",
      awards: "5",
      tags: [
        {
          color: '#F3E8DB',
          bgColor: '#D71F1F',
          tag: 'Extreme Violence',
        },
        {
          color: '#F3E8DB',
          bgColor: '#D71F1F',
          tag: 'Torture',
        },
        {
          color: '#F3E8DB',
          bgColor: '#29121C',
          tag: 'Nudity',
        },
        {
          color: '#F3E8DB',
          bgColor: '#29121C',
          tag: 'Sexual Assault (Mentioned)',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Dark Fantasy',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Medieval',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Demons',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Revenge',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Tragedy',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'War',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Madness',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Blood',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Betrayal',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Survival',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Psychological Horror',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Cursed Mark',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Nightmare',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Armor',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Mercenary',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Destiny',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Fate',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Sacrifice',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Religion',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: '+12',
        },
      ],
      para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores aliquid quam quibusdam illo, soluta incidunt, consectetur voluptate facilis voluptatibus id repellat similique laboriosam earum iusto, eius labore est atque voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nostrum nemo excepturi voluptas quos modi vel enim culpa, sequi earum voluptatibus debitis quia accusantium aut architecto rem at corporis expedita?",
      autorName: "Miura Kentaro",
      releaseDate: "12.11.1990",
      lastDate: "12.11.2025",
    },
    {
      name: "Made in Abyss",
      likes: "1.3K",
      img: 'tabimg2',
      dislikes: "122",
      views: "850K",
      plus: true,
      rating: "PG-13",
      vols: "12",
      chapters: "130",
      awards: "2",
            tags: [
        {
          color: '#F3E8DB',
          bgColor: '#D71F1F',
          tag: 'Extreme Violence',
        },
        {
          color: '#F3E8DB',
          bgColor: '#D71F1F',
          tag: 'Torture',
        },
        {
          color: '#F3E8DB',
          bgColor: '#29121C',
          tag: 'Nudity',
        },
        {
          color: '#F3E8DB',
          bgColor: '#29121C',
          tag: 'Sexual Assault (Mentioned)',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Dark Fantasy',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Medieval',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Demons',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Revenge',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Tragedy',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'War',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Madness',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Blood',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Betrayal',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Survival',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Psychological Horror',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Cursed Mark',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Nightmare',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Armor',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Mercenary',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Destiny',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Fate',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Sacrifice',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Religion',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: '+12',
        },
      ],
      para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores aliquid quam quibusdam illo, soluta incidunt, consectetur voluptate facilis voluptatibus id repellat similique laboriosam earum iusto, eius labore est atque voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nostrum nemo excepturi voluptas quos modi vel enim culpa, sequi earum voluptatibus debitis quia accusantium aut architecto rem at corporis expedita?",
      autorName: "Akihito Tsukushi",
      releaseDate: "20.07.2017",
      lastDate: "11.11.2025",
    },
    {
      name: "Grand Blue",
      likes: "1.2K",
      img: 'tabimg3',
      dislikes: "12",
      views: "1.2M",
      plus: false,
      rating: "PG-13",
      vols: "12",
      chapters: "130",
      awards: "2",
            tags: [
        {
          color: '#F3E8DB',
          bgColor: '#D71F1F',
          tag: 'Extreme Violence',
        },
        {
          color: '#F3E8DB',
          bgColor: '#D71F1F',
          tag: 'Torture',
        },
        {
          color: '#F3E8DB',
          bgColor: '#29121C',
          tag: 'Nudity',
        },
        {
          color: '#F3E8DB',
          bgColor: '#29121C',
          tag: 'Sexual Assault (Mentioned)',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Dark Fantasy',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Medieval',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Demons',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Revenge',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Tragedy',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'War',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Madness',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Blood',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Betrayal',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Survival',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Psychological Horror',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Cursed Mark',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Nightmare',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Armor',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Mercenary',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Destiny',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Fate',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Sacrifice',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Religion',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: '+12',
        },
      ],
      para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores aliquid quam quibusdam illo, soluta incidunt, consectetur voluptate facilis voluptatibus id repellat similique laboriosam earum iusto, eius labore est atque voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nostrum nemo excepturi voluptas quos modi vel enim culpa, sequi earum voluptatibus debitis quia accusantium aut architecto rem at corporis expedita?",
      autorName: "Akihito Tsukushi",
      releaseDate: "20.07.2017",
      lastDate: "11.11.2025",
    },
    {
      name: "Attack on Titan — The Fall of Walls",
      likes: "3.4K",
      img: 'tabimg4',
      dislikes: "220",
      views: "2.1M",
      plus: true,
      rating: "PG-13",
      vols: "12",
      chapters: "130",
      awards: "2",
            tags: [
        {
          color: '#F3E8DB',
          bgColor: '#D71F1F',
          tag: 'Extreme Violence',
        },
        {
          color: '#F3E8DB',
          bgColor: '#D71F1F',
          tag: 'Torture',
        },
        {
          color: '#F3E8DB',
          bgColor: '#29121C',
          tag: 'Nudity',
        },
        {
          color: '#F3E8DB',
          bgColor: '#29121C',
          tag: 'Sexual Assault (Mentioned)',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Dark Fantasy',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Medieval',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Demons',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Revenge',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Tragedy',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'War',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Madness',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Blood',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Betrayal',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Survival',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Psychological Horror',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Cursed Mark',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Nightmare',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Armor',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Mercenary',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Destiny',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Fate',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Sacrifice',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Religion',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: '+12',
        },
      ],
      para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores aliquid quam quibusdam illo, soluta incidunt, consectetur voluptate facilis voluptatibus id repellat similique laboriosam earum iusto, eius labore est atque voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nostrum nemo excepturi voluptas quos modi vel enim culpa, sequi earum voluptatibus debitis quia accusantium aut architecto rem at corporis expedita?",
      autorName: "Akihito Tsukushi",
      releaseDate: "20.07.2017",
      lastDate: "11.11.2025",
    },
    {
      name: "Mob Psycho 100: Reborn",
      likes: "2.1K",
      img: 'tabimg5',
      dislikes: "1,1.6M",
      views: "850K",
      plus: false,
      rating: "PG-13",
      vols: "12",
      chapters: "130",
      awards: "2",
            tags: [
        {
          color: '#F3E8DB',
          bgColor: '#D71F1F',
          tag: 'Extreme Violence',
        },
        {
          color: '#F3E8DB',
          bgColor: '#D71F1F',
          tag: 'Torture',
        },
        {
          color: '#F3E8DB',
          bgColor: '#29121C',
          tag: 'Nudity',
        },
        {
          color: '#F3E8DB',
          bgColor: '#29121C',
          tag: 'Sexual Assault (Mentioned)',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Dark Fantasy',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Medieval',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Demons',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Revenge',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Tragedy',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'War',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Madness',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Blood',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Betrayal',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Survival',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Psychological Horror',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Cursed Mark',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Nightmare',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Armor',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Mercenary',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Destiny',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Fate',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Sacrifice',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Religion',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: '+12',
        },
      ],
      para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores aliquid quam quibusdam illo, soluta incidunt, consectetur voluptate facilis voluptatibus id repellat similique laboriosam earum iusto, eius labore est atque voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nostrum nemo excepturi voluptas quos modi vel enim culpa, sequi earum voluptatibus debitis quia accusantium aut architecto rem at corporis expedita?",
      autorName: "Akihito Tsukushi",
      releaseDate: "20.07.2017",
      lastDate: "11.11.2025",
    },
    {
      name: "Fullmetal Alchemist: Resurgence",
      likes: "980",
      img: 'tabimg6',
      dislikes: "34",
      views: "720K",
      plus: true,
      rating: "PG-13",
      vols: "12",
      chapters: "130",
      awards: "2",
            tags: [
        {
          color: '#F3E8DB',
          bgColor: '#D71F1F',
          tag: 'Extreme Violence',
        },
        {
          color: '#F3E8DB',
          bgColor: '#D71F1F',
          tag: 'Torture',
        },
        {
          color: '#F3E8DB',
          bgColor: '#29121C',
          tag: 'Nudity',
        },
        {
          color: '#F3E8DB',
          bgColor: '#29121C',
          tag: 'Sexual Assault (Mentioned)',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Dark Fantasy',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Medieval',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Demons',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Revenge',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Tragedy',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'War',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Madness',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Blood',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Betrayal',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Survival',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Psychological Horror',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Cursed Mark',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Nightmare',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Armor',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Mercenary',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Destiny',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Fate',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Sacrifice',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Religion',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: '+12',
        },
      ],
      para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores aliquid quam quibusdam illo, soluta incidunt, consectetur voluptate facilis voluptatibus id repellat similique laboriosam earum iusto, eius labore est atque voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nostrum nemo excepturi voluptas quos modi vel enim culpa, sequi earum voluptatibus debitis quia accusantium aut architecto rem at corporis expedita?",
      autorName: "Akihito Tsukushi",
      releaseDate: "20.07.2017",
      lastDate: "11.11.2025",
    },
    {
      name: "Vinland Saga — The Journey North",
      likes: "2.6K",
      img: 'tabimg7',
      dislikes: "180",
      views: "1.8M",
      plus: true,
      rating: "PG-13",
      vols: "12",
      chapters: "130",
      awards: "2",
            tags: [
        {
          color: '#F3E8DB',
          bgColor: '#D71F1F',
          tag: 'Extreme Violence',
        },
        {
          color: '#F3E8DB',
          bgColor: '#D71F1F',
          tag: 'Torture',
        },
        {
          color: '#F3E8DB',
          bgColor: '#29121C',
          tag: 'Nudity',
        },
        {
          color: '#F3E8DB',
          bgColor: '#29121C',
          tag: 'Sexual Assault (Mentioned)',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Dark Fantasy',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Medieval',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Demons',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Revenge',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Tragedy',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'War',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Madness',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Blood',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Betrayal',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Survival',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Psychological Horror',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Cursed Mark',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Nightmare',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Armor',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Mercenary',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Destiny',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Fate',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Sacrifice',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Religion',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: '+12',
        },
      ],
      para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores aliquid quam quibusdam illo, soluta incidunt, consectetur voluptate facilis voluptatibus id repellat similique laboriosam earum iusto, eius labore est atque voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nostrum nemo excepturi voluptas quos modi vel enim culpa, sequi earum voluptatibus debitis quia accusantium aut architecto rem at corporis expedita?",
      autorName: "Akihito Tsukushi",
      releaseDate: "20.07.2017",
      lastDate: "11.11.2025",
    },
    {
      name: "Cyberpunk: Afterlight",
      likes: "2.1K",
      img: 'tabimg8',
      dislikes: "112",
      views: "1.6M",
      plus: true,
      rating: "PG-13",
      vols: "12",
      chapters: "130",
      awards: "2",
            tags: [
        {
          color: '#F3E8DB',
          bgColor: '#D71F1F',
          tag: 'Extreme Violence',
        },
        {
          color: '#F3E8DB',
          bgColor: '#D71F1F',
          tag: 'Torture',
        },
        {
          color: '#F3E8DB',
          bgColor: '#29121C',
          tag: 'Nudity',
        },
        {
          color: '#F3E8DB',
          bgColor: '#29121C',
          tag: 'Sexual Assault (Mentioned)',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Dark Fantasy',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Medieval',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Demons',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Revenge',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Tragedy',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'War',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Madness',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Blood',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Betrayal',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Survival',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Psychological Horror',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Cursed Mark',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Nightmare',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Armor',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Mercenary',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Destiny',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Fate',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Sacrifice',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Religion',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: '+12',
        },
      ],
      para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores aliquid quam quibusdam illo, soluta incidunt, consectetur voluptate facilis voluptatibus id repellat similique laboriosam earum iusto, eius labore est atque voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nostrum nemo excepturi voluptas quos modi vel enim culpa, sequi earum voluptatibus debitis quia accusantium aut architecto rem at corporis expedita?",
      autorName: "Akihito Tsukushi",
      releaseDate: "20.07.2017",
      lastDate: "11.11.2025",
    },
    {
      name: "Spy x Family: Operation Dawn",
      likes: "123",
      img: 'tabimg9',
      dislikes: "12",
      views: "1,200",
      plus: false,
      rating: "PG-13",
      vols: "12",
      chapters: "130",
      awards: "2",
            tags: [
        {
          color: '#F3E8DB',
          bgColor: '#D71F1F',
          tag: 'Extreme Violence',
        },
        {
          color: '#F3E8DB',
          bgColor: '#D71F1F',
          tag: 'Torture',
        },
        {
          color: '#F3E8DB',
          bgColor: '#29121C',
          tag: 'Nudity',
        },
        {
          color: '#F3E8DB',
          bgColor: '#29121C',
          tag: 'Sexual Assault (Mentioned)',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Dark Fantasy',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Medieval',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Demons',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Revenge',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Tragedy',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'War',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Madness',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Blood',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Betrayal',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Survival',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Psychological Horror',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Cursed Mark',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Nightmare',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Armor',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Mercenary',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Destiny',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Fate',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Sacrifice',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Religion',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: '+12',
        },
      ],
      para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores aliquid quam quibusdam illo, soluta incidunt, consectetur voluptate facilis voluptatibus id repellat similique laboriosam earum iusto, eius labore est atque voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nostrum nemo excepturi voluptas quos modi vel enim culpa, sequi earum voluptatibus debitis quia accusantium aut architecto rem at corporis expedita?",
      autorName: "Akihito Tsukushi",
      releaseDate: "20.07.2017",
      lastDate: "11.11.2025",
    },
    {
      name: "Tokyo Ghoul — Lost City",
      likes: "1.9K",
      img: 'tabimg10',
      dislikes: "88",
      views: "1.3M",
      plus: true,
      rating: "PG-13",
      vols: "12",
      chapters: "130",
      awards: "2",
            tags: [
        {
          color: '#F3E8DB',
          bgColor: '#D71F1F',
          tag: 'Extreme Violence',
        },
        {
          color: '#F3E8DB',
          bgColor: '#D71F1F',
          tag: 'Torture',
        },
        {
          color: '#F3E8DB',
          bgColor: '#29121C',
          tag: 'Nudity',
        },
        {
          color: '#F3E8DB',
          bgColor: '#29121C',
          tag: 'Sexual Assault (Mentioned)',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Dark Fantasy',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Medieval',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Demons',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Revenge',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Tragedy',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'War',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Madness',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Blood',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Betrayal',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Survival',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Psychological Horror',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Cursed Mark',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Nightmare',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Armor',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Mercenary',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Destiny',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Fate',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Sacrifice',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: 'Religion',
        },
        {
          color: '#7C5B46',
          bgColor: '#EBDAC9',
          tag: '+12',
        },
      ],
      para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores aliquid quam quibusdam illo, soluta incidunt, consectetur voluptate facilis voluptatibus id repellat similique laboriosam earum iusto, eius labore est atque voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nostrum nemo excepturi voluptas quos modi vel enim culpa, sequi earum voluptatibus debitis quia accusantium aut architecto rem at corporis expedita?",
      autorName: "Akihito Tsukushi",
      releaseDate: "20.07.2017",
      lastDate: "11.11.2025",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const handleNext = () => setActiveTab((prev) => (prev + 1) % tabs.length);
  const handlePrev = () =>
    setActiveTab((prev) => (prev - 1 + tabs.length) % tabs.length);

  return (
    <>
    <div className="hero">
      <div className="custom_container">
        <div className="tabs">
          {tabs.map((tab, index) => (
            <div key={index} onClick={() => setActiveTab(index)}>
              <TabCard {...tab} active={activeTab === index} />
            </div>
          ))}
        </div>

        <div className="details">
          {/* ✅ Pass data of selected tab */}
          <TabDetail {...tabs[activeTab]} />

          <div className="arrow_batns">
            <div className="arrow_batn" onClick={handlePrev}>
              <img src="/images/ArrowFatLinesLeft.svg" alt="" /><span> Previous work</span>
            </div>
            <div className="arrow_batn" onClick={handleNext}>
             <span> Next work </span><img src="/images/ArrowFatLinesRight.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Collection />
    <Creators />
    <PopularGenres />
    <Welcome />
    <Updates />
    <Stories />
    </>
  );
}
