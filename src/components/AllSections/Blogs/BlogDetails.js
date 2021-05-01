import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import blog1 from '../../../images/blog1.jpg';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase : 'liner'
  };

  const blogs =[
      {
          image : blog1,
          title : 'What Is JavaScript',
          links : 'https://niazmurshed16.medium.com/what-is-javascript-7891faf53752'
      },
      {
        image : 'https://miro.medium.com/max/2400/1*YePVzjkjsadOqzQ03wl5kA.png',
        title : 'What is React Js',
        links : 'https://niazmurshed16.medium.com/what-is-reactjs-ce71d4b70f5e'
    },
    {
        image : 'https://miro.medium.com/max/1402/1*j8DELPVuI_w8045sxmHQsA.png',
        title : 'What is Express',
        links : 'https://niazmurshed16.medium.com/what-is-express-js-753d13e8dbae'
    },
    {
        image : blog1,
          title : 'What Is JavaScript',
          links : 'https://niazmurshed16.medium.com/what-is-javascript-7891faf53752'
    },
    {
        image : 'https://miro.medium.com/max/2400/1*YePVzjkjsadOqzQ03wl5kA.png',
        title : 'What is React Js',
        links : 'https://niazmurshed16.medium.com/what-is-reactjs-ce71d4b70f5e'
    },
    {
        image : 'https://miro.medium.com/max/1402/1*j8DELPVuI_w8045sxmHQsA.png',
        title : 'What is Express',
        links : 'https://niazmurshed16.medium.com/what-is-express-js-753d13e8dbae'
    }

  ]


const BlogDetails = () => {
    return (
        <div>
            <Container id="blogs">
            <hr/>
            <h1 className="text-center mt-5 text-dark">My Blogs</h1>
            <Slider {...settings} className="mt-5  mb-5">
                    {

                           blogs.map((blog, idx )=> 
                            <Card style={{width : '200px'}} className="d-flex align-items-center justify-content-between  bg-white rounded">
 

                                <Card.Img style={{height : '200px', width : '90%'}} className="card-image mt-4 rounded" variant="top" src={blog.image} />
                                <Card.Body>
                                        <h4 style={{ color : '#17B995'}} className="mt-4 text-left">{blog.title}</h4>
                                        <hr style={{width : '20%', marginLeft: '0px', backgroundColor : '#d1c398', height : '2px'}}/>
                                        <Button variant="outline-success d-block" className="text-center"><a href={blog.links}>View Details</a></Button>                                      
                                    </Card.Body>
                            </Card>
                            )
                    }         
                </Slider>          
        </Container>
        </div>
    );
};

export default BlogDetails;