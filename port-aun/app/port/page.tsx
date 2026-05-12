import { Inter } from "next/font/google";
import { MoveLeft } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

const contacts = [
    { label: "INSTAGRAM", value: "thichacz" },
    { label: "GMAIL", value: "aunthicha2004@gmail.com" },
    { label: "LINE", value: "thichacz" },
    { label: "PHONE NUMBER", value: "098-629-9188" },
];

export default function ModelCard() {
    return (
        <main
            className={`${inter.className} min-h-screen bg-white flex justify-center px-6 py-10 sm:py-16`}
        >
            <div className="w-full max-w-100">

                {/* ── Name + Age ── */}
                <div className="flex items-baseline gap-2 mb-1">
                    <h1 className="text-[28px] sm:text-[38px] font-semibold uppercase text-black leading-none tracking-tracker">
                        ANTHICHA
                    </h1>
                    <span className="text-[14px] sm:text-lg font-light text-gray-500 tracking-tracker">
                        ,22 y
                    </span>
                </div>

                {/* ── Stats ── */}
                <p className="text-[10px] sm:text-[11px] text-gray-500 font-light tracking-wide leading-relaxed">
                    Height: 176&nbsp;&nbsp;Chest: 30&nbsp;&nbsp;Waist: 24&nbsp;&nbsp;Hips: 35&nbsp;&nbsp;Shoe Size: 38EU
                </p>

                {/* ── Photo ── */}
                <div className="mt-10 mb-8 w-full aspect-3/4 bg-gray-200 overflow-hidden">
                    <img
                        src="picture/model.png"
                        alt="Anthicha"
                        className="w-full h-full object-cover object-top grayscale"
                    />
                </div>

                {/* ── Arrow ── */}
                <div className="flex justify-end mb-8">
                    <svg width="50" height="10" viewBox="0 0 80 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M80 7.5H1M1 7.5L8 1M1 7.5L8 14" stroke="black" strokeWidth="1" strokeLinejoin="round" />
                    </svg>
                </div>

                {/* ── Contacts ── */}
                <div className="flex flex-col gap-2.5 sm:gap-3">
                    {contacts.map(({ label, value }) => (
                        <div key={label} className="flex items-start">
                            <span className="text-[11px] sm:text-xs font-bold text-black tracking-widest uppercase w-30 sm:w-33 shrink-0">
                                {label}
                            </span>
                            <span className="text-[11px] sm:text-xs font-light text-gray-500 tracking-wide">
                                : {value}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}