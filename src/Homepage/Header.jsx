import React from 'react'
import Sidebar from './Sidebar';
// import Marquee from 'react-fast-marquee';

function Header() {
  return (
    <>
    {/* <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'> */}
      
    <div className='menudiv'>
        <div className='topheadersurch'>
            <div className='gap'></div>
              <div className='surch'>
                <nav class="navbarbackground">

                {/* <hr className='menuline'/>
                <hr className='menuline'/>
                <hr className='menuline'/> */}
                         <div className='surchdiv'>

                             <form class="form-inline my-2 my-lg-0">
                                <input className="sinput" type="search" placeholder="Search"/>
                                <i class="far fa-search"></i>
                                {/* <button class="sbutton" type="submit">Search</button> */}
                             </form>
                         </div>
                </nav> 
              </div>

        </div>
      <div className='secondheader'></div>
      <div className='secondheader'></div>
      <div className='secondheader'></div>
      <div className='secondheader'></div>
      <div className="marq" style={{borderRadius:'10px',backgroundColor:'orange',width:'100%',height:'28px',display:'inline-block'}}>
      <div className='left float-left text-center' style={{borderRadius:'10px 0px 0px 10px',fontWeight:'500',backgroundColor:'#FFB84C',width:'13%',height:'28px'}}>
      <p>News Ticker</p></div>
      <div className='right float-left' style={{backgroundColor:'',width:'87%',height:'28px',color:'#fff'}}>
      <marquee>List of Observers Deployed in Assembly Elections 2023: List of Observers
       Deployed in Bye Elections 2023: General Election to Legislative Assemblies of 
       Meghalaya, Nagaland and Tripura,
       2023 - Press Note- reg.
       Schedule for Bye-election to 1(one) Parliamentary Constituency of UT of
        Lakshadweep and 6 (Six) Legislative Assemblies of Arunachal Pradesh, 
       Jharkhand, Tamil Nadu, West Bengal and Maharashtra– reg. ‘Know Your Candidate’ Mobile
        Application</marquee></div>
      {/* <h4>News Ticker</h4>
      <marquee>
        Papiya Dhepi
      </marquee> */}
      {/* <div className='marqee'>
        <div className='news'><p>NEWS TICKER</p></div>
        <div className='news'>
          <p>NEWS TICKER</p>
        </div>
        <div className='ticker'>
          <marquee>
            <p> papiya mandal</p>
          </marquee>
        </div> */}
      </div>
      
        
    </div>
    
       
                 {/*  
                  <hr className='line1 m-1'></hr>
                  <hr className='line2 m-1'></hr>
                  <hr className='line1 m-1'></hr>  */}

    </>

  )
}

export default Header;
{/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
                         <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                             <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search"/>
                                       <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                             </form>
                         </div>
                    </nav>  */}