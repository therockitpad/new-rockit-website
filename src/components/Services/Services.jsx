import React, { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import image1 from './images/features-1.jpg';
import image2 from './images/features-2.jpg';
import image3 from './images/features-3.jpg';
import image4 from './images/features-4.jpg';
import './Services.css';

const images = [ image1, image2, image3, image4 ];

const content = [
    {
        header : 'Custom Websites',
        title  : 'Design and build a unique website.',
        desc   :
            'We can create a website from scratch, or improve an existing website. We can also work with templates and sites such as wordpress and wix.'
    },
    {
        header : 'Social Media Management',
        title  : 'Expand your outreach through social media.',
        desc   :
            'We can manage multiple social media accounts, handling everything from account setup to continual maintenance. We will post content daily and will create graphic content and videos on a monthly basis.'
    },
    {
        header : 'Digital Marketing',
        title  :
            'Vast array of tools and knowledge to help you achieve your marketing needs.',
        desc   :
            'Search Engine Optimization, Email campaigns, advertising, are just a few options available in our marketing arsenal. We can create innovative designs and content that will catch the eye of your audience, and will increase your brand engagement.'
    },
    {
        header : 'Graphic Design',
        title  : 'Eye catching designs that will engage your audience.',
        desc   :
            'Custom images and videos help to captivate your audience and convey meaning. We can incorporate original designs to your website, social media, or marketing materials.'
    }
];

const Services = ({ servicesRef }) => {
    const [ index, setIndex ] = useState(0);

    const handleSelect = (selectIndex, e) => {
        setIndex(selectIndex);
    };

    const incrementIndex = () => {
        setIndex((i) => (i + 1) % images.length);
    };

    const decrementIndex = () => {
        setIndex((i) => {
            let ind = i - 1;
            while (ind < 0) ind += images.length;
            return ind;
        });
    };

    return (
        <section
            id="services-section"
            data-aos="fade-up"
            data-aos-delay="100"
            ref={servicesRef}
        >
            <div className="col-12 text-center mb-5">
                <h2 className="mb-3 h1 text-primary">Services</h2>
                <h4 className="lead">See what RockIT can do for you!</h4>
            </div>
            <Container className="services-carousel">
                <Carousel
                    className="servies-carousel-image"
                    activeIndex={index}
                    onSelect={handleSelect}
                    controls={false}
                    indicators={false}
                    interval={null}
                >
                    {images.map((img, i) => (
                        <Carousel.Item key={i}>
                            <img className="w-100" src={img} alt="carousel" />
                        </Carousel.Item>
                    ))}
                </Carousel>
                <div className="carousel-controls">
                    <button
                        className="btn btn-primary btn-lg rounded-0"
                        onClick={decrementIndex}
                    >
                        <FaArrowLeft />
                    </button>
                    <button
                        className="btn btn-primary btn-lg rounded-0"
                        onClick={incrementIndex}
                    >
                        <FaArrowRight />
                    </button>
                </div>
                <Carousel
                    className="services-carousel-text-item"
                    activeIndex={index}
                    onSelect={handleSelect}
                    controls={false}
                    indicators={false}
                    interval={null}
                >
                    {content.map((c, i) => (
                        <Carousel.Item
                            key={i}
                            className="services-carousel-text-item"
                        >
                            <h2 className="section-title mb-3 text-primary h2">
                                {c.header}
                            </h2>
                            <p className="lead">{c.title}</p>
                            <p>{c.desc}</p>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
        </section>
    );
};

export default Services;
