import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Utils.css';


export const AppLogo = () => {
  return <div className="logo">My Portfolio</div>;
};

export const TodosCount=(list)=>{
    return <span>Total: {list.length}</span>;
}

export function Item(item,handleDelete){
  const {title,id}= item
  return (
    <li className="item" key={item.id}>
      <span>{title}</span>
      <button 
        id={id}
        className="btn-remove"
        onClick={()=>handleDelete(id)}
      >
        <FontAwesomeIcon className="control-icon" icon="trash"/>
      </button>
    </li>
    
  )
}

export function Project(props){
  const {id,name,title,description,path}= props
  return (
    <div className = {name} key={id}>
			<h3>{title}</h3>
			<p>{description}</p>
			<div className = "row">
				<div className = "col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
					<div className = "project-more-info">
							<Link className = "btn btn-default btn-border" to ={path}>More</Link>
					</div>
				</div>
			</div>
		</div>
  )
}

export function SummarySection(props){
  const {id,name,title,description,img}= props
  return (
    <div className={name+`-summary`} key={id}>
      <div className = "col-sm-1 col-md-1">
        <div className = {name+"-img"}>
          <img alt={name} className = "img-responsive" src={img}/>
        </div>
			</div>

			<div className = "col-sm-4 col-md-4">
        <div className = {name+"-description"}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
			</div>
    </div>
  )
}

export const data={
  projects:[
    {
      id:1,
      name:'luvtalk project', 
      title:'LUV TALK Website', 
      description:'Website, created during my first internship, which utilized HTML, CSS, PHP, Ajax, Javascript/jQuery, and Wordpress.',
      path:"#"
    },
    {
      id:2,
      name:'personal-website project', 
      title:'Personal Website', 
      description:'Enjoyable side project that was created to experiment with more HTML and CSS, but also provided an outlet to showcase my abilities and interests.',
      path:"#"
    },
    {
      id:3,
      name:'strike-zone project', 
      title:'Strike Zone Analysis<', 
      description:'Data analytics project completed during my time at the Illinois Math and Science Academy which studied the baseball strike zone based on the state of the game.',
      path:"#"
    },
  ],
  summary:[
    {
      id:1,
      name:"development",
      title:'Development and Design', 
      description:'I aim to put my creativity to the test, designing and building unique, meaningful products for clients or merely for my own interests.', 
      img:"../../images/developerdesign.svg"
    },
    {
      id:2,
      name:"responsive",
      title:'Responsive Layouts', 
      description:'Development and design is not merely putting information on the site or preferred media outlet. I organize content and present information in an engaging fashion, driving new and unique layouts in tandem with novel solutions and cool animations.<', 
      img:'../../images/responsivedesign.svg'
    },
    {
      id:3,
      name:"idea",
      title:'Ideas and Solutions', 
      description:`There are still many problems that exist in today's society, including laziness. Luckily, I hope to combat these issues by innovating, developing easy-to-use programs, solutions, or products.`, 
      img:'../../images/innovativesolutions.svg'
    },
    {
      id:4,
      name:"passion",
      title:'Passion and Dedication', 
      description:'With my profound interest and commitment to my field of study, my projects rarely go unfinished and my problems are never left unresolved.', 
      img:'../../images/passion.svg'
    },
  ],
  about:{
    description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    facts:[
      `Male, 200 years old`,
      `Five feet 110 inches`,
      `Favorite fonts:Roboto`,
      `Loves to learn new things`
    ]
  }
}