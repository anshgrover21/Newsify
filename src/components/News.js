import React, { useState ,useEffect} from "react";
import NewsItems from "./NewsItems";
import PropTypes from 'prop-types';
import Loading from "./loading";
import InfiniteScroll from "react-infinite-scroll-component"; 




const News = (props) => {

  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(false)
  const [page, setpage] = useState(1)
  const [pagelength, setpagelength] = useState(undefined)
 

     document.title = props.m=="Home"? "NewMonkey - Explore Insight":`${props.m} - NewsMokey`
 

 const updateNews = async ()=>{
    props.setProgress(0)
   setloading(true)
     let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=07ef705ca275462b9f655f1feb2779ec&page=${page}&pageSize=${props.pageSize}`
    );
    props.setProgress(30)
    let parsedData = await data.json();
    props.setProgress(70)
    console.log(parsedData);
    setloading(false)   
    setarticles( parsedData.articles) 
    setpagelength( parsedData.totalResults) 
   
    props.setProgress(100)
     console.log(4);
  }

  useEffect(() => {
    updateNews()   
     console.log(5);
  }, []) // ye jo array hai ye bassically jiske effecxt pe use effect run ho vo change hai toa bhi ke lie use empty rakhenge ham
  

  // async componentDidMount() {
  //  this.updateNews()
  // }

  const fetchMoreData = async () => {
     console.log(1);
    setpage(page +1)
   
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=07ef705ca275462b9f655f1feb2779ec&page=${page+1}&pageSize=${props.pageSize}`
    );
    let parsedData = await data.json();
    console.log(parsedData);
      
   
    setarticles( articles.concat(parsedData.articles))
    setpagelength( parsedData.totalResults,)
    // console.log(6);
    // this.setState({ 
    //     loading : false,
    //        articles: this.state.articles.concat(parsedData.articles) ,
    //        pagelength : parsedData.totalResults,
         
    // });
    
  }

//    nextpageload = async ()=>{
//     this.setState({
//         page : this.state.page + 1
//     })
//     this.updateNews()
//   }

//   prevpageload = async ()=>{
//     this.setState({
//         page : this.state.page - 1
//     })
//     this.updateNews()
//   }


    return (
      <div className="container  ">
        <h1  style={{ margin: '40px', marginTop : '90px' , textAlign : 'center' }} >Top HOTS </h1>

        {loading && <Loading/>} 
        
        <InfiniteScroll
                
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== pagelength }
          loader={<Loading/>}
        >
       {console.log(2)}
        <div className="row">
          {
               articles.map((elements) => {
            return <div className="col-md-4" key={elements.url}>
              
                {" "}
                {/* it is nescessary to send key as a unique url in the from the list*/}
                <NewsItems
                  Title={elements.title}
                  description={
                    elements.description
                      ? elements.description.slice(0, 100) + "..."
                      : ".. "
                  }
                  imageurl={
                    elements.urlToImage
                      ? elements.urlToImage
                      : "https://www.cartoq.com/wp-content/uploads/2023/03/hyundai-verna-featured.jpeg"
                  }
                  newsurl={elements.url} 

                  auther={elements.author?elements.author:"unknown"}

                  date={new Date(elements.publishedAt).toUTCString()}

                  source={elements.source.name}


                />

              </div>
            
          })}
                
        </div>
        </InfiniteScroll>
        {console.log(3)}
{/*        
           <div className="d-flex justify-content-between ">
                <button type="button" className="btn btn-outline-dark btn-sm" onClick={this.prevpageload} disabled={this.state.page<=1} >Previous</button>
                <button type="button" className="btn btn-outline-dark btn-sm"  onClick={this.nextpageload} disabled={this.state.page == Math.ceil(this.state.pagelength/12) }>Next</button>
           </div>    */}
      </div>
    );
  
}

News.defaultProps = {
  country : 'in',
  category : 'general',
  pageSize: 5,
  m : 'Home'
}

News.propTypes = {
  country : PropTypes.string,
  pageSize : PropTypes.number,
  category : PropTypes.string,
  m : PropTypes.string
}  

export default News