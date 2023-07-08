import React from 'react'


const NewsItems =(props)=>{
 

    let {Title , description , imageurl , newsurl , auther , date , source} = props ; //destructuring
    
    return (
      <div>
            <div className="card my-3" >
                        
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-danger">
                {source}
            </span>       
                <img className="card-img-top" src={imageurl} alt="Card image cap" />
                
                <div className="card-body">
                    <h5 className="card-title">{Title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsurl} target = "_blank" className="btn btn-sm btn-dark">Read More</a>
                    <div className="card-footer text-muted my-3">
                        by {auther} <br/> on {date}
                    </div>
                </div>
            </div>
      </div>
    )
  
}
export default NewsItems 