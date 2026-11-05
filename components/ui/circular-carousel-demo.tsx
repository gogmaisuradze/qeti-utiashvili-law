"use client";

import { CircularCarousel } from "@/components/ui/circular-carousel";

const items = [
  {
    id: "1",
    title: "უძრავი ქონება & მშენებლობა",
    description: "საკუთრების უფლება, დეველოპერული ხელშეკრულებები, მშენებლობის ნებართვები და საჯარო რეესტრის დავები.",
    tag: "Real Estate",
  },
  {
    id: "2",
    title: "სამეწარმეო & კორპორაციული",
    description: "კომპანიების დაფუძნება, პარტნიორთა შეთანხმებები, M&A და კორპორაციული მმართველობის აუდიტი.",
    tag: "Corporate",
  },
  {
    id: "3",
    title: "სამოქალაქო & სახელშეკრულებო",
    description: "კომპლექსური ხელშეკრულებების მომზადება, ვალდებულებების იძულებითი შესრულება და ზიანის ანაზღაურება.",
    tag: "Civil Law",
  },
  {
    id: "4",
    title: "მედიაცია & მორიგება",
    description: "სერტიფიცირებული მედიაცია, სასამართლომდე მორიგება და კონფიდენციალური მოლაპარაკებების მართვა.",
    tag: "Mediation",
  },
  {
    id: "5",
    title: "ადმინისტრაციული & საგადასახადო",
    description: "სახელმწიფო ორგანოების გადაწყვეტილებების გასაჩივრება, საგადასახადო აუდიტი და დავები სასამართლოში.",
    tag: "Tax & Admin",
  },
  {
    id: "6",
    title: "საოჯახო & მემკვიდრეობითი",
    description: "ქონების გაყოფა, საქორწინო კონტრაქტები, სამკვიდრო მასის განკარგვა და საერთაშორისო მემკვიდრეობა.",
    tag: "Family Law",
  },
];

export default function CircularCarouselDemo() {
  return (
    <div className="flex min-h-[540px] w-full items-center justify-center bg-[#0B111E] p-8">
      <CircularCarousel items={items} />
    </div>
  );
}
