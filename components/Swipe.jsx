import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay, Pagination } from "swiper"
import Image from "next/image"

SwiperCore.use([Autoplay, Pagination ])

export default function Swipe({ images }) {
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            autoplay= {{
                delay: 5000
            }}
            pagination={{ clickable: true }}
            className="flex items-center justify-center lg:w-1/3 bg-gray-100 rounded-lg"
        >
            {images.map((i, d) => (
                <SwiperSlide key={i.id}
                    className="flex justify-center"
                >
                    <Image 
                        src={i.url}
                        alt={i.url}
                        width={330}
                        height={385}
                        className="object-cover rounded-md"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}