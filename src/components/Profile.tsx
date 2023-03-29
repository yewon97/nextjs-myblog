"use client" 
import Image from 'next/image';
import Link from 'next/link';
import { DiGithubBadge } from "react-icons/di";
import { SiTistory, SiVelog } from "react-icons/si";
import { TypeAnimation } from 'react-type-animation';
import ProfileThumb from '../../public/images/profile.jpg'

export default function Profile() {
	return (
		<>
			<div className='profile-container my-20'>
				<div className="profile__inner flex justify-between items-center w-4/5 mx-auto">
					<div className="profile-details">
						<ul className='profile-details__sns'>
							<li>
								<Link href="/about"><DiGithubBadge /></Link>
							</li>
							<li>
								<Link href="/"><SiTistory /></Link>
							</li>
							<li>
								<Link href="/"><SiVelog /></Link>
							</li>
						</ul>

						<div className='profile-details__intro'>
							<span className="primary-text">
								Hey, I'm <span className='highlighted-text'>Jeon Yewon!</span>
							</span>
						</div>
						<div className="profile-details__role">
							<TypeAnimation
								sequence={['Frontend Dev 💻', 1000, 'Enthusiastic Dev 😎', 1000]}
								style={{ fontSize: '2em' }}
								repeat={Infinity}
							/>
							<p>안녕하세요. 내적 동기가 높고 끊임없이 발전하는 프론트엔드 개발자! <br/>전예원의 포트폴리오 입니다.</p>
						</div>
						
						<div className='profile-details__options'>
							<button type='button'>More</button>
							<button type='button'>Get Resume</button>
						</div>
					</div>

					<div className='profile-thumb'>
						<div className="profile-thumb__img">
							<Image src={ProfileThumb} className='rounded-full' alt="프로필 사진" width={300} height={300} />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
