"use client" 
import Image from 'next/image';
import Link from 'next/link';
import { DiGithubBadge } from "react-icons/di";
import { SiTistory, SiVelog, SiGithub } from "react-icons/si";
import { TypeAnimation } from 'react-type-animation';
import ProfileThumb from '../../public/images/profile.jpg';
import '../../styles/profile.scss'

export default function Profile() {
	return (
		<>
			<section className="home-section" id="home">
				<div className="flex h-100 items-center align-contnet-center">
					<div className="home-text">
						<h1>전예원의 포트폴리오입니다. <span>프론트엔드 개발자</span></h1>
						<h2>Explore the world of Competitive Programming.</h2>
						<a href="#course" className="btn btn-1">get started</a>
					</div>
					<div className="home-img">
						<div className="home-img-inner">
							<div className="home-course">
								<div className="home-course-item">java<br/>script</div>
								<div className="home-course-item">scss</div>
								<div className="home-course-item">Type<br/>Script</div>
								<div className="home-course-item">react</div>
							</div>
							<Image src={ProfileThumb} alt="home-img" />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
