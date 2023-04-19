'use client';
import Image from 'next/image';
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import '../../styles/portfolioswiper.scss'

export default function PortfolioSwiper() {
	return (
		<>
			<section className="courses-section sec-padding" id="courses">
				<div className="container">
					<div className="row">
						<div className="section-title">
							<h2>My <span>Portfolio</span> </h2>
						</div>
					</div>
					<Swiper
						modules={[Pagination, Navigation]}
						slidesPerView={1}
						spaceBetween={0}
						loop={true}
						centeredSlides={true}
						pagination={{
							clickable: true,
						}}
						navigation={true}
						className="mySwiper"
					>
						<SwiperSlide className="course-item">
							<a href="#">
								<div className="course-img">
									<Image src="/images/1.jpg" alt="home-img" width={100} height={100} />
									<div className="course-price">
										$125
									</div>
								</div>
								<div className="course-info flex justify-between">
									<h3>javascript</h3>
									<button className='btn btn-1'>Demo</button>
								</div>
							</a>
						</SwiperSlide>
						<SwiperSlide className="course-item">
							<a href="#">
								<div className="course-img">
									<Image src="/images/1.jpg" alt="home-img" width={100} height={100} />
									<div className="course-price">
										$49
									</div>
								</div>
								<div className="course-info">
									<ul>
										<li>10 lecures</li>
										<li>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
										</li>
									</ul>
									<h3>Bootstrap</h3>
								</div>
							</a>
						</SwiperSlide>
						<SwiperSlide className="course-item">
							<a href="#">
								<div className="course-img">
								<Image src="/images/1.jpg" alt="home-img" width={100} height={100} />
									<div className="course-price">
										$99
									</div>
								</div>
								<div className="course-info">
									<ul>
										<li>15 lecures</li>
										<li>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
										</li>
									</ul>
									<h3>react js</h3>
								</div>
							</a>
						</SwiperSlide>
						<SwiperSlide className="course-item">
							<a href="#">
								<div className="course-img">
								<Image src="/images/1.jpg" alt="home-img" width={100} height={100} />
									<div className="course-price">
										$149
									</div>
								</div>
								<div className="course-info">
									<ul>
										<li>30 lecures</li>
										<li>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
										</li>
									</ul>
									<h3>php programming</h3>
								</div>
							</a>
						</SwiperSlide>
					</Swiper>
				</div>
			</section>
		</>
	)
}
